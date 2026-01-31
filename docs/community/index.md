---
title: Community
description: Join the MadeForAI community. Connect with AI engineers, share knowledge, get help, and collaborate on Discord, GitHub, Twitter, and LinkedIn.
keywords: AI community, AI engineers, Discord community, AI collaboration, AI learning community, AI networking
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




/* Community Section - Everything in one */
.community-section {
    padding: 5rem 2rem 4rem;
    background: #ffffff;
    position: relative;
}

.community-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    z-index: 0;
}

.community-container {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.community-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2rem, 5vw, 2.75rem);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.community-subtitle {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    font-weight: 400;
}

.stats-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 0 0 3rem 0;
    flex-wrap: wrap;
}

.stat {
    text-align: center;
}

.stat-number {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2463eb 0%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

.stat-label {
    font-size: 0.75rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-top: 0.25rem;
}

.platforms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.25rem;
    margin-bottom: 2rem;
}

.platform-card {
    padding: 1.5rem 1rem;
    background: #f8fafc;
    border-radius: 0.75rem;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;
    text-align: center;
}

.platform-card:hover {
    background: #ffffff;
    border-color: #cbd5e1;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.platform-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-bottom: 0.75rem;
}

.platform-icon.discord {
    background: linear-gradient(135deg, #5865f2 0%, #4752c4 100%);
}

.platform-icon.github {
    background: linear-gradient(135deg, #24292e 0%, #1b1f23 100%);
}

.platform-icon.twitter {
    background: linear-gradient(135deg, #1da1f2 0%, #0c85d0 100%);
}

.platform-icon svg {
    width: 24px;
    height: 24px;
    fill: #ffffff;
}

.platform-name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
}

.platform-desc {
    font-size: 0.8125rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0 0 1rem 0;
}

.btn-platform {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.625rem 1.25rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.8125rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.btn-platform.discord {
    background: #5865f2;
    color: #ffffff;
}

.btn-platform.discord:hover {
    background: #4752c4;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(88, 101, 242, 0.3);
    color: #ffffff;
}

.btn-platform.github {
    background: #24292e;
    color: #ffffff;
}

.btn-platform.github:hover {
    background: #1b1f23;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
    color: #ffffff;
}

.btn-platform.twitter {
    background: #1da1f2;
    color: #ffffff;
}

.btn-platform.twitter:hover {
    background: #0c85d0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29, 161, 242, 0.3);
    color: #ffffff;
}
</style>

<section class="community-section">
    <div class="community-container">
        <h1 class="community-title">Join Our Community</h1>
        <p class="community-subtitle">
            Connect with AI enthusiasts, engineers, and researchers building the future together.
        </p>
        
        <div class="platforms-grid">
            <div class="platform-card">
                <div class="platform-icon discord">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                </div>
                <h2 class="platform-name">Discord</h2>
                <p class="platform-desc">Real-time help & study groups</p>
                <a href="https://discord.gg/UycUrRfm" target="_blank" rel="noopener" class="btn-platform discord">
                    Join Server
                </a>
            </div>
            
            <div class="platform-card">
                <div class="platform-icon github">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>
                <h2 class="platform-name">GitHub</h2>
                <p class="platform-desc">Open source & contributions</p>
                <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="btn-platform github">
                    View Repo
                </a>
            </div>
            
            <div class="platform-card">
                <div class="platform-icon twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </div>
                <h2 class="platform-name">X (Twitter)</h2>
                <p class="platform-desc">Latest AI trends & updates</p>
                <a href="https://x.com/MadeForAI_" target="_blank" rel="noopener" class="btn-platform twitter">
                    Follow Us
                </a>
            </div>
        </div>
    </div>
</section>


