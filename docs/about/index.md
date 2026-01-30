---
title: About
description: About MadeForAI
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

/* About Page Styles - Minimal & Text-Driven */
.about-hero {
    padding: 8rem 2rem 6rem;
    text-align: center;
    background: #ffffff;
    position: relative;
}

.about-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e5e7eb 1px, transparent 1px);
    background-size: 16px 16px;
    mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%);
    z-index: 0;
}

.about-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    margin: 0 auto;
}

.about-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
    line-height: 1.1;
}

.about-subtitle {
    font-size: 1.25rem;
    color: #64748b;
    line-height: 1.7;
    margin: 0;
    font-weight: 400;
}

/* Mission Section */
.mission-section {
    padding: 6rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
}

.mission-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.mission-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
}

.mission-text {
    font-size: 1.125rem;
    color: #64748b;
    line-height: 1.8;
    margin: 0 0 3rem 0;
}

.values-row {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3rem;
}

.value-item {
    text-align: center;
    max-width: 140px;
}

.value-icon {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
}

.value-title {
    font-weight: 700;
    color: #0f172a;
    font-size: 0.9375rem;
    margin-bottom: 0.5rem;
}

.value-description {
    font-size: 0.8125rem;
    color: #94a3b8;
    line-height: 1.5;
}

/* Stats Section */
.stats-section {
    padding: 6rem 2rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
}

.stats-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.stats-grid {
    display: flex;
    justify-content: center;
    gap: 3rem;
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

/* Team Section */
.team-section {
    padding: 6rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
}

.team-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.team-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.025em;
}

.team-text {
    font-size: 1.0625rem;
    color: #64748b;
    line-height: 1.8;
    margin: 0;
}

/* Contact Section */
.contact-section {
    padding: 6rem 2rem;
    background: #f8fafc;
    border-top: 1px solid #e2e8f0;
}

.contact-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.contact-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 3rem 0;
    letter-spacing: -0.025em;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 0.9375rem;
    text-decoration: none;
    transition: all 0.2s ease;
    background: #ffffff;
    color: #475569;
    border: 1px solid #e2e8f0;
}

.contact-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    color: #0f172a;
    border-color: #cbd5e1;
}

.contact-link svg {
    width: 20px;
    height: 20px;
}

/* License Section */
.license-section {
    padding: 4rem 2rem;
    background: #ffffff;
    border-top: 1px solid #f1f5f9;
    text-align: center;
}

.license-text {
    font-size: 0.9375rem;
    color: #94a3b8;
    margin: 0;
}

.license-text a {
    color: #2463eb;
    text-decoration: none;
    font-weight: 600;
}

.license-text a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .about-hero {
        padding: 5rem 1.5rem 4rem;
    }
    
    .mission-section,
    .stats-section,
    .team-section,
    .contact-section {
        padding: 4rem 1.5rem;
    }
    
    .values-row,
    .stats-grid {
        gap: 2rem;
    }
    
    .stat-number {
        font-size: 2.5rem;
    }
    
    .contact-links {
        flex-direction: column;
        align-items: center;
    }
    
    .contact-link {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}
</style>

<div class="about-hero">
    <div class="about-content">
        <h1 class="about-title">About MadeForAI</h1>
        <p class="about-subtitle">
            Building the definitive resource for understanding and mastering Large Language Models, Small Language Models, and the entire GenAI ecosystem.
        </p>
    </div>
</div>

<section class="mission-section">
    <div class="mission-container">
        <h2 class="mission-title">Our Mission</h2>
        <p class="mission-text">
            We believe that high-quality AI education should be accessible to everyone, regardless of background or resources. Our goal is to democratize AI knowledge and empower the next generation of AI practitioners.
        </p>
        
        <div class="values-row">
            <div class="value-item">
                <div class="value-icon">🌍</div>
                <div class="value-title">Free & Accessible</div>
                <div class="value-description">All content is completely free</div>
            </div>
            <div class="value-item">
                <div class="value-icon">💻</div>
                <div class="value-title">Interactive</div>
                <div class="value-description">Hands-on learning with code</div>
            </div>
            <div class="value-item">
                <div class="value-icon">🔄</div>
                <div class="value-title">Up-to-Date</div>
                <div class="value-description">Latest research and tools</div>
            </div>
            <div class="value-item">
                <div class="value-icon">🎯</div>
                <div class="value-title">Practical</div>
                <div class="value-description">Production-ready code</div>
            </div>
        </div>
    </div>
</section>

<section class="stats-section">
    <div class="stats-container">
        <div class="stats-grid">
            <div class="stat">
                <div class="stat-number">5</div>
                <div class="stat-label">Learning Paths</div>
            </div>
            <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">Modules</div>
            </div>
            <div class="stat">
                <div class="stat-number">5,000+</div>
                <div class="stat-label">Members</div>
            </div>
            <div class="stat">
                <div class="stat-number">100+</div>
                <div class="stat-label">Contributors</div>
            </div>
        </div>
    </div>
</section>

<section class="team-section">
    <div class="team-container">
        <h2 class="team-title">Built by the Community</h2>
        <p class="team-text">
            MadeForAI is built and maintained by a passionate community of AI practitioners, researchers, and educators from around the world. We're united by a common goal: making AI education accessible to everyone. Every contribution, whether it's a bug fix, a new module, or feedback, helps make this resource better for thousands of learners worldwide.
        </p>
    </div>
</section>

<section class="contact-section">
    <div class="contact-container">
        <h2 class="contact-title">Get in Touch</h2>
        <div class="contact-links">
            <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
            </a>
            <a href="https://discord.gg/madeforai" target="_blank" rel="noopener" class="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>Discord</span>
            </a>
            <a href="https://twitter.com/madeforai" target="_blank" rel="noopener" class="contact-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter/X</span>
            </a>
        </div>
    </div>
</section>

<div class="license-section">
    <p class="license-text">
        All content is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener">MIT License</a>. © 2026 MadeForAI. Built with ❤️ by the community.
    </p>
</div>
