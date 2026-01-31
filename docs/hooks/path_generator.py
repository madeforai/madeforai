"""
Dynamic Learning Path Page Generator for MadeForAI
Automatically generates beautiful learning path overview pages based on mkdocs.yml navigation
"""

import os
import yaml
from pathlib import Path


def on_pre_build(config):
    """Generate learning path pages before build"""
    
    # Path configurations for each learning path
    path_configs = {
        'understanding-ai': {
            'title': 'Understanding AI',
            'subtitle': 'Build a solid foundation in AI fundamentals',
            'description': 'Master the core concepts of artificial intelligence, machine learning, and deep learning. Build your first models and understand how modern AI systems work through hands-on interactive lessons.',
            'icon': 'school',
            'color': '#3b82f6',
            'gradient_start': '#3b82f6',
            'gradient_end': '#2563eb',
            'prerequisites': [
                'Basic Python programming',
                'High school mathematics',
                'Curiosity about AI'
            ],
            'outcomes': [
                'Understand AI, ML, and Deep Learning',
                'Build neural networks from scratch',
                'Work with modern LLMs',
                'Master prompt engineering basics'
            ]
        },
        'engineering-ai': {
            'title': 'Engineering AI',
            'subtitle': 'Build production-ready LLM applications',
            'description': 'Dive deep into transformer architecture, fine-tuning techniques, and deployment strategies. Learn to build scalable AI systems that work in production environments.',
            'icon': 'code',
            'color': '#8b5cf6',
            'gradient_start': '#8b5cf6',
            'gradient_end': '#7c3aed',
            'prerequisites': [
                'Python programming experience',
                'Basic ML concepts',
                'Deep learning frameworks'
            ],
            'outcomes': [
                'Master Transformer architecture',
                'Fine-tune models with LoRA/QLoRA',
                'Build RAG systems',
                'Deploy LLMs to production'
            ]
        },
        'researching-ai': {
            'title': 'Researching AI',
            'subtitle': 'Push the boundaries of AI innovation',
            'description': 'Explore cutting-edge research, learn to read and implement papers, and contribute to the field. Develop the skills to design novel architectures and conduct rigorous experiments.',
            'icon': 'biotech',
            'color': '#ec4899',
            'gradient_start': '#ec4899',
            'gradient_end': '#db2777',
            'prerequisites': [
                'Strong mathematical background',
                'Deep learning fundamentals',
                'Research experience helpful'
            ],
            'outcomes': [
                'Read and implement papers',
                'Design novel architectures',
                'Conduct rigorous experiments',
                'Contribute to open-source research'
            ]
        },
        'architecting-ai': {
            'title': 'Architecting AI',
            'subtitle': 'Design scalable AI systems',
            'description': 'Learn system design patterns, infrastructure choices, and best practices for building reliable, scalable AI systems. Master the art of architecting production-grade AI solutions.',
            'icon': 'architecture',
            'color': '#f59e0b',
            'gradient_start': '#f59e0b',
            'gradient_end': '#d97706',
            'prerequisites': [
                'System design experience',
                'Cloud infrastructure knowledge',
                'AI/ML basics'
            ],
            'outcomes': [
                'Design scalable architectures',
                'Choose optimal infrastructure',
                'Implement monitoring systems',
                'Optimize costs and performance'
            ]
        },
        'business-ai': {
            'title': 'Business AI',
            'subtitle': 'Lead AI strategy and transformation',
            'description': 'Understand AI strategy without diving into technical details. Learn to identify use cases, evaluate vendors, build teams, and navigate the business side of AI implementation.',
            'icon': 'business_center',
            'color': '#10b981',
            'gradient_start': '#10b981',
            'gradient_end': '#059669',
            'prerequisites': [
                'No technical background required',
                'Business experience helpful',
                'Interest in AI strategy'
            ],
            'outcomes': [
                'Understand AI/LLM landscape',
                'Identify high-value use cases',
                'Make build vs. buy decisions',
                'Build and manage AI teams'
            ]
        }
    }
    
    # Read mkdocs.yml to get navigation structure
    mkdocs_path = Path(config['config_file_path'])
    with open(mkdocs_path, 'r', encoding='utf-8') as f:
        # Use unsafe load since mkdocs.yml contains Python objects
        mkdocs_config = yaml.unsafe_load(f)
    
    nav = mkdocs_config.get('nav', [])
    
    # Process each learning path
    for nav_item in nav:
        if isinstance(nav_item, dict):
            for path_name, path_content in nav_item.items():
                # Skip non-path items
                if path_name in ['madeforAI', 'Community', 'About', 'Contributing']:
                    continue
                
                # Get path slug
                path_slug = path_name.lower().replace(' ', '-')
                
                if path_slug in path_configs and isinstance(path_content, list):
                    generate_path_page(
                        config,
                        path_slug,
                        path_configs[path_slug],
                        path_content
                    )


def generate_path_page(config, path_slug, path_config, nav_content):
    """Generate a beautiful learning path page"""
    
    docs_dir = Path(config['docs_dir'])
    path_dir = docs_dir / 'paths' / path_slug
    output_file = path_dir / 'index.md'
    
    # Extract modules and chapters from navigation
    modules = []
    first_chapter_link = None
    
    for item in nav_content:
        if isinstance(item, dict):
            for module_name, module_content in item.items():
                # Skip the index page itself
                if isinstance(module_content, str) and 'index.md' in module_content:
                    continue
                
                # Process module
                module = {
                    'name': module_name,
                    'chapters': []
                }
                
                if isinstance(module_content, str):
                    # Single chapter module
                    chapter_link = module_content.replace('paths/' + path_slug + '/', '')
                    module['chapters'].append({
                        'title': module_name,
                        'link': chapter_link
                    })
                    if not first_chapter_link:
                        first_chapter_link = chapter_link
                        
                elif isinstance(module_content, list):
                    # Multi-chapter module
                    for chapter_item in module_content:
                        if isinstance(chapter_item, dict):
                            for chapter_title, chapter_path in chapter_item.items():
                                chapter_link = chapter_path.replace('paths/' + path_slug + '/', '')
                                module['chapters'].append({
                                    'title': chapter_title,
                                    'link': chapter_link
                                })
                                if not first_chapter_link:
                                    first_chapter_link = chapter_link
                
                if module['chapters']:
                    modules.append(module)
    
    # Generate markdown content
    content = generate_markdown(path_config, modules, first_chapter_link)
    
    # Only write if content has changed (prevent infinite rebuild loop)
    output_file.parent.mkdir(parents=True, exist_ok=True)
    
    should_write = True
    if output_file.exists():
        with open(output_file, 'r', encoding='utf-8') as f:
            existing_content = f.read()
        if existing_content == content:
            should_write = False
    
    if should_write:
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Generated: {output_file}")
    else:
        print(f"✓ Unchanged: {output_file}")


def generate_markdown(config, modules, first_chapter_link):
    """Generate beautiful markdown content matching homepage design"""
    
    md = f"""---
title: {config['title']}
description: {config['subtitle']}
---

<style>
/* Path Page Styles - Matching Homepage Design Philosophy */
.md-content__inner {{
    max-width: 900px;
    margin: 0 auto;
}}

.path-hero {{
    padding: 4rem 0 3rem;
    text-align: center;
    border-bottom: 1px solid #f1f5f9;
    margin-bottom: 3rem;
}}

.path-icon {{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: linear-gradient(135deg, {config['gradient_start']} 0%, {config['gradient_end']} 100%);
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}}

.path-icon .material-symbols-outlined {{
    font-size: 2rem;
    color: #ffffff;
    font-weight: 400;
}}

.path-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.75rem 0;
    letter-spacing: -0.025em;
}}

.path-subtitle {{
    font-size: 1.125rem;
    color: #64748b;
    margin: 0 0 2rem 0;
    font-weight: 400;
}}

.path-description {{
    font-size: 1rem;
    color: #475569;
    line-height: 1.7;
    max-width: 700px;
    margin: 0 auto;
}}

.path-meta {{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 3rem 0;
}}

.meta-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: left;
}}

.meta-card h3 {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    margin: 0 0 1rem 0;
}}

.meta-card ul {{
    list-style: none;
    padding: 0;
    margin: 0;
}}

.meta-card li {{
    font-size: 0.9375rem;
    color: #475569;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.5;
}}

.meta-card li::before {{
    content: '';
    position: absolute;
    left: 0;
    top: 0.875rem;
    width: 6px;
    height: 6px;
    background: {config['color']};
    border-radius: 50%;
}}

.modules-section {{
    margin: 3rem 0;
}}

.section-header {{
    margin-bottom: 2rem;
}}

.section-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.025em;
}}

.section-description {{
    font-size: 1rem;
    color: #64748b;
    margin: 0;
}}

.module-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.75rem;
    margin-bottom: 1.5rem;
    transition: all 0.2s ease;
}}

.module-card:hover {{
    border-color: {config['color']};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}}

.module-header {{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.25rem;
}}

.module-number {{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, {config['gradient_start']} 0%, {config['gradient_end']} 100%);
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    flex-shrink: 0;
}}

.module-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
}}

.chapter-list {{
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}}

.chapter-link {{
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
}}

.chapter-link:hover {{
    background: {config['color']}10;
    border-color: {config['color']};
    color: #0f172a;
    transform: translateX(4px);
}}

.chapter-link .material-symbols-outlined {{
    font-size: 1.25rem;
    color: {config['color']};
}}

.module-card.coming-soon {{
    background: #f9fafb;
    border-style: dashed;
    border-color: #d1d5db;
    opacity: 0.7;
}}

.module-card.coming-soon .module-number {{
    background: #9ca3af;
}}

.module-card.coming-soon .module-title {{
    color: #6b7280;
}}

.coming-soon-badge {{
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}}

.cta-section {{
    text-align: center;
    padding: 3rem 0;
    margin-top: 3rem;
    border-top: 1px solid #f1f5f9;
}}

.cta-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 1.5rem 0;
}}

.btn-start {{
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, {config['gradient_start']} 0%, {config['gradient_end']} 100%);
    color: #ffffff;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}}

.btn-start:hover {{
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    color: #ffffff;
}}

.btn-start .material-symbols-outlined {{
    font-size: 1.25rem;
}}

.stay-updated-section {{
    margin-top: 4rem;
    padding: 2rem;
    background: linear-gradient(135deg, {config['color']}08 0%, {config['color']}03 100%);
    border: 1px solid {config['color']}20;
    border-radius: 1rem;
}}

.stay-updated-content {{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}}

.stay-updated-icon {{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: {config['color']};
    border-radius: 0.75rem;
    flex-shrink: 0;
}}

.stay-updated-icon .material-symbols-outlined {{
    font-size: 1.5rem;
    color: #ffffff;
}}

.stay-updated-text {{
    flex: 1;
    min-width: 200px;
}}

.stay-updated-text h3 {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 0.25rem 0;
}}

.stay-updated-text p {{
    font-size: 0.9375rem;
    color: #64748b;
    margin: 0;
    line-height: 1.5;
}}

.btn-github {{
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
}}

.btn-github:hover {{
    background: #1b1f23;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(36, 41, 46, 0.3);
    color: #ffffff;
}}

.btn-github svg {{
    flex-shrink: 0;
}}

.stay-updated-section.coming-soon-variant {{
    background: linear-gradient(135deg, #f1f5f908 0%, #e2e8f003 100%);
    border-color: #e2e8f0;
}}

.stay-updated-section.coming-soon-variant .stay-updated-icon {{
    background: #64748b;
}}

@media (max-width: 768px) {{
    .path-hero {{
        padding: 3rem 0 2rem;
    }}
    
    .path-title {{
        font-size: 2rem;
    }}
    
    .path-subtitle {{
        font-size: 1rem;
    }}
    
    .path-meta {{
        grid-template-columns: 1fr;
        gap: 1rem;
    }}
    
    .module-header {{
        flex-direction: column;
        align-items: flex-start;
    }}
    
    .stay-updated-content {{
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }}
    
    .btn-github {{
        width: 100%;
        justify-content: center;
    }}
}}
</style>

<div class="path-hero">
    <div class="path-icon">
        <span class="material-symbols-outlined">{config['icon']}</span>
    </div>
    <h1 class="path-title">{config['title']}</h1>
    <p class="path-subtitle">{config['subtitle']}</p>
    <p class="path-description">{config['description']}</p>
</div>

<div class="path-meta">
    <div class="meta-card">
        <h3>Prerequisites</h3>
        <ul>
"""
    
    for prereq in config['prerequisites']:
        md += f"            <li>{prereq}</li>\n"
    
    md += f"""        </ul>
    </div>
    
    <div class="meta-card">
        <h3>What You'll Learn</h3>
        <ul>
"""
    
    for outcome in config['outcomes']:
        md += f"            <li>{outcome}</li>\n"
    
    md += """        </ul>
    </div>
</div>

<div class="modules-section">
    <div class="section-header">
        <h2 class="section-title">Learning Modules</h2>
        <p class="section-description">Progressive curriculum designed to take you from fundamentals to mastery</p>
    </div>
    
"""
    
    # Add modules and chapters
    for idx, module in enumerate(modules, 1):
        has_chapters = len(module['chapters']) > 0
        
        if has_chapters:
            md += f"""    <div class="module-card">
        <div class="module-header">
            <div class="module-number">{idx}</div>
            <h3 class="module-title">{module['name']}</h3>
        </div>
        <div class="chapter-list">
"""
            
            for chapter in module['chapters']:
                md += f"""            <a href="{chapter['link']}" class="chapter-link">
                <span class="material-symbols-outlined">play_circle</span>
                <span>{chapter['title']}</span>
            </a>
"""
            
            md += """        </div>
    </div>
    
"""
        else:
            # Coming soon module
            md += f"""    <div class="module-card coming-soon">
        <div class="module-header">
            <div class="module-number">{idx}</div>
            <h3 class="module-title">{module['name']}</h3>
        </div>
        <span class="coming-soon-badge">Coming Soon</span>
    </div>
    
"""
    
    # Add call to action
    if first_chapter_link:
        md += f"""</div>

<div class="cta-section">
    <h2 class="cta-title">Ready to Begin?</h2>
    <a href="{first_chapter_link}" class="btn-start">
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
"""
    else:
        md += """</div>

<div class="stay-updated-section coming-soon-variant">
    <div class="stay-updated-content">
        <div class="stay-updated-icon">
            <span class="material-symbols-outlined">schedule</span>
        </div>
        <div class="stay-updated-text">
            <h3>Coming Soon</h3>
            <p>This learning path is under development. Follow our GitHub to get notified when modules are released</p>
        </div>
        <a href="https://github.com/madeforai/madeforai" target="_blank" rel="noopener" class="btn-github">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Follow on GitHub</span>
        </a>
    </div>
</div>
"""
    
    return md
