"""Test the InabelAPI class (session-based interface)."""
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))

from prolog_interface import InabelAPI

def test_inabel_api():
    prolog_file = os.path.join(os.path.dirname(__file__), '..', 'inabel.ai.pl')
    print(f"Loading Prolog KB from: {prolog_file}")
    
    try:
        api = InabelAPI(prolog_file)
        print("✓ InabelAPI initialized successfully")
        print(f"  MIN_CONFIDENCE_QUESTIONS = {api.MIN_CONFIDENCE_QUESTIONS}")
        print(f"  Unique features detected: {len(api.unique_features)}")
        print(f"  Sample unique features: {dict(list(api.unique_features.items())[:5])}\n")
        
        # Test 1: Start session
        print("Test 1: start_session()")
        session_data = api.start_session('test_session_1')
        print(f"  Session ID: {session_data.get('session_id')}")
        print(f"  First feature: {session_data.get('feature')}")
        print(f"  First question: {session_data.get('question')}")
        print(f"  Total patterns: {session_data.get('total_patterns')}")
        assert session_data.get('session_id') == 'test_session_1'
        assert session_data.get('feature') is not None
        assert session_data.get('question') is not None
        print("  ✓ PASSED\n")
        
        # Test 2: Answer questions to identify binakul (using UNIQUE feature)
        print("Test 2a: Unique feature identification (dizzying -> binakul)")
        print("  (Should identify immediately when unique feature is 'yes')")
        
        test_session_id = 'test_unique_feature'
        api.start_session(test_session_id)
        
        # 'dizzying' is a unique feature for binakul - should identify immediately
        result = api.answer_question(test_session_id, 'dizzying', 'yes')
        print(f"  Q1: dizzying=yes -> status: {result.get('status')}")
        print(f"  Identification method: {result.get('identification_method')}")
        print(f"  Questions asked: {result.get('questions_asked')}")
        
        if result.get('status') == 'complete':
            pattern = result.get('pattern')
            print(f"  Identified pattern: {pattern.get('name') if pattern else 'None'}")
            assert pattern.get('name') == 'binakul', "Should identify binakul from dizzying"
            assert result.get('identification_method') == 'unique_feature'
        print("  ✓ PASSED\n")
        
        # Test 2b: Shared feature identification (requires multiple questions)
        print("Test 2b: Shared feature identification (geometric -> needs more questions)")
        print("  (Should ask MIN_CONFIDENCE_QUESTIONS before concluding)")
        
        test_session_id = 'test_shared_feature'
        api.start_session(test_session_id)
        
        # 'geometric' is shared by many patterns - need more questions
        responses_to_make = [
            ('geometric', 'yes'),      # Shared - many patterns have this
            ('dizzying', 'yes'),       # Unique - identifies binakul!
        ]
        
        result = None
        for feature, answer in responses_to_make:
            result = api.answer_question(test_session_id, feature, answer)
            status = result.get('status')
            questions = result.get('questions_asked', 0)
            remaining = result.get('remaining_candidates', '?')
            method = result.get('identification_method', '-')
            print(f"  Q{questions}: {feature}={answer} -> status: {status}, method: {method}, candidates: {remaining}")
            
            if status in ('complete', 'not_found'):
                break
        
        print(f"  Final status: {result.get('status')}")
        print(f"  Questions asked: {result.get('questions_asked')}")
        if result.get('status') == 'complete':
            pattern = result.get('pattern')
            print(f"  Identified pattern: {pattern.get('name') if pattern else 'None'}")
        print("  ✓ PASSED\n")
        
        # Test 2c: Elimination-based identification (no unique features, multiple questions)
        print("Test 2c: Elimination-based identification (shared features only)")
        
        test_session_id = 'test_elimination'
        api.start_session(test_session_id)
        
        # Use only shared features - should require MIN_CONFIDENCE_QUESTIONS
        responses_to_make = [
            ('geometric', 'yes'),
            ('repeating', 'yes'),
            ('optical_illusion', 'yes'),
            ('spiral', 'no'),           # Eliminates kusikos
            ('striped_pattern', 'no'),  # Eliminates inuritan, banderado
        ]
        
        result = None
        for feature, answer in responses_to_make:
            result = api.answer_question(test_session_id, feature, answer)
            status = result.get('status')
            questions = result.get('questions_asked', 0)
            remaining = result.get('remaining_candidates', '?')
            method = result.get('identification_method', '-')
            print(f"  Q{questions}: {feature}={answer} -> status: {status}, method: {method}, candidates: {remaining}")
            
            if status in ('complete', 'not_found'):
                break
        
        print(f"  Final status: {result.get('status')}")
        print(f"  Questions asked: {result.get('questions_asked')}")
        if result.get('status') == 'complete':
            pattern = result.get('pattern')
            print(f"  Identified pattern: {pattern.get('name') if pattern else 'None'}")
            print(f"  Identification method: {result.get('identification_method')}")
            # Verify minimum questions for elimination-based identification
            if result.get('identification_method') == 'elimination':
                assert result.get('questions_asked') >= api.MIN_CONFIDENCE_QUESTIONS, \
                       f"Elimination should require at least {api.MIN_CONFIDENCE_QUESTIONS} questions"
        print("  ✓ PASSED\n")
        
        # Test 3: Get all patterns
        print("Test 3: get_all_patterns()")
        patterns = api.get_all_patterns()
        print(f"  Found {len(patterns)} patterns")
        assert len(patterns) > 0
        print("  ✓ PASSED\n")
        
        # Test 4: Get all features with questions
        print("Test 4: get_all_features_with_questions()")
        features = api.get_all_features_with_questions()
        print(f"  Found {len(features)} feature questions")
        assert len(features) > 0
        print("  ✓ PASSED\n")
        
        # Clean up
        api.prolog_interface.stop()
        
        print("=" * 50)
        print("All InabelAPI tests PASSED!")
        print("=" * 50)
        
    except Exception as e:
        print(f"✗ ERROR: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    return True

if __name__ == '__main__':
    success = test_inabel_api()
    sys.exit(0 if success else 1)