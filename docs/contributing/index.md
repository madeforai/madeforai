---
title: Contributing
description: Contribute to MadeForAI. Learn how to submit content, report issues, improve documentation, and help build the best AI learning platform.
keywords: contribute to AI, open source AI, AI documentation, AI content creation, GitHub contributions, AI education contributions
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



/* Contributing Section - Everything in one */
.contributing-section {
    padding: 5rem 2rem 4rem;
    background: #ffffff;
    position: relative;
}

.contributing-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    z-index: 0;
}

.contributing-container {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
}

.contributing-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
    letter-spacing: -0.025em;
    line-height: 1.1;
    text-align: center;
}

.contributing-subtitle {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0 0 2.5rem 0;
    font-weight: 400;
    text-align: center;
}

.section-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1rem 0;
    letter-spacing: -0.025em;
}

.ways-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin: 0 0 2.5rem 0;
}

.way-card {
    padding: 1rem;
    background: #f8fafc;
    border-radius: 0.75rem;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
    text-align: center;
}

.way-card:hover {
    background: #ffffff;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.way-icon {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.way-title {
    font-weight: 700;
    color: #0f172a;
    font-size: 0.875rem;
    margin: 0 0 0.25rem 0;
}

.way-desc {
    font-size: 0.75rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
}

.section-text {
    font-size: 0.9375rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0 0 1rem 0;
}

.code-block {
    background: #0f172a;
    color: #e2e8f0;
    padding: 1.25rem;
    border-radius: 0.75rem;
    font-family: 'JetBrains Mono', 'Courier New', monospace;
    font-size: 0.8125rem;
    text-align: left;
    overflow-x: auto;
    margin: 0 0 2.5rem 0;
    line-height: 1.6;
}

.code-block code {
    color: #e2e8f0;
    background: transparent;
}

.help-links {
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin: 0;
}

.help-link {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.625rem 1.25rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.8125rem;
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


</style>

<section class="contributing-section">
    <div class="contributing-container">
        <h1 class="contributing-title">Contributing</h1>
        <p class="contributing-subtitle">
            Help make AI education accessible to everyone. All contributions welcome.
        </p>
        
        <h2 class="section-title">Ways to Contribute</h2>
        <div class="ways-grid">
            <div class="way-card">
                <div class="way-icon">🐛</div>
                <h3 class="way-title">Report Bugs</h3>
                <p class="way-desc">Open GitHub issues</p>
            </div>
            
            <div class="way-card">
                <div class="way-icon">✨</div>
                <h3 class="way-title">Suggest Features</h3>
                <p class="way-desc">Share your ideas</p>
            </div>
            
            <div class="way-card">
                <div class="way-icon">📝</div>
                <h3 class="way-title">Improve Docs</h3>
                <p class="way-desc">Fix typos & clarify</p>
            </div>
            
            <div class="way-card">
                <div class="way-icon">📚</div>
                <h3 class="way-title">Add Content</h3>
                <p class="way-desc">Create tutorials</p>
            </div>
            
            <div class="way-card">
                <div class="way-icon">🌍</div>
                <h3 class="way-title">Translate</h3>
                <p class="way-desc">Make it global</p>
            </div>
            
            <div class="way-card">
                <div class="way-icon">🎨</div>
                <h3 class="way-title">Design & UX</h3>
                <p class="way-desc">Improve visuals</p>
            </div>
        </div>
        
        <h2 class="section-title">Quick Start</h2>
        <p class="section-text">
            Fork the repo, make changes, and submit a PR. See the <a href="https://github.com/madeforai/madeforai" target="_blank" style="color: #2463eb; text-decoration: underline;">GitHub repository</a> for detailed guidelines.
        </p>
        
        <div class="code-block"><code># Clone and setup
git clone https://github.com/YOUR-USERNAME/madeforai.git
cd madeforai && python -m venv venv
source venv/bin/activate && pip install -r requirements.txt

# Start development server
mkdocs serve</code></div>
        
        <h2 class="section-title">Need Help?</h2>
        <div class="help-links">
            <a href="https://discord.gg/UycUrRfm" target="_blank" rel="noopener" class="help-link">
                <span>💬</span>
                <span>Discord</span>
            </a>
            <a href="https://github.com/madeforai/madeforai/discussions" target="_blank" rel="noopener" class="help-link">
                <span>💭</span>
                <span>Discussions</span>
            </a>
            <a href="https://github.com/madeforai/madeforai/issues" target="_blank" rel="noopener" class="help-link">
                <span>🐛</span>
                <span>Issues</span>
            </a>
        </div>
    </div>
</section>


