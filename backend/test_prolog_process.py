"""Test the PrologProcess class directly."""
import sys
import os

# Add parent directory to path for imports
sys.path.insert(0, os.path.dirname(__file__))

from prolog_interface import PrologProcess

def test_prolog_process():
    prolog_file = os.path.join(os.path.dirname(__file__), '..', 'inabel.ai.pl')
    print(f"Loading Prolog KB from: {prolog_file}")
    
    try:
        proc = PrologProcess(prolog_file)
        print("✓ PrologProcess started successfully\n")
        
        # Test 1: Get all pattern names
        print("Test 1: get_all_pattern_names()")
        names = proc.get_all_pattern_names()
        print(f"  Found {len(names)} patterns: {names[:3]}...")
        assert len(names) > 0, "Should have at least one pattern"
        print("  ✓ PASSED\n")
        
        # Test 2: Get all features
        print("Test 2: get_all_features()")
        features = proc.get_all_features()
        print(f"  Found {len(features)} features: {features[:3]}...")
        assert len(features) > 0, "Should have at least one feature"
        print("  ✓ PASSED\n")
        
        # Test 3: Get feature question
        print("Test 3: get_feature_question('geometric')")
        question = proc.get_feature_question('geometric')
        print(f"  Question: {question}")
        assert question is not None, "Should return a question"
        assert 'geometric' in question.lower(), "Question should mention geometric"
        print("  ✓ PASSED\n")
        
        # Test 4: Get all feature questions
        print("Test 4: get_all_feature_questions()")
        fq = proc.get_all_feature_questions()
        print(f"  Found {len(fq)} feature questions")
        assert len(fq) > 0, "Should have feature questions"
        print("  ✓ PASSED\n")
        
        # Test 5: Filter patterns
        print("Test 5: filter_patterns([('geometric', 'yes')])")
        candidates = proc.filter_patterns([('geometric', 'yes')])
        print(f"  Candidates: {candidates}")
        assert 'binakul' in candidates, "binakul should match geometric"
        print("  ✓ PASSED\n")
        
        # Test 6: Identify pattern
        print("Test 6: identify_pattern() for binakul")
        responses = [
            ('geometric', 'yes'),
            ('dizzying', 'yes'),
            ('repeating', 'yes'),
            ('optical_illusion', 'yes')
        ]
        pattern = proc.identify_pattern(responses)
        print(f"  Identified: {pattern.get('name') if pattern else 'None'}")
        assert pattern is not None, "Should identify a pattern"
        assert pattern.get('name') == 'binakul', "Should identify binakul"
        print("  ✓ PASSED\n")
        
        # Test 7: Get pattern by name
        print("Test 7: get_pattern_by_name('kusikos')")
        pattern = proc.get_pattern_by_name('kusikos')
        print(f"  Pattern name: {pattern.get('name') if pattern else 'None'}")
        print(f"  Features: {pattern.get('features') if pattern else 'None'}")
        assert pattern is not None, "Should find kusikos"
        print("  ✓ PASSED\n")
        
        # Clean up
        proc.stop()
        print("=" * 50)
        print("All PrologProcess tests PASSED!")
        print("=" * 50)
        
    except Exception as e:
        print(f"✗ ERROR: {e}")
        import traceback
        traceback.print_exc()
        return False
    
    return True

if __name__ == '__main__':
    success = test_prolog_process()
    sys.exit(0 if success else 1)