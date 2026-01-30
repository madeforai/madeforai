---
title: Contributing
description: Contribute to MadeForAI
hide:
  - navigation
  - toc
---

<style>
/* Reset MkDocs container constraints */
.md-main__inner {
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.md-content {
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.md-content__inner {
    margin: 0;
    padding: 0;
    max-width: 100%;
}

/* Hide sidebars completely */
.md-sidebar--primary,
.md-sidebar--secondary {
    display: none !important;
}

/* Contributing Page Styles - Minimal & Text-Driven */
.contributing-hero {
    padding: 8rem 2rem 6rem;
    text-align: center;
    background: #ffffff;
    position: relative;
}

.contributing-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    z-index: 0;
}

.contributing-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
}

.contributing-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.contributing-subtitle {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
}

/* Ways to Contribute Section */
.ways-section {
    padding: 6rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
}

.ways-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.ways-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 3rem 0;
    letter-spacing: -0.025em;
}

.ways-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
}

.way-item {
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 0.75rem;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
}

.way-item:hover {
    background: #ffffff;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.way-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.way-icon {
    font-size: 1.5rem;
}

.way-title {
    font-weight: 700;
    color: #0f172a;
    font-size: 1.0625rem;
    margin: 0;
}

.way-description {
    font-size: 0.9375rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
}

/* Setup Section */
.setup-section {
    padding: 6rem 2rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
}

.setup-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.setup-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
}

.setup-text {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.8;
    margin: 0 0 2rem 0;
}

.code-block {
    background: #0f172a;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.75rem;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 0.875rem;
    text-align: left;
    overflow-x: auto;
    margin: 2rem 0;
    line-height: 1.6;
}

.code-block code {
    color: #e2e8f0;
    background: transparent;
}

/* Help Section */
.help-section {
    padding: 6rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
}

.help-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.help-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
}

.help-text {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.8;
    margin: 0 0 2rem 0;
}

.help-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.help-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: all 0.2s ease;
    background: #2463eb;
    color: #ffffff;
}

.help-link:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 99, 235, 0.3);
    color: #ffffff;
}

/* Thank You Section */
.thankyou-section {
    padding: 4rem 2rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
    text-align: center;
}

.thankyou-content {
    max-width: 600px;
    margin: 0 auto;
}

.thankyou-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
}

.thankyou-text {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 768px) {
    .contributing-hero {
        padding: 5rem 1.5rem 4rem;
    }
    
    .ways-section,
    .setup-section,
    .help-section {
        padding: 4rem 1.5rem;
    }
    
    .help-links {
        flex-direction: column;
        align-items: center;
    }
    
    .help-link {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}
</style>

<div class="contributing-hero">
    <div class="contributing-content">
        <h1 class="contributing-title">Contributing to MadeForAI</h1>
        <p class="contributing-subtitle">
            Thank you for your interest in contributing! We welcome contributions from everyone, whether you're fixing a typo, adding a new module, or improving documentation.
        </p>
    </div>
</div>

<section class="ways-section">
    <div class="ways-container">
        <h2 class="ways-title">Ways to Contribute</h2>
        <div class="ways-list">
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">🐛</span>
                    <h3 class="way-title">Report Bugs</h3>
                </div>
                <p class="way-description">
                    Found a bug? Create an issue with clear steps to reproduce, expected vs actual behavior, and your environment details.
                </p>
            </div>
            
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">✨</span>
                    <h3 class="way-title">Suggest Features</h3>
                </div>
                <p class="way-description">
                    Have an idea? Open an issue describing the feature, use cases, benefits, and possible implementation approach.
                </p>
            </div>
            
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">📝</span>
                    <h3 class="way-title">Improve Documentation</h3>
                </div>
                <p class="way-description">
                    Fix typos, clarify confusing sections, add missing information, or improve code examples.
                </p>
            </div>
            
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">📚</span>
                    <h3 class="way-title">Add Content</h3>
                </div>
                <p class="way-description">
                    Contribute new Jupyter notebooks, tutorials, guides, code examples, or curated resources.
                </p>
            </div>
            
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">🌍</span>
                    <h3 class="way-title">Translate</h3>
                </div>
                <p class="way-description">
                    Help make AI education accessible globally by translating content into other languages.
                </p>
            </div>
            
            <div class="way-item">
                <div class="way-header">
                    <span class="way-icon">🎨</span>
                    <h3 class="way-title">Design & UX</h3>
                </div>
                <p class="way-description">
                    Improve the visual design, user experience, or create illustrations and diagrams.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="setup-section">
    <div class="setup-container">
        <h2 class="setup-title">Quick Start</h2>
        <p class="setup-text">
            Get started with contributing in just a few steps:
        </p>
        
        <div class="code-block">
<code># Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/madeforai.git
cd madeforai

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create a new branch
git checkout -b feature/your-feature-name

# Start the development server
mkdocs serve

# Visit http://127.0.0.1:8000 in your browser</code>
        </div>
        
        <p class="setup-text">
            Make your changes, test them locally, commit, and create a pull request. We'll review it and provide feedback!
        </p>
    </div>
</section>

<section class="help-section">
    <div class="help-container">
        <h2 class="help-title">Need Help?</h2>
        <p class="help-text">
            We're here to help! Reach out through any of these channels:
        </p>
        <div class="help-links">
            <a href="https://discord.gg/madeforai" target="_blank" rel="noopener" class="help-link">
                <span>💬</span>
                <span>Join Discord</span>
            </a>
            <a href="https://github.com/madeforai/madeforai/discussions" target="_blank" rel="noopener" class="help-link">
                <span>💭</span>
                <span>GitHub Discussions</span>
            </a>
            <a href="https://github.com/madeforai/madeforai/issues" target="_blank" rel="noopener" class="help-link">
                <span>🐛</span>
                <span>Open an Issue</span>
            </a>
        </div>
    </div>
</section>

<div class="thankyou-section">
    <div class="thankyou-content">
        <h3 class="thankyou-title">Thank you for contributing! 🎉</h3>
        <p class="thankyou-text">
            Every contribution, no matter how small, helps make this resource better for everyone. By contributing, you agree that your contributions will be licensed under the MIT License.
        </p>
    </div>
</div>
