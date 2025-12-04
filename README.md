# Inabel Pattern Identification System

An AI-powered system for identifying traditional Ilocano textile patterns using a Prolog reasoning engine with a modern web interface.

![Architecture](https://img.shields.io/badge/Architecture-Hybrid-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FJS-yellow)
![Backend](https://img.shields.io/badge/Backend-Python%2FFlask-green)
![Logic](https://img.shields.io/badge/Logic-Prolog-red)

## 🌟 Overview

This system helps identify **22 different traditional Inabel weaving patterns** from the Ilocos region of the Philippines. It uses a hybrid architecture where:

- **Prolog** handles the reasoning logic, pattern matching, and knowledge base
- **Python/Flask** provides a REST API interface via subprocess communication
- **HTML/JavaScript** delivers an interactive user experience

## 🏗️ Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Frontend      │     │   Flask API     │     │  SWI-Prolog     │
│  (HTML/JS)      │ ←→  │   (Python)      │ ←→  │  Subprocess     │
│  index-api.html │     │   server.py     │     │  inabel.ai.pl   │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Key Design Decisions

- **Subprocess-based Prolog Integration**: Uses a long-lived SWI-Prolog subprocess with JSON protocol over stdin/stdout (not pyswip embedding)
- **Pure Prolog Logic**: All identification logic resides in `inabel.ai.pl`
- **Session-based Identification**: Supports interactive Q&A sessions with state management
- **Smart Identification**: Uses unique feature detection for immediate pattern matching and elimination-based reasoning for shared features

## 📁 Project Structure

```
inabel_ai/
├── index-api.html          # Web frontend (API version)
├── app-api.js              # Frontend JavaScript (API client)
├── styles.css              # CSS styles
├── inabel.ai.pl            # Prolog knowledge base (MAIN LOGIC)
├── README.md               # This file
│
├── backend/
│   ├── server.py           # Flask REST API server
│   ├── prolog_interface.py # Python-Prolog subprocess bridge
│   ├── test_inabel_api.py  # API integration tests
│   ├── test_prolog_interface.py  # Interface unit tests
│   ├── test_prolog_process.py    # Process communication tests
│   ├── test_system.py      # System-level tests
│   └── venv/               # Python virtual environment
│
├── images/                 # Pattern reference images (32 files)
│   ├── binakul-*.jpg/png
│   ├── sinan-sabong-*.jpg
│   ├── kusikos-*.jpg/webp
│   └── ... (other pattern images)
```

## 🚀 Quick Start

### Prerequisites

1. **Python 3.8+**
2. **SWI-Prolog**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install swi-prolog
   
   # macOS
   brew install swi-prolog
   
   # Windows
   # Download from https://www.swi-prolog.org/download/stable
   ```

### Installation & Running

```bash
# 1. Navigate to backend
cd backend

# 2. Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install flask flask-cors

# 4. Start server
python server.py
```

The server will start at `http://localhost:5000`

### Using the System

1. **Open the frontend**: Open `index-api.html` in your web browser
2. **Click "Start Identification"**: Begin the pattern identification process
3. **Answer questions**: Respond to questions about the pattern's visual features
4. **Get results**: The system will identify the pattern with cultural significance and reference images

## 🎯 Features

### Pattern Knowledge Base
- **22 traditional Inabel patterns** with comprehensive metadata
- **45+ visual features** for pattern discrimination
- Cultural significance descriptions
- Reference images for each pattern
- Academic and cultural source references

### Identification Engine
- **Unique Feature Detection**: Immediate identification when a unique feature is confirmed
- **Elimination-based Reasoning**: Progressive filtering using YES/NO responses
- **Minimum Confidence Threshold**: Requires at least 3 questions before concluding (for shared features)
- **Best Match Fallback**: Returns most likely pattern when questions are exhausted

### Technical Features
- **JSON Protocol**: Clean communication between Python and Prolog via stdin/stdout
- **Session Management**: UUID-based session tracking for concurrent users
- **RESTful API**: Standard HTTP endpoints for all operations
- **CORS Enabled**: Frontend can run from any origin

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/start` | Start new identification session |
| `POST` | `/api/answer` | Submit answer to current question |
| `POST` | `/api/identify` | One-shot identification (no session) |
| `GET` | `/api/patterns` | Get all patterns |
| `GET` | `/api/pattern/<name>` | Get specific pattern details |
| `GET` | `/api/features` | Get all features with questions |

### Example API Usage

```bash
# Start session
curl -X POST http://localhost:5000/api/start

# Submit answer
curl -X POST http://localhost:5000/api/answer \
  -H "Content-Type: application/json" \
  -d '{"session_id": "uuid-here", "feature": "geometric", "answer": "yes"}'

# Get all patterns
curl http://localhost:5000/api/patterns
```

## 🧠 Prolog Knowledge Base

### Pattern Definition Structure

```prolog
pattern(pattern_name, 
    [feature1, feature2, ...],      % Visual features
    'Cultural meaning',              % Significance description
    'bi-icon-name',                  % Bootstrap icon
    'css-placeholder-class',         % CSS class for placeholder
    ['images/img1.jpg', ...],        % Reference images
    [ref('Title', 'URL'), ...]).     % Academic references
```

### Feature Question Definition

```prolog
feature_question(feature_name, 'Question text shown to user?').
```

### Direct Prolog Usage

```bash
swipl -s inabel.ai.pl
```

```prolog
?- start.                    % Interactive CLI mode

?- identify_pattern_api([[geometric, yes], [repeating, yes]], Result).
                             % Direct query

?- get_all_pattern_names(Names).
                             % Get all patterns

?- get_all_features(Features).
                             % Get all features
```

## 🎨 Patterns Included

| Pattern | Key Features | Cultural Meaning |
|---------|--------------|------------------|
| **Binakul** | geometric, dizzying, optical_illusion | Wards off evil spirits |
| **Sinan Sabong** | floral, stylized_figure | Represents flowers |
| **Kusikos** | spiral, geometric, repeating | Whirlpools or strong winds |
| **Inuritan** | geometric, linear, striped_pattern | Simple geometric lines |
| **Mata-mata** | geometric, small_repeating, diamond_shape | Rice grains, abundance |
| **Sinan Tao** | anthropomorphic, stylized_figure | Human figures, ancestors |
| **Sinan Kabalyo** | figurative_animal, stylized_figure | Horse, travel and power |
| **Binetwagan** | textured_surface, three_dimensional | Multi-heddle 3D patterns |
| **Sinukitan** | brocade_effect, floating_motifs | Highest weaving mastery |
| **Kundiman** | white_base, flower_petals, multi_heddle | Sacred ceremonial textile |
| **Dinapat** | full_coverage, stars_diamonds | "Full" seamless design |
| **Banderado** | striped_pattern, minimal_colors | Banded simplicity |
| **Kinkinelleng** | grid_pattern, landscape_inspired | Parcels of farmlands |
| **Gikgik** | two_headed_bird, symmetrical | Folklore two-headed bird |
| **Pabo** | peacock_motif, ornate_tail | Peacock beauty |
| **Sinan Bulong** | palm_leaf, fern_like | Palm/fern vegetation |
| **Kinarkarayan ken Sinan Ugsa** | zigzag_river, figurative_animal | River and deer |
| **Kinarkarayan ken Sinan Tokak** | zigzag_river, full_coverage | River and frog |
| **Kinarkarayan ken Dyamante Ti Reyna** | diamond_shape, zigzag_river | River and queen's diamonds |
| **Sinan Paddak Ti Pusa** | geometric, symmetrical | Cat's paw print |
| **Kinurkuros** | geometric, plain_weave | Plaid/checkered |
| **Rinitrit Concha-Concha** | geometric, grid_pattern | Capiz window design |

## 🧪 Testing

```bash
cd backend

# Run all tests
python -m pytest

# Test specific components
python test_prolog_process.py      # Prolog subprocess communication
python test_prolog_interface.py    # Python interface layer
python test_inabel_api.py          # REST API endpoints
python test_system.py              # End-to-end system tests
```

## 🔧 Development

### Adding a New Pattern

1. Add pattern fact in `inabel.ai.pl`:
```prolog
pattern(new_pattern_name, 
    [feature1, feature2],
    'Cultural meaning',
    'bi-icon',
    'css-class',
    ['images/new-pattern-1.jpg'],
    [ref('Source', 'url')]).
```

2. Add any new feature questions:
```prolog
feature_question(new_feature, 'Does the pattern have this feature?').
```

3. Add reference images to `images/` folder

4. Restart the Flask server to reload the Prolog KB

### Modifying Identification Logic

The core identification logic is in `inabel.ai.pl`:
- `identify_pattern_api/2` - Main identification predicate
- `filter_patterns_by_responses/3` - Pattern filtering
- `get_next_question/3` - Question selection
- `main_json_loop/0` - JSON protocol handler

## 📄 License

This project is for educational purposes as part of an AI course project.

## 🙏 Acknowledgments

- Traditional Ilocano weavers for preserving these patterns
- Cultural heritage organizations for documentation
- SWI-Prolog community
- Flask developers

## 🔄 Version History

- **v2.0** - Subprocess-based Prolog integration with JSON protocol
- **v1.0** - Standalone JavaScript probabilistic version (see `backup/`)

---

**Note**: This project demonstrates proper integration of a Prolog reasoning engine with modern web technologies. The logic is kept pure in Prolog while the interface remains user-friendly and accessible through a REST API.
