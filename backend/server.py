"""Flask Backend Server for Inabel Pattern Identification.

This server interfaces with the Prolog knowledge base and provides REST API
endpoints. We configure the SWI-Prolog runtime *before* importing the
Prolog interface to avoid low-level FLI assertion failures when using
`pyswip` with newer SWI versions.
"""

import os

# Configure SWI-Prolog execution style before pyswip is imported. The
# "traditional" style is generally more compatible with ctypes-based
# integrations like pyswip and helps avoid PL_put_chars assertion
# failures on recent SWI releases.
os.environ.setdefault("SWI_EXEC_STYLE", "traditional")

from flask import Flask, request, jsonify
from flask_cors import CORS
import uuid
from prolog_interface import InabelAPI

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Initialize Prolog interface
prolog_file_path = os.path.join(os.path.dirname(__file__), '..', 'inabel.ai.pl')
inabel_api = InabelAPI(prolog_file_path)


@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({
        'status': 'healthy',
        'service': 'Inabel Pattern Identification API',
        'prolog_loaded': True
    })


@app.route('/api/start', methods=['POST'])
def start_identification():
    """Start a new identification session."""
    try:
        session_id = str(uuid.uuid4())
        session_data = inabel_api.start_session(session_id)
        
        return jsonify({
            'success': True,
            'data': session_data
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/answer', methods=['POST'])
def submit_answer():
    """Submit an answer to a question."""
    try:
        data = request.json
        session_id = data.get('session_id')
        feature = data.get('feature')
        answer = data.get('answer')  # 'yes' or 'no'
        
        if not session_id or not feature or not answer:
            return jsonify({
                'success': False,
                'error': 'Missing required fields'
            }), 400
        
        result = inabel_api.answer_question(session_id, feature, answer)
        print("DEBUG /api/answer result:", result, flush=True)
        
        return jsonify({
            'success': True,
            'data': result
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/patterns', methods=['GET'])
def get_all_patterns():
    """Get all patterns in the database."""
    try:
        patterns = inabel_api.get_all_patterns()
        
        return jsonify({
            'success': True,
            'data': {
                'patterns': patterns,
                'count': len(patterns)
            }
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/pattern/<pattern_name>', methods=['GET'])
def get_pattern(pattern_name):
    """Get details of a specific pattern."""
    try:
        pattern = inabel_api.prolog_interface.get_pattern_by_name(pattern_name)
        
        if pattern:
            return jsonify({
                'success': True,
                'data': pattern
            })
        else:
            return jsonify({
                'success': False,
                'error': 'Pattern not found'
            }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/features', methods=['GET'])
def get_all_features():
    """Get all features with their questions."""
    try:
        features = inabel_api.get_all_features_with_questions()
        
        return jsonify({
            'success': True,
            'data': {
                'features': features,
                'count': len(features)
            }
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/identify', methods=['POST'])
def identify_pattern():
    """
    Identify a pattern based on a complete set of responses.
    This is a one-shot identification (not session-based).
    """
    try:
        data = request.json
        responses = data.get('responses', [])  # List of {feature, answer} objects
        
        # Convert to tuple format
        response_tuples = [(r['feature'], r['answer']) for r in responses]
        
        pattern = inabel_api.prolog_interface.identify_pattern(response_tuples)
        
        if pattern:
            return jsonify({
                'success': True,
                'data': {
                    'status': 'found',
                    'pattern': pattern
                }
            })
        else:
            return jsonify({
                'success': True,
                'data': {
                    'status': 'not_found',
                    'message': 'Could not identify the pattern based on provided responses.'
                }
            })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors."""
    return jsonify({
        'success': False,
        'error': 'Endpoint not found'
    }), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors."""
    return jsonify({
        'success': False,
        'error': 'Internal server error'
    }), 500


if __name__ == '__main__':
    print("=" * 60)
    print("Inabel Pattern Identification API Server")
    print("=" * 60)
    print(f"Prolog KB loaded from: {prolog_file_path}")
    print("\nAvailable endpoints:")
    print("  GET  /api/health           - Health check")
    print("  POST /api/start            - Start identification session")
    print("  POST /api/answer           - Submit answer")
    print("  POST /api/identify         - One-shot identification")
    print("  GET  /api/patterns         - Get all patterns")
    print("  GET  /api/pattern/<name>   - Get specific pattern")
    print("  GET  /api/features         - Get all features")
    print("=" * 60)
    print("\nStarting server on http://localhost:5000")
    print("=" * 60)
    
    # Disable Flask auto-reloader to avoid initializing the Prolog
    # engine multiple times, which can cause crashes with pyswip.
    app.run(debug=False, host='0.0.0.0', port=5000)
