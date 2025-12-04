# Inabel Pattern Identification System

An AI-powered system for identifying traditional Ilocano textile patterns using Prolog reasoning engine with a modern web interface.

![Architecture](https://img.shields.io/badge/Architecture-Hybrid-blue)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2FJS-yellow)
![Backend](https://img.shields.io/badge/Backend-Python%2FFlask-green)
![Logic](https://img.shields.io/badge/Logic-Prolog-red)

## 🌟 Overview

This system helps identify 23 different traditional Inabel weaving patterns from the Ilocos region of the Philippines. It uses a hybrid architecture where:

- **Prolog** handles the reasoning logic and pattern matching
- **Python/Flask** provides a REST API interface
- **HTML/JavaScript** delivers an interactive user experience

## 🏗️ Architecture

```
Frontend (Browser) ←→ Flask API ←→ Prolog Engine
```

The logic resides entirely in Prolog (`inabel.ai.pl`), making it:
- ✅ Easy to maintain and update
- ✅ Verifiable and correct
- ✅ Editable by domain experts
- ✅ Independent of frontend implementation

## 📁 Project Structure

```
inabel_ai/
├── index.html              # Standalone version (no backend)
├── index-api.html          # API version (with backend)
├── app.js                  # Standalone JavaScript
├── app-api.js              # API client JavaScript
├── styles.css              # Shared styles
├── inabel.ai.pl            # Prolog knowledge base (MAIN LOGIC)
├── start.sh                # Quick start script
├── ARCHITECTURE.md         # Detailed architecture docs
├── IMPLEMENTATION_NOTES.md # Implementation notes
├── backend/
│   ├── server.py           # Flask REST API
│   ├── prolog_interface.py # Python-Prolog bridge
│   ├── requirements.txt    # Python dependencies
│   └── README.md           # Backend documentation
└── images/                 # Pattern images
    └── (various pattern images)
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

#### Option 1: Quick Start Script (Linux/macOS)

```bash
./start.sh
```

This will:
1. Check prerequisites
2. Create virtual environment
3. Install dependencies
4. Test Prolog knowledge base
5. Start the Flask server

#### Option 2: Manual Setup

```bash
# 1. Navigate to backend
cd backend

# 2. Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Start server
python server.py
```

The server will start at `http://localhost:5000`

### Using the System

1. **Open the frontend**: Open `index-api.html` in your web browser
2. **Click "Start Identification"**: Begin the pattern identification process
3. **Answer questions**: Respond to questions about the pattern's visual features
4. **Get results**: The system will identify the pattern or suggest alternatives

## 🎯 Features

### Pattern Database
- 23 traditional Inabel patterns
- Comprehensive feature descriptions
- Cultural significance information
- Reference images and sources

### Identification System
- Interactive question-based identification
- Intelligent question ordering
- Handles ambiguous cases
- Provides detailed pattern information

### Technical Features
- Pure Prolog logic engine
- RESTful API interface
- Session-based identification
- Real-time reasoning
- Responsive web interface

## 📖 Usage Examples

### Using the Web Interface

1. **Start Identification**: Click the start button
2. **Answer Questions**: Respond to visual feature questions
3. **View Results**: See identified pattern with details

### Direct Prolog Usage

```bash
swipl -s inabel.ai.pl
```

```prolog
?- start.
% Interactive CLI mode

?- identify_pattern_api([[geometric, yes], [repeating, yes]], Result).
% Direct query

?- get_all_pattern_names(Names).
% Get all patterns
```

### API Usage

```bash
# Start session
curl -X POST http://localhost:5000/api/start

# Submit answer
curl -X POST http://localhost:5000/api/answer \
  -H "Content-Type: application/json" \
  -d '{"session_id": "...", "feature": "geometric", "answer": "yes"}'

# Get all patterns
curl http://localhost:5000/api/patterns
```

## 🔧 Development

### Modifying Patterns

Edit `inabel.ai.pl`:

```prolog
pattern(pattern_name, 
    [feature1, feature2, ...],
    'Cultural meaning',
    'bootstrap-icon',
    'css-class',
    ['image1.jpg', 'image2.jpg'],
    [ref('Title', 'URL'), ...]).
```

### Adding Features

1. Add feature to a pattern's feature list
2. Add feature question:
```prolog
feature_question(new_feature, 'Your question here?').
```

### Testing

```bash
# Test Prolog
swipl -s inabel.ai.pl
?- start.

# Test Python interface
cd backend
python prolog_interface.py

# Test API
python server.py
# Then use curl or Postman
```

## 📚 Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Detailed architecture documentation
- **[backend/README.md](backend/README.md)** - Backend API documentation
- **[IMPLEMENTATION_NOTES.md](IMPLEMENTATION_NOTES.md)** - Original implementation notes

## 🎨 Patterns Included

The system can identify these traditional Inabel patterns:

- Binakul (geometric optical illusion)
- Sinan Sabong (floral motifs)
- Kusikos (spiral patterns)
- Inuritan (linear stripes)
- Mata-mata (diamond rice grains)
- Sinan Tao (human figures)
- Sinan Kabalyo (horse motifs)
- Binetwagan (3D textured weave)
- Sinukitan (brocade effect)
- Kundiman (white floral blanket)
- Dinapat (full coverage patterns)
- Banderado (striped bands)
- Kinkinelleng (farmland grid)
- Gikgik (two-headed bird)
- Pabo (peacock design)
- Sinan Bulong (palm leaf)
- Kinarkarayan ken Sinan Ugsa (river and deer)
- Kinarkarayan ken Sinan Tokak (river and frog)
- Kinarkarayan ken Dyamante Ti Reyna (river and diamonds)
- Sinan Paddak Ti Pusa (cat's paw)
- Kinurkuros (plaid/checkered)
- Rinitrit Concha-Concha (capiz window)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes as part of an AI course project.

## 🙏 Acknowledgments

- Traditional Ilocano weavers for preserving these patterns
- Cultural heritage organizations for documentation
- SWI-Prolog community
- Flask and PySwip developers

## 📞 Support

For issues or questions:
1. Check the documentation in `ARCHITECTURE.md`
2. Review the backend README
3. Test components individually
4. Check the troubleshooting section in backend/README.md

## 🔄 Version History

- **v2.0** - API-based architecture with Prolog backend
- **v1.0** - Standalone JavaScript version

---

**Note**: This project demonstrates proper integration of a Prolog reasoning engine with modern web technologies. The logic is kept pure in Prolog while the interface remains user-friendly and accessible.
