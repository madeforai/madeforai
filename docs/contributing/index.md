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

/* Hide sidebars and default footer */
.md-sidebar--primary,
.md-sidebar--secondary {
    display: none !important;
}

.md-footer,
.md-source-date,
.md-feedback,
.md-content__button {
    display: none !important;
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

/* Footer - Same as home page */
.custom-footer {
    padding: 3rem 1rem 2rem;
    background: #ffffff;
    border-top: 1px solid #e2e8f0;
}

.footer-container {
    max-width: 1280px;
    margin: 0 auto;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 2rem;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
}

.footer-logo-icon {
    font-size: 1.5rem;
    color: #2463eb;
}

.footer-tagline {
    font-size: 0.875rem;
    color: #64748b;
    margin: 0;
}

.footer-links {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.footer-links a {
    font-size: 0.875rem;
    color: #64748b;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    white-space: nowrap;
}

.footer-links a:hover {
    color: #2463eb;
}

.footer-social {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.footer-social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 50%;
    color: #64748b;
    text-decoration: none;
    transition: all 0.2s ease;
}

.footer-social-link svg {
    width: 18px;
    height: 18px;
}

.footer-social-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.footer-social-link:nth-child(1):hover {
    background: #24292e;
    border-color: #24292e;
    color: #ffffff;
}

.footer-social-link:nth-child(2):hover {
    background: #5865F2;
    border-color: #5865F2;
    color: #ffffff;
}

.footer-social-link:nth-child(3):hover {
    background: #000000;
    border-color: #000000;
    color: #ffffff;
}

.footer-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid #f1f5f9;
}

.footer-copyright {
    font-size: 0.8125rem;
    color: #94a3b8;
    margin: 0;
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .contributing-section {
        padding: 4rem 1.5rem 3rem;
    }
    
    .ways-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .help-links {
        flex-direction: column;
        align-items: stretch;
    }
    
    .help-link {
        justify-content: center;
    }
    
    .footer-content {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        text-align: center;
    }
    
    .footer-brand {
        align-items: center;
    }
    
    .footer-links {
        flex-direction: row;
        gap: 1rem;
        justify-content: center;
        max-width: 100%;
    }
    
    .footer-links a {
        font-size: 0.8125rem;
    }
    
    .footer-social {
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .ways-grid {
        grid-template-columns: 1fr;
    }
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
            <a href="https://discord.gg/madeforai" target="_blank" rel="noopener" class="help-link">
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

<footer class="custom-footer">
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-brand">
                <div class="footer-logo">
                    <span class="footer-logo-icon material-symbols-outlined">auto_awesome</span>
                    MadeForAI
                </div>
                <p class="footer-tagline">
                    Empowering the next generation of AI engineers.
                </p>
            </div>
            
            <div class="footer-links">
                <a href="../paths/understanding-ai/">Understanding AI</a>
                <a href="../paths/engineering-ai/">Engineering AI</a>
                <a href="../paths/researching-ai/">Researching AI</a>
                <a href="../paths/architecting-ai/">Architecting AI</a>
                <a href="../paths/business-ai/">Business AI</a>
            </div>
            
            <div class="footer-social">
                <a href="https://github.com/madeforai" class="footer-social-link" title="GitHub" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
                <a href="https://discord.gg/madeforai" class="footer-social-link" title="Discord" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                </a>
                <a href="https://twitter.com/madeforai" class="footer-social-link" title="X (Twitter)" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p class="footer-copyright">© 2026 MadeForAI Inc.</p>
        </div>
    </div>
</footer>
