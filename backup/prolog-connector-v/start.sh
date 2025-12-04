#!/bin/bash
# Quick Start Script for Inabel Pattern Identification System

echo "=================================="
echo "Inabel AI Pattern Recognition"
echo "Quick Start Setup"
echo "=================================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi
echo "✓ Python 3 found"

# Check if SWI-Prolog is installed
if ! command -v swipl &> /dev/null; then
    echo "❌ SWI-Prolog is not installed."
    echo ""
    echo "Please install SWI-Prolog:"
    echo "  Ubuntu/Debian: sudo apt-get install swi-prolog"
    echo "  macOS: brew install swi-prolog"
    echo "  Windows: Download from https://www.swi-prolog.org/download/stable"
    exit 1
fi
echo "✓ SWI-Prolog found"

# Navigate to backend directory
cd backend || exit

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo ""
    echo "Creating Python virtual environment..."
    python3 -m venv venv
    echo "✓ Virtual environment created"
fi

# Activate virtual environment
echo ""
echo "Activating virtual environment..."
source venv/bin/activate

# Install dependencies
echo ""
echo "Installing Python dependencies..."
pip install -q -r requirements.txt || { echo "❌ Failed to install dependencies"; exit 1; }
echo "✓ Dependencies installed"

# Test Prolog file
echo ""
echo "Testing Prolog knowledge base..."
cd ..
if swipl -g "consult('inabel.ai.pl'), halt." 2>/dev/null; then
    echo "✓ Prolog knowledge base loaded successfully"
else
    echo "❌ Error loading Prolog knowledge base"
    exit 1
fi

cd backend

# Start the server
echo ""
echo "=================================="
echo "Starting Flask server..."
echo "=================================="
echo ""
echo "Server will be available at: http://localhost:5000"
echo "Open index-api.html in your browser to use the system"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python server.py
