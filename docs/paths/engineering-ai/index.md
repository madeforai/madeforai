---
title: Engineering AI
description: Build production-ready LLM applications
---

<style>
/* Path Page Styles - Matching Homepage Design Philosophy */
.md-content__inner {
    max-width: 900px;
    margin: 0 auto;
}

.path-hero {
    padding: 4rem 0 3rem;
    text-align: center;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 3rem;
}

.path-icon {
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

.path-icon .material-symbols-outlined {
    font-size: 2rem;
    color: #ffffff;
    font-weight: 400;
}

.path-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
    letter-spacing: -0.025em;
}

.path-subtitle {
    font-size: 1.125rem;
    color: #64748b;
    margin: 0 0 2rem 0;
    font-weight: 400;
}

.path-description {
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
}

.path-meta {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}

.meta-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: left;
}

.meta-card h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    margin: 0 0 1rem 0;
}

.meta-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.meta-card li {
    font-size: 0.9375rem;
    color: #475569;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
}

.meta-card li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.875rem;
    width: 6px;
    height: 6px;
    background: #8b5cf6;
    border-radius: 50%;
}

.modules-section {
    margin: 3rem 0;
}

.section-header {
    margin-bottom: 2rem;
}

.section-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.025em;
}

.section-description {
    font-size: 1rem;
    color: #64748b;
    margin: 0;
}

.module-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.75rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
}

.module-card:hover {
    border-color: #8b5cf6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

.module-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
}

.module-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    flex-shrink: 0;
}

.module-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
}

.chapter-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.chapter-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    text-decoration: none;
    color: #475569;
    font-weight: 500;
    font-size: 0.9375rem;
    transition: all 0.2s ease;
}

.chapter-link:hover {
    background: #8b5cf610;
    border-color: #8b5cf6;
    color: #0f172a;
    transform: translateX(4px);
}

.chapter-link .material-symbols-outlined {
    font-size: 1.25rem;
    color: #8b5cf6;
}

.module-card.coming-soon {
    background: #f9fafb;
    border-style: dashed;
    border-color: #d1d5db;
    opacity: 0.7;
}

.module-card.coming-soon .module-number {
    background: #9ca3af;
}

.module-card.coming-soon .module-title {
    color: #6b7280;
}

.coming-soon-badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.cta-section {
    text-align: center;
    padding: 3rem 0;
    margin-top: 3rem;
    border-top: 1px solid #f1f5f9;
}

.cta-title {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
}

.btn-start {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    color: #ffffff;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-start:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    color: #ffffff;
}

.btn-start .material-symbols-outlined {
    font-size: 1.25rem;
}

.stay-updated-section {
    margin-top: 4rem;
    padding: 2rem;
    background: linear-gradient(135deg, #8b5cf608 0%, #8b5cf603 100%);
    border: 1px solid #8b5cf620;
    border-radius: 1rem;
}

.stay-updated-content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.stay-updated-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: #8b5cf6;
    border-radius: 0.75rem;
    flex-shrink: 0;
}

.stay-updated-icon .material-symbols-outlined {
    font-size: 1.5rem;
    color: #ffffff;
}

.stay-updated-text {
    flex: 1;
    min-width: 200px;
}

.stay-updated-text h3 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.25rem 0;
}

.stay-updated-text p {
    font-size: 0.9375rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
}

.btn-github {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #24292e;
    color: #ffffff;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.btn-github:hover {
    background: #1b1f23;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
    color: #ffffff;
}

.btn-github svg {
    flex-shrink: 0;
}

.stay-updated-section.coming-soon-variant {
    background: linear-gradient(135deg, #f1f5f908 0%, #e2e8f003 100%);
    border-color: #e2e8f0;
}

.stay-updated-section.coming-soon-variant .stay-updated-icon {
    background: #64748b;
}

@media (max-width: 768px) {
    .path-hero {
        padding: 3rem 0 2rem;
    }
    
    .path-title {
        font-size: 2rem;
    }
    
    .path-subtitle {
        font-size: 1rem;
    }
    
    .path-meta {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .module-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .stay-updated-content {
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }
    
    .btn-github {
        width: 100%;
        justify-content: center;
    }
}
</style>

<div class="path-hero">
    <div class="path-icon">
        <span class="material-symbols-outlined">code</span>
    </div>
    <h1 class="path-title">Engineering AI</h1>
    <p class="path-subtitle">Build production-ready LLM applications</p>
    <p class="path-description">Dive deep into transformer architecture, fine-tuning techniques, and deployment strategies. Learn to build scalable AI systems that work in production environments.</p>
</div>

<div class="path-meta">
    <div class="meta-card">
        <h3>Prerequisites</h3>
        <ul>
            <li>Python programming experience</li>
            <li>Basic ML concepts</li>
            <li>Deep learning frameworks</li>
        </ul>
    </div>
    
    <div class="meta-card">
        <h3>What You'll Learn</h3>
        <ul>
            <li>Master Transformer architecture</li>
            <li>Fine-tune models with LoRA/QLoRA</li>
            <li>Build RAG systems</li>
            <li>Deploy LLMs to production</li>
        </ul>
    </div>
</div>

<div class="modules-section">
    <div class="section-header">
        <h2 class="section-title">Learning Modules</h2>
        <p class="section-description">Progressive curriculum designed to take you from fundamentals to mastery</p>
    </div>
    
    <div class="module-card">
        <div class="module-header">
            <div class="module-number">1</div>
            <h3 class="module-title">Transformer Architecture</h3>
        </div>
        <div class="chapter-list">
            <a href="01-transformer-architecture.ipynb" class="chapter-link">
                <span class="material-symbols-outlined">play_circle</span>
                <span>Transformer Architecture</span>
            </a>
        </div>
    </div>
    
</div>

<div class="cta-section">
    <h2 class="cta-title">Ready to Begin?</h2>
    <a href="01-transformer-architecture.ipynb" class="btn-start">
        Start Learning
        <span class="material-symbols-outlined">arrow_forward</span>
    </a>
</div>

<div class="stay-updated-section">
    <div class="stay-updated-content">
        <div class="stay-updated-icon">
            <span class="material-symbols-outlined">notifications_active</span>
        </div>
        <div class="stay-updated-text">
            <h3>Stay Updated</h3>
            <p>Follow our GitHub repository to get notified when new modules are released</p>
        </div>
        <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="btn-github">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Star on GitHub</span>
        </a>
    </div>
</div>
