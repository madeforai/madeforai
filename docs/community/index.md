---
title: Community
description: Join the MadeForAI community
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

/* Community Page Styles - Minimal & Text-Driven */
.community-hero {
    padding: 8rem 2rem 6rem;
    text-align: center;
    background: #ffffff;
    position: relative;
}

.community-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    z-index: 0;
}

.community-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
}

.community-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.community-subtitle {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0 0 3rem 0;
    font-weight: 400;
}

.stats-row {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 4rem 0;
    flex-wrap: wrap;
}

.stat {
    text-align: center;
}

.stat-number {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2463eb 0%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

.stat-label {
    font-size: 0.875rem;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    margin-top: 0.5rem;
}

/* Platform Section */
.platform-section {
    padding: 6rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
}

.platform-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.platform-block {
    margin-bottom: 5rem;
}

.platform-block:last-child {
    margin-bottom: 0;
}

.platform-icon-large {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
}

.platform-icon-large.discord {
    background: linear-gradient(135deg, #5865f2 0%, #4752c4 100%);
}

.platform-icon-large.github {
    background: linear-gradient(135deg, #24292e 0%, #1b1f23 100%);
}

.platform-icon-large.twitter {
    background: linear-gradient(135deg, #1da1f2 0%, #0c85d0 100%);
}

.platform-icon-large svg {
    width: 32px;
    height: 32px;
    fill: #ffffff;
}

.platform-name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1rem 0;
}

.platform-text {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.8;
    margin: 0 0 2rem 0;
}

.btn-platform {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.9375rem;
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

/* Footer Note */
.footer-note {
    padding: 4rem 2rem;
    text-align: center;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
}

.footer-note-content {
    max-width: 600px;
    margin: 0 auto;
}

.footer-note h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
}

.footer-note p {
    font-size: 1rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
}

@media (max-width: 768px) {
    .community-hero {
        padding: 5rem 1.5rem 4rem;
    }
    
    .stats-row {
        gap: 2rem;
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
    
    .platform-section {
        padding: 4rem 1.5rem;
    }
    
    .platform-block {
        margin-bottom: 4rem;
    }
}
</style>

<div class="community-hero">
    <div class="community-content">
        <h1 class="community-title">Join Our Community</h1>
        <p class="community-subtitle">
            Connect with thousands of AI enthusiasts, engineers, and researchers building the future together.
        </p>
        
        <div class="stats-row">
            <div class="stat">
                <div class="stat-number">5,000+</div>
                <div class="stat-label">Members</div>
            </div>
            <div class="stat">
                <div class="stat-number">500+</div>
                <div class="stat-label">GitHub Stars</div>
            </div>
            <div class="stat">
                <div class="stat-number">100+</div>
                <div class="stat-label">Contributors</div>
            </div>
        </div>
    </div>
</div>

<section class="platform-section">
    <div class="platform-container">
        <div class="platform-block">
            <div class="platform-icon-large discord">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
            </div>
            <h2 class="platform-name">Discord Community</h2>
            <p class="platform-text">
                Join our vibrant Discord server to connect with fellow learners, get real-time help, share your AI projects, and participate in weekly events and study groups.
            </p>
            <a href="https://discord.gg/madeforai" target="_blank" rel="noopener" class="btn-platform discord">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Join Discord Server</span>
            </a>
        </div>
        
        <div class="platform-block">
            <div class="platform-icon-large github">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </div>
            <h2 class="platform-name">Open Source on GitHub</h2>
            <p class="platform-text">
                All our content is open source and available on GitHub. Contribute code, fix bugs, add new modules, improve documentation, or simply star the repository to show your support.
            </p>
            <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="btn-platform github">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
            </a>
        </div>
        
        <div class="platform-block">
            <div class="platform-icon-large twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </div>
            <h2 class="platform-name">Follow on X</h2>
            <p class="platform-text">
                Stay updated with the latest AI trends, new module releases, community highlights, and industry insights. Join the conversation and connect with AI practitioners worldwide.
            </p>
            <a href="https://twitter.com/madeforai" target="_blank" rel="noopener" class="btn-platform twitter">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Follow @madeforai</span>
            </a>
        </div>
    </div>
</section>

<div class="footer-note">
    <div class="footer-note-content">
        <h3>🤝 Code of Conduct</h3>
        <p>
            We're committed to providing a welcoming, inclusive, and harassment-free community for everyone. Please be respectful, constructive, and supportive in all interactions.
        </p>
    </div>
</div>

.community-hero {
    padding: 4rem 0 3rem;
    text-align: center;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 3rem;
}

.community-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.community-icon .material-symbols-outlined {
    font-size: 2rem;
    color: #ffffff;
    font-weight: 400;
}

.community-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
    letter-spacing: -0.025em;
}

.community-subtitle {
    font-size: 1.125rem;
    color: #64748b;
    margin: 0 0 2rem 0;
    font-weight: 400;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.community-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}

.stat-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.2s ease;
}

.stat-card:hover {
    border-color: #8b5cf6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.stat-number {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #8b5cf6;
    margin: 0 0 0.25rem 0;
}

.stat-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.platform-section {
    margin: 3rem 0;
}

.platform-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 2rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
}

.platform-card:hover {
    border-color: #8b5cf6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.platform-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.platform-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 0.75rem;
    flex-shrink: 0;
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

.platform-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
}

.platform-description {
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 1.5rem;
}

.feature-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem;
    background: #f8fafc;
    border-radius: 0.5rem;
}

.feature-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
}

.feature-text {
    flex: 1;
}

.feature-text strong {
    display: block;
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 0.125rem;
}

.feature-text span {
    font-size: 0.875rem;
    color: #64748b;
}

.btn-platform {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
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

.contribution-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.step-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
}

.step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #8b5cf6;
    color: #ffffff;
    border-radius: 50%;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.step-title {
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 0.5rem;
}

.step-description {
    font-size: 0.875rem;
    color: #64748b;
}

.conduct-section {
    margin-top: 4rem;
    padding: 2rem;
    background: linear-gradient(135deg, #8b5cf608 0%, #8b5cf603 100%);
    border: 1px solid #8b5cf620;
    border-radius: 1rem;
    text-align: center;
}

.conduct-section h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
}

.conduct-section p {
    font-size: 1rem;
    color: #475569;
    margin: 0;
    line-height: 1.7;
}

@media (max-width: 768px) {
    .community-hero {
        padding: 3rem 0 2rem;
    }
    
    .community-title {
        font-size: 2rem;
    }
    
    .community-stats {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .feature-list {
        grid-template-columns: 1fr;
    }
    
    .contribution-steps {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="community-hero">
    <div class="community-icon">
        <span class="material-symbols-outlined">groups</span>
    </div>
    <h1 class="community-title">Join Our Community</h1>
    <p class="community-subtitle">Connect with thousands of AI enthusiasts, engineers, and researchers building the future together</p>
</div>

<div class="community-stats">
    <div class="stat-card">
        <div class="stat-number">5,000+</div>
        <div class="stat-label">Community Members</div>
    </div>
    <div class="stat-card">
        <div class="stat-number">500+</div>
        <div class="stat-label">GitHub Stars</div>
    </div>
    <div class="stat-card">
        <div class="stat-number">100+</div>
        <div class="stat-label">Contributors</div>
    </div>
    <div class="stat-card">
        <div class="stat-number">50+</div>
        <div class="stat-label">Learning Modules</div>
    </div>
</div>

<div class="platform-section">
    <div class="platform-card">
        <div class="platform-header">
            <div class="platform-icon discord">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
            </div>
            <h2 class="platform-title">Discord Community</h2>
        </div>
        <p class="platform-description">Join our vibrant Discord server to connect with fellow learners, get real-time help, and share your AI projects with the community.</p>
        <div class="feature-list">
            <div class="feature-item">
                <span class="feature-icon">🆘</span>
                <div class="feature-text">
                    <strong>Help Channels</strong>
                    <span>Get answers fast</span>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">💡</span>
                <div class="feature-text">
                    <strong>Project Showcase</strong>
                    <span>Share your work</span>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">📢</span>
                <div class="feature-text">
                    <strong>Announcements</strong>
                    <span>Stay updated</span>
                </div>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🎓</span>
                <div class="feature-text">
                    <strong>Study Groups</strong>
                    <span>Learn together</span>
                </div>
            </div>
        </div>
        <a href="https://discord.gg/madeforai" target="_blank" rel="noopener" class="btn-platform discord">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span>Join Discord Server</span>
        </a>
    </div>
    
    <div class="platform-card">
        <div class="platform-header">
            <div class="platform-icon github">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </div>
            <h2 class="platform-title">Open Source on GitHub</h2>
        </div>
        <p class="platform-description">All our content is open source and available on GitHub. Contribute code, fix bugs, add new modules, or improve documentation.</p>
        <div class="contribution-steps">
            <div class="step-card">
                <div class="step-number">1</div>
                <div class="step-title">Fork Repository</div>
                <div class="step-description">Create your own copy</div>
            </div>
            <div class="step-card">
                <div class="step-number">2</div>
                <div class="step-title">Make Changes</div>
                <div class="step-description">Add your improvements</div>
            </div>
            <div class="step-card">
                <div class="step-number">3</div>
                <div class="step-title">Submit PR</div>
                <div class="step-description">Share with community</div>
            </div>
            <div class="step-card">
                <div class="step-number">4</div>
                <div class="step-title">Get Recognized</div>
                <div class="step-description">Join contributors list</div>
            </div>
        </div>
        <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="btn-platform github">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View on GitHub</span>
        </a>
    </div>
    
    <div class="platform-card">
        <div class="platform-header">
            <div class="platform-icon twitter">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            </div>
            <h2 class="platform-title">Follow on Twitter/X</h2>
        </div>
        <p class="platform-description">Stay updated with the latest AI trends, new module releases, community highlights, and industry insights. Join the conversation!</p>
        <a href="https://twitter.com/madeforai" target="_blank" rel="noopener" class="btn-platform twitter">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <span>Follow @madeforai</span>
        </a>
    </div>
</div>

<div class="conduct-section">
    <h3>🤝 Code of Conduct</h3>
    <p>We're committed to providing a welcoming, inclusive, and harassment-free community for everyone. Please be respectful, constructive, and supportive in all interactions. Together, we're building something amazing.</p>
</div>
