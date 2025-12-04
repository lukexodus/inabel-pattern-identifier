"""
Prolog Interface for Inabel Pattern Identification
This module provides a Python interface to query the Prolog knowledge base.
"""

"""
Prolog Interface for Inabel Pattern Identification.

This version does NOT embed SWI-Prolog via pyswip. Instead it uses a
long-lived `swipl` subprocess that loads `inabel.ai.pl` and communicates
using a JSON protocol over stdin/stdout.
"""

import json
import subprocess
from typing import Dict, List, Optional, Any


class PrologProcess:
    """Manage a long-lived SWI-Prolog process speaking a JSON protocol.

    The Prolog side (in `inabel.ai.pl`) must define `main_json_loop/0` that:
      * reads one JSON line from stdin
      * handles the command
      * writes a single-line JSON response to stdout
    """

    def __init__(self, prolog_file_path: str = '../inabel.ai.pl') -> None:
        self.prolog_file_path = prolog_file_path
        self.proc = subprocess.Popen(
            [
                "swipl",
                "-q",           # quiet
                "-s", self.prolog_file_path,
                "-g", "main_json_loop"
                # No -t halt here; main_json_loop handles its own loop and exit
            ],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=1,
        )

    def _send(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Send a JSON command and wait for a JSON response."""
        if not self.proc or self.proc.stdin is None or self.proc.stdout is None:
            raise RuntimeError("Prolog process is not running")

        line = json.dumps(payload, ensure_ascii=False)
        self.proc.stdin.write(line + "\n")
        self.proc.stdin.flush()
        # Prolog's json_write_dict pretty-prints JSON across multiple lines,
        # so we need to read until we have a complete JSON object.
        buffer = ""
        brace_depth = 0

        while True:
            response_line = self.proc.stdout.readline()
            if not response_line:
                # Process ended or no output; surface stderr for debugging
                stderr = self.proc.stderr.read() if self.proc.stderr else ""
                raise RuntimeError(
                    f"Prolog process terminated unexpectedly or returned no JSON. Stderr: {stderr}"
                )

            # Accumulate raw text; don't strip internal whitespace
            buffer += response_line

            # Track curly brace depth to detect end of JSON object
            for ch in response_line:
                if ch == "{":
                    brace_depth += 1
                elif ch == "}":
                    brace_depth -= 1

            # Once we've closed all opened braces, try to parse the buffer
            if brace_depth <= 0 and buffer.strip():
                try:
                    parsed = json.loads(buffer)
                except json.JSONDecodeError:
                    # If parsing fails, reset and keep listening; also surface
                    # stderr to aid debugging rather than hanging forever.
                    stderr = self.proc.stderr.read() if self.proc.stderr else ""
                    raise RuntimeError(
                        "Failed to parse JSON from Prolog. "
                        f"Buffer was: {buffer!r}. Stderr: {stderr}"
                    )

                if isinstance(parsed, dict):
                    return parsed
                else:
                    raise RuntimeError(
                        f"Unexpected JSON type from Prolog (expected object): {type(parsed)}"
                    )

    # Low-level protocol wrappers

    def get_all_pattern_names(self) -> List[str]:
        resp = self._send({"cmd": "get_all_pattern_names"})
        return resp.get("names", [])

    def get_all_features(self) -> List[str]:
        resp = self._send({"cmd": "get_all_features"})
        return resp.get("features", [])

    def get_feature_question(self, feature: str) -> Optional[str]:
        resp = self._send({"cmd": "get_feature_question", "feature": feature})
        return resp.get("question")

    def get_all_feature_questions(self) -> Dict[str, str]:
        resp = self._send({"cmd": "get_all_feature_questions"})
        # Prolog builds a dict under "features"
        return resp.get("features", {})

    def identify_pattern(self, responses: List[tuple]) -> Optional[Dict[str, Any]]:
        payload_responses = [{"feature": f, "answer": a} for (f, a) in responses]
        resp = self._send({"cmd": "identify_pattern", "responses": payload_responses})
        if resp.get("status") == "found":
            return resp.get("pattern")
        return None

    def get_next_question(self, responses: List[tuple], candidates: List[str]) -> Optional[str]:
        payload_responses = [{"feature": f, "answer": a} for (f, a) in responses]
        resp = self._send(
            {
                "cmd": "get_next_question",
                "responses": payload_responses,
                "candidates": candidates,
            }
        )
        if resp.get("status") == "ok":
            return resp.get("feature")
        return None

    def filter_patterns(self, responses: List[tuple]) -> List[str]:
        payload_responses = [{"feature": f, "answer": a} for (f, a) in responses]
        resp = self._send({"cmd": "filter_patterns", "responses": payload_responses})
        return resp.get("candidates", [])

    def get_pattern_by_name(self, name: str) -> Optional[Dict[str, Any]]:
        resp = self._send({"cmd": "get_pattern_by_name", "name": name})
        if resp.get("status") == "found":
            return resp.get("pattern")
        return None

    def stop(self) -> None:
        if self.proc and self.proc.poll() is None:
            try:
                self._send({"cmd": "stop"})
            except Exception:
                pass
            self.proc.terminate()
        self.proc = None


class InabelAPI:
    """REST API wrapper for the Prolog interface.

    Optionally accepts a path to the Prolog knowledge base file so that
    callers (like the Flask server) can control where `inabel.ai.pl` is
    loaded from. If not provided, we fall back to the default relative
    path used by `InabelPrologInterface`.
    """

    # Minimum number of questions to ask before concluding identification
    # when using shared features. Unique features can bypass this.
    MIN_CONFIDENCE_QUESTIONS = 3

    def __init__(self, prolog_file_path: str = '../inabel.ai.pl') -> None:
        # Instantiate the underlying Prolog process with the given KB path.
        self.prolog_interface = PrologProcess(prolog_file_path)
        # Simple in-memory session store: session_id -> {responses, candidates}
        self.sessions: Dict[str, Dict[str, Any]] = {}
        
        # Dynamically compute unique features from the Prolog knowledge base.
        # A unique feature is one that appears in exactly ONE pattern.
        # This decouples Python from hardcoded pattern data.
        self.unique_features = self._compute_unique_features()
    
    def _compute_unique_features(self) -> Dict[str, str]:
        """
        Analyze the Prolog KB to find features that uniquely identify a pattern.
        
        Returns:
            Dict mapping feature -> pattern_name for features that appear in only one pattern
        """
        # Get all patterns with their features
        patterns = self.get_all_patterns()
        
        # Count how many patterns have each feature
        feature_count: Dict[str, List[str]] = {}  # feature -> list of pattern names
        
        for pattern in patterns:
            pattern_name = pattern.get('name', '')
            features = pattern.get('features', [])
            
            for feature in features:
                if feature not in feature_count:
                    feature_count[feature] = []
                feature_count[feature].append(pattern_name)
        
        # Find features that appear in exactly one pattern
        unique_features = {}
        for feature, pattern_names in feature_count.items():
            if len(pattern_names) == 1:
                unique_features[feature] = pattern_names[0]
        
        return unique_features


    def start_session(self, session_id: str) -> Dict[str, Any]:
        """Start a new identification session."""
        self.sessions[session_id] = {
            "responses": [],
            "candidates": self.prolog_interface.get_all_pattern_names(),
        }

        # Instead of asking Prolog for the very first feature (which may return
        # None depending on KB logic), just pick a stable starting feature
        # from the complete feature list and ask Prolog only for the question
        # text.
        feature_questions = self.prolog_interface.get_all_feature_questions()

        if feature_questions:
            # Choose the first key in sorted order so it's deterministic.
            # You can change this list/ordering to whatever “good first question”
            # you prefer (e.g., "geometric").
            all_features_sorted = sorted(feature_questions.keys())
            next_feature = all_features_sorted[0]
            question = feature_questions.get(next_feature)
        else:
            next_feature = None
            question = None

        return {
            "session_id": session_id,
            "question": question,
            "feature": next_feature,
            "total_patterns": len(self.sessions[session_id]["candidates"]),
        }

    
    def answer_question(self, session_id: str, feature: str, answer: str) -> Dict[str, Any]:
        """
        Process an answer and return next question or result.
        
        Smart identification logic:
        - If user says "yes" to a UNIQUE feature → immediately identify pattern
        - If user says "yes" to SHARED features → require MIN_CONFIDENCE_QUESTIONS
        - NO answers are always used to eliminate patterns
        
        Args:
            session_id: Session identifier
            feature: Feature that was answered
            answer: 'yes' or 'no'
            
        Returns:
            Dictionary with next question or final result
        """
        if session_id not in self.sessions:
            return {'error': 'Invalid session ID'}
        
        session = self.sessions[session_id]
        session['responses'].append((feature, answer))
        
        questions_asked = len(session['responses'])
        
        # Check if user said "yes" to a unique feature - immediate identification!
        if answer == 'yes' and feature in self.unique_features:
            pattern_name = self.unique_features[feature]
            pattern = self.prolog_interface.get_pattern_by_name(pattern_name)
            del self.sessions[session_id]  # Clean up session
            return {
                'status': 'complete',
                'pattern': pattern,
                'questions_asked': questions_asked,
                'identification_method': 'unique_feature',
                'unique_feature': feature
            }
        
        # Filter candidates using Prolog (uses both YES and NO answers)
        session['candidates'] = self.prolog_interface.filter_patterns(session['responses'])
        
        # Check if no patterns match
        if len(session['candidates']) == 0:
            del self.sessions[session_id]  # Clean up session
            return {
                'status': 'not_found',
                'message': 'Could not identify the pattern based on your responses.',
                'questions_asked': questions_asked
            }
        
        # For shared features: require minimum questions before concluding
        if len(session['candidates']) == 1 and questions_asked >= self.MIN_CONFIDENCE_QUESTIONS:
            pattern = self.prolog_interface.get_pattern_by_name(session['candidates'][0])
            del self.sessions[session_id]  # Clean up session
            return {
                'status': 'complete',
                'pattern': pattern,
                'questions_asked': questions_asked,
                'identification_method': 'elimination'
            }
        
        # Need more questions - get the next relevant one
        next_feature = self.prolog_interface.get_next_question(
            session['responses'],
            session['candidates']
        )
        
        # Fallback: if Prolog doesn't return a feature, pick from remaining features
        if not next_feature:
            all_features = self.prolog_interface.get_all_features()
            answered_features = {f for (f, _) in session["responses"]}
            
            for f in all_features:
                if f not in answered_features:
                    next_feature = f
                    break

        if next_feature:
            question = self.prolog_interface.get_feature_question(next_feature)
            return {
                "status": "continue",
                "question": question,
                "feature": next_feature,
                "remaining_candidates": len(session["candidates"]),
                "questions_asked": questions_asked
            }
        else:
            # No more questions, but multiple candidates remain: pick best match.
            pattern = self.prolog_interface.get_pattern_by_name(session["candidates"][0])
            del self.sessions[session_id]
            return {
                "status": "complete",
                "pattern": pattern,
                "questions_asked": questions_asked,
                "identification_method": "best_match",
                "note": "Multiple patterns matched, returning best match",
            }
    
    def get_all_patterns(self) -> List[Dict[str, Any]]:
        """Get information about all patterns."""
        pattern_names = self.prolog_interface.get_all_pattern_names()
        patterns = []
        for name in pattern_names:
            pattern = self.prolog_interface.get_pattern_by_name(name)
            if pattern:
                patterns.append(pattern)
        return patterns
    
    def get_all_features_with_questions(self) -> Dict[str, str]:
        """Get all features with their question texts."""
        return self.prolog_interface.get_all_feature_questions()


# Example usage
# if __name__ == '__main__':
#     # Test the interface
#     api = InabelAPI()
    
#     print("Testing Prolog Interface...")
#     print("\n1. Getting all pattern names:")
#     patterns = api.prolog_interface.get_all_pattern_names()
#     print(f"Found {len(patterns)} patterns")
    
#     print("\n2. Getting all features:")
#     features = api.prolog_interface.get_all_features()
#     print(f"Found {len(features)} features")
    
#     print("\n3. Testing a simple query (geometric + repeating + optical_illusion):")
#     responses = [
#         ('geometric', 'yes'),
#         ('repeating', 'yes'),
#         ('optical_illusion', 'yes'),
#         ('dizzying', 'yes')
#     ]
#     result = api.prolog_interface.identify_pattern(responses)
#     if result:
#         print(f"Identified: {result.get('name')}")
#     else:
#         print("Pattern not found")
    
#     print("\n4. Testing session-based API:")
#     session_data = api.start_session('test_session_1')
#     print(f"First question: {session_data.get('question')}")
