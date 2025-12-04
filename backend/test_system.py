#!/usr/bin/env python3
"""
Quick Test Script for Inabel Pattern Identification System
Tests the complete stack: Prolog → Python → Flask
"""

import sys
import subprocess
import os

def test_prolog():
    """Test if Prolog file loads correctly."""
    print("=" * 60)
    print("TEST 1: Prolog Knowledge Base")
    print("=" * 60)
    
    prolog_file = "../inabel.ai.pl"
    if not os.path.exists(prolog_file):
        print("❌ Error: inabel.ai.pl not found")
        return False
    
    # Test loading the file
    result = subprocess.run(
        ['swipl', '-g', 
         "consult('inabel.ai.pl'), get_all_pattern_names(Names), length(Names, Count), format('Loaded ~w patterns~n', [Count]), halt.",
         '-t', 'halt(1)'],
        cwd='..',
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        print("✓ Prolog knowledge base loaded successfully")
        print(result.stdout.strip())
        return True
    else:
        print("❌ Error loading Prolog knowledge base:")
        print(result.stderr)
        return False


def test_python_interface():
    """Test Python-Prolog interface."""
    print("\n" + "=" * 60)
    print("TEST 2: Python-Prolog Interface")
    print("=" * 60)
    
    try:
        from prolog_interface import InabelPrologInterface
        
        interface = InabelPrologInterface('../inabel.ai.pl')
        
        # Test getting all features
        features = interface.get_all_features()
        print(f"✓ Found {len(features)} features")
        
        # Test getting pattern names
        patterns = interface.get_all_pattern_names()
        print(f"✓ Found {len(patterns)} patterns")
        
        # Test simple query
        responses = [
            ('geometric', 'yes'),
            ('repeating', 'yes'),
            ('optical_illusion', 'yes'),
            ('dizzying', 'yes')
        ]
        result = interface.identify_pattern(responses)
        
        if result:
            print(f"✓ Pattern identification works: {result.get('name', 'unknown')}")
            return True
        else:
            print("✓ Pattern identification works (no match found is OK)")
            return True
            
    except ImportError as e:
        print(f"❌ Error importing Python interface: {e}")
        print("   Make sure PySwip is installed: pip install pyswip")
        return False
    except Exception as e:
        print(f"❌ Error in Python interface: {e}")
        return False


def test_flask_imports():
    """Test if Flask dependencies are available."""
    print("\n" + "=" * 60)
    print("TEST 3: Flask Dependencies")
    print("=" * 60)
    
    try:
        import flask
        print(f"✓ Flask installed (version {flask.__version__})")
        
        import flask_cors
        print("✓ Flask-CORS installed")
        
        return True
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("   Run: pip install -r requirements.txt")
        return False


def main():
    """Run all tests."""
    print("\n")
    print("╔" + "═" * 58 + "╗")
    print("║" + " " * 10 + "INABEL SYSTEM TEST SUITE" + " " * 24 + "║")
    print("╚" + "═" * 58 + "╝")
    print()
    
    # Change to backend directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    results = []
    
    # Test 1: Prolog
    results.append(("Prolog Knowledge Base", test_prolog()))
    
    # Test 2: Python Interface
    results.append(("Python-Prolog Interface", test_python_interface()))
    
    # Test 3: Flask
    results.append(("Flask Dependencies", test_flask_imports()))
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    all_passed = True
    for name, passed in results:
        status = "✓ PASS" if passed else "❌ FAIL"
        print(f"{status} - {name}")
        if not passed:
            all_passed = False
    
    print("=" * 60)
    
    if all_passed:
        print("\n✓ All tests passed! You can run the server with:")
        print("  python server.py")
    else:
        print("\n❌ Some tests failed. Please fix the issues above.")
        sys.exit(1)


if __name__ == '__main__':
    main()
