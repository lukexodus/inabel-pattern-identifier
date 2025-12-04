/**
 * Inabel Pattern Identification - Frontend (API-based)
 * This version communicates with the Prolog backend via REST API
 */

// Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Application state
class InabelIdentifier {
    constructor() {
        this.sessionId = null;
        this.currentFeature = null;
        this.questionCount = 0;

        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.questionScreen = document.getElementById('question-screen');
        this.resultScreen = document.getElementById('result-screen');

        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.yesBtn = document.getElementById('yes-btn');
        this.noBtn = document.getElementById('no-btn');
        this.restartBtn = document.getElementById('restart-btn');

        // Content elements
        this.questionText = document.getElementById('question-text');
        this.progressFill = document.getElementById('progress-fill');
        this.progressText = document.getElementById('progress-text');
        this.resultBox = document.getElementById('result-box');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startIdentification());
        this.yesBtn.addEventListener('click', () => this.handleAnswer('yes'));
        this.noBtn.addEventListener('click', () => this.handleAnswer('no'));
        this.restartBtn.addEventListener('click', () => this.restart());
    }

    showScreen(screen) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.questionScreen.classList.remove('active');
        this.resultScreen.classList.remove('active');

        // Show target screen
        screen.classList.add('active');
    }

    async startIdentification() {
        try {
            this.showLoading(true);

            const response = await fetch(`${API_BASE_URL}/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (result.success) {
                this.sessionId = result.data.session_id;
                this.currentFeature = result.data.feature;
                this.questionCount = 1;

                // Fallback: if question is missing, show a generic message instead of blank
                const q = result.data.question || 'Please look closely at the pattern and answer the questions that follow.';
                this.questionText.textContent = q;
                this.updateProgress(0);

                this.showScreen(this.questionScreen);
            } else {
                this.showError('Failed to start identification: ' + result.error);
            }
        } catch (error) {
            this.showError('Error connecting to server: ' + error.message);
        } finally {
            this.showLoading(false);
        }
    }

    async handleAnswer(answer) {
        try {
            this.showLoading(true);

            const response = await fetch(`${API_BASE_URL}/answer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    session_id: this.sessionId,
                    feature: this.currentFeature,
                    answer: answer
                })
            });

            const result = await response.json();

            if (result.success) {
                const data = result.data;

                if (data.status === 'complete') {
                    if (!data.pattern) {
                        this.showError('Server reported a completed identification, but no pattern details were returned.');
                        this.showNotFound();
                    } else {
                        this.showResult(data.pattern);
                    }
                } else if (data.status === 'not_found') {
                    // Pattern not found
                    this.showNotFound();
                } else if (data.status === 'continue') {
                    this.currentFeature = data.feature;
                    this.questionCount += 1;

                    const q = data.question || 'Please look closely at the pattern and answer the questions that follow.';
                    this.questionText.textContent = q;
                    this.updateProgress(data.remaining_candidates);
                    this.showScreen(this.questionScreen);
                } else {
                    this.showError('Unexpected response from server');
                }
            } else {
                this.showError('Failed to process answer: ' + result.error);
            }
        } catch (error) {
            this.showError('Error connecting to server: ' + error.message);
        } finally {
            this.showLoading(false);
        }
    }

    updateProgress(remainingCandidates) {
        // Simulate progress based on questions asked
        const estimatedTotal = 15; // Average number of questions
        const percentage = Math.min((this.questionCount / estimatedTotal) * 100, 95);
        this.progressFill.style.width = `${percentage}%`;
        this.progressText.textContent = `Question ${this.questionCount}`;

        if (remainingCandidates > 0) {
            this.progressText.textContent += ` (${remainingCandidates} possibilities)`;
        }
    }

    showResult(pattern) {
        this.showScreen(this.resultScreen);

        // Defensive checks
        if (!pattern) {
            this.resultBox.className = 'result-box woven-card not-found';
            this.resultBox.innerHTML = `
            <div class="result-header not-found">
                <i class="bi bi-exclamation-triangle-fill"></i>
                <span class="result-title">Pattern Data Missing</span>
            </div>
            <div class="not-found-content">
                <p>Sorry, the server reported that a pattern was found, but no details were returned.</p>
                <p>Please try again, or contact the developer to check the Prolog backend.</p>
            </div>
        `;
            return;
        }

        const displayName = (pattern.name || 'Unknown Pattern')
            .replace(/_/g, ' ')
            .replace(/-/g, ' ');

        const images = Array.isArray(pattern.images) ? pattern.images : [];
        const features = Array.isArray(pattern.features) ? pattern.features : [];
        const references = Array.isArray(pattern.references) ? pattern.references : [];

        const galleryItems = images.map((imgSrc, index) => `
        <div class="gallery-item">
            <img 
                src="${imgSrc}" 
                alt="${displayName} sample ${index + 1}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="pattern-placeholder ${pattern.placeholderPattern || ''}" style="display: none;">
                <i class="bi ${pattern.icon || 'bi-patch-question'}"></i>
            </div>
            <span class="placeholder-label">Sample ${index + 1}</span>
        </div>
    `).join('');

        const referencesSection = references.length > 0 ? `
        <details class="references-section">
            <summary class="references-header">
                <i class="bi bi-book"></i>
                <span>References & Sources</span>
                <i class="bi bi-chevron-down toggle-icon"></i>
            </summary>
            <div class="references-content">
                <ul class="references-list">
                    ${references.map((ref, index) => `
                        <li class="reference-item">
                            <span class="reference-number">[${index + 1}]</span>
                            <a href="${ref.url}" target="_blank" rel="noopener noreferrer">
                                ${ref.text}
                                <i class="bi bi-box-arrow-up-right"></i>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </details>
    ` : '';

        this.resultBox.className = 'result-box woven-card success';
        this.resultBox.innerHTML = `
        <div class="result-header success">
            <i class="bi bi-check-circle-fill"></i>
            <span class="result-title">Pattern Identified!</span>
        </div>
        
        <div class="pattern-name">${displayName}</div>
        
        <div class="pattern-gallery">
            <div class="gallery-title">
                <i class="bi bi-images"></i>
                <span>Pattern Examples</span>
            </div>
            <div class="gallery-grid">
                ${galleryItems}
            </div>
        </div>
        
        <div class="features-section">
            <div class="features-label">
                <i class="bi bi-tag-fill"></i>
                <span>Pattern Features</span>
            </div>
            <div class="features-list">
                ${features.map(f => `
                    <span class="feature-tag">
                        <i class="bi bi-check2"></i>
                        ${String(f).replace(/_/g, ' ')}
                    </span>
                `).join('')}
            </div>
        </div>
        
        <div class="meaning-section">
            <div class="meaning-label">
                <i class="bi bi-bookmark-star-fill"></i>
                <span>Cultural Significance</span>
            </div>
            <p class="meaning-text">${pattern.meaning || 'No description available.'}</p>
        </div>
        
        ${referencesSection}

        <div class="api-info">
            <i class="bi bi-cpu"></i>
            <span>Identified using Prolog reasoning engine</span>
        </div>
    `;
    }

    async showNotFound() {
        this.showScreen(this.resultScreen);

        // Try to fetch all patterns for reference
        let patternsHTML = '';
        try {
            const response = await fetch(`${API_BASE_URL}/patterns`);
            const result = await response.json();

            if (result.success && result.data.patterns) {
                patternsHTML = `
                    <div class="pattern-gallery" style="margin-top: 25px;">
                        <div class="gallery-title">
                            <i class="bi bi-collection"></i>
                            <span>Known Patterns in Database</span>
                        </div>
                        <div class="gallery-grid">
                            ${result.data.patterns.slice(0, 6).map(p => `
                                <div class="gallery-item">
                                    <div class="pattern-placeholder">
                                        <i class="bi ${p.icon}"></i>
                                    </div>
                                    <span class="placeholder-label">${p.name.replace(/_/g, ' ').replace(/-/g, ' ')}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        } catch (error) {
            console.error('Error fetching patterns:', error);
        }

        this.resultBox.className = 'result-box woven-card not-found';
        this.resultBox.innerHTML = `
            <div class="result-header not-found">
                <i class="bi bi-question-circle-fill"></i>
                <span class="result-title">Pattern Not Found</span>
            </div>
            
            <div class="not-found-content">
                <p>
                    <i class="bi bi-exclamation-triangle"></i>
                    Sorry, I could not identify the pattern based on your responses.
                </p>
                <p>The pattern might be a variation or not in the database.</p>
                
                <div class="suggestion">
                    <i class="bi bi-lightbulb-fill"></i>
                    <span>Try again with different observations, or the pattern may be a unique regional variation not yet documented.</span>
                </div>
            </div>
            
            ${patternsHTML}

            <div class="api-info">
                <i class="bi bi-cpu"></i>
                <span>Searched using Prolog reasoning engine</span>
            </div>
        `;
    }

    showError(message) {
        alert('Error: ' + message);
        console.error(message);
    }

    showLoading(show) {
        if (show) {
            this.yesBtn.disabled = true;
            this.noBtn.disabled = true;
            this.questionText.style.opacity = '0.5';
        } else {
            this.yesBtn.disabled = false;
            this.noBtn.disabled = false;
            this.questionText.style.opacity = '1';
        }
    }

    restart() {
        this.sessionId = null;
        this.currentFeature = null;
        this.questionCount = 0;
        this.showScreen(this.welcomeScreen);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new InabelIdentifier();
});
