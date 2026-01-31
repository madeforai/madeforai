"""
Path Generator Hook for MkDocs
Automatically generates beautiful learning path pages with module and chapter listings
"""

import os
import re
from pathlib import Path
import logging

logger = logging.getLogger('mkdocs.hooks.path_generator')

# Path configurations with colors and icons
PATH_CONFIGS = {
    'understanding-ai': {
        'title': 'Understanding AI',
        'subtitle': 'Build a solid foundation in AI fundamentals',
        'description': 'Master the core concepts of artificial intelligence, machine learning, and deep learning. Build your first models and understand how modern AI systems work through hands-on interactive lessons.',
        'icon': 'school',
        'color': '#3b82f6',
        'color_secondary': '#2563eb',
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
        'color_secondary': '#7c3aed',
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
        'color_secondary': '#db2777',
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
        'color_secondary': '#d97706',
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
        'color_secondary': '#059669',
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


def extract_title_from_notebook(notebook_path):
    """Extract title from Jupyter notebook"""
    try:
        import json
        with open(notebook_path, 'r', encoding='utf-8') as f:
            nb = json.load(f)
            # Look for first markdown cell with heading
            for cell in nb.get('cells', []):
                if cell.get('cell_type') == 'markdown':
                    source = ''.join(cell.get('source', []))
                    # Find first heading
                    match = re.search(r'^#\s+(.+)$', source, re.MULTILINE)
                    if match:
                        title = match.group(1).strip()
                        # Clean up title - remove "Chapter X:" prefix
                        title = re.sub(r'^Chapter\s+\d+:\s*', '', title, flags=re.IGNORECASE)
                        return title
    except Exception as e:
        logger.warning(f"Could not extract title from {notebook_path}: {e}")
    return None


def parse_chapter_number(filename):
    """Parse chapter number from filename like '1.1-title.ipynb' or '2.3-title.ipynb'"""
    match = re.match(r'(\d+)\.(\d+)', filename)
    if match:
        module_num = int(match.group(1))
        chapter_num = int(match.group(2))
        return module_num, chapter_num, f"{module_num}.{chapter_num}"
    return None, None, None


def scan_path_content(docs_path, path_slug):
    """Scan a learning path directory for modules and chapters"""
    path_dir = Path(docs_path) / 'paths' / path_slug
    
    if not path_dir.exists():
        return {}
    
    modules = {}
    
    # Scan for notebooks directly in path directory (flat structure)
    for item in path_dir.iterdir():
        if item.is_file() and item.suffix == '.ipynb' and not item.name.startswith('.'):
            module_num, chapter_num, chapter_id = parse_chapter_number(item.name)
            
            if module_num is not None:
                # Extract title
                title = extract_title_from_notebook(item)
                if not title:
                    # Fallback: use filename
                    title = item.stem.split('-', 1)[1].replace('-', ' ').title() if '-' in item.stem else item.stem
                
                # Add to modules
                if module_num not in modules:
                    modules[module_num] = {
                        'title': f'{module_num}',
                        'chapters': []
                    }
                
                modules[module_num]['chapters'].append({
                    'id': chapter_id,
                    'number': chapter_num,
                    'title': title,
                    'file': item.stem  # Remove .ipynb extension
                })
    
    # Scan for module directories (nested structure like module-1-foundations)
    for item in path_dir.iterdir():
        if item.is_dir() and not item.name.startswith('.'):
            # Try to extract module number from directory name
            dir_match = re.match(r'module-(\d+)', item.name)
            if dir_match:
                module_num = int(dir_match.group(1))
                
                # Extract module title from directory name - just number and name
                if len(item.name.split('-')) > 2:
                    module_title_part = item.name.split('-', 2)[2]
                    module_title = f"{module_num} - {module_title_part.replace('-', ' ').title()}"
                else:
                    module_title = f'{module_num}'
                
                if module_num not in modules:
                    modules[module_num] = {
                        'title': module_title,
                        'chapters': []
                    }
                else:
                    modules[module_num]['title'] = module_title
                
                # Scan for chapters in module directory
                for chapter_file in item.iterdir():
                    if chapter_file.is_file() and chapter_file.suffix == '.ipynb' and not chapter_file.name.startswith('.'):
                        mod_num, chap_num, chapter_id = parse_chapter_number(chapter_file.name)
                        
                        if mod_num == module_num and chap_num is not None:
                            # Extract title
                            title = extract_title_from_notebook(chapter_file)
                            if not title:
                                title = chapter_file.stem.split('-', 1)[1].replace('-', ' ').title() if '-' in chapter_file.stem else chapter_file.stem
                            
                            # Relative path from path directory - remove .ipynb extension
                            rel_path = f"{item.name}/{chapter_file.stem}"
                            
                            modules[module_num]['chapters'].append({
                                'id': chapter_id,
                                'number': chap_num,
                                'title': title,
                                'file': rel_path
                            })
    
    # Sort chapters within each module
    for module in modules.values():
        module['chapters'].sort(key=lambda x: x['number'])
    
    return modules


def generate_module_html(module_num, module_data, config, has_content=True):
    """Generate HTML for a single module card"""
    color = config['color']
    chapters_html = ''
    
    if has_content and module_data['chapters']:
        chapters_html = '<div class="chapter-list">'
        for chapter in module_data['chapters']:
            chapters_html += f'''
            <a href="{chapter['file']}" class="chapter-link">
                <span class="material-symbols-outlined">play_circle</span>
                <span>{chapter['title']}</span>
            </a>'''
        chapters_html += '</div>'
    
    card_class = 'module-card' if has_content else 'module-card coming-soon'
    
    return f'''
    <div class="{card_class}">
        <div class="module-header">
            <div class="module-number">{module_num}</div>
            <h3 class="module-title">{module_data['title']}</h3>
            {'' if has_content else '<span class="coming-soon-badge">Coming Soon</span>'}
        </div>
        {chapters_html}
    </div>'''


def generate_path_page(path_slug, config, modules):
    """Generate complete path page HTML"""
    has_modules = len(modules) > 0
    
    # Generate modules HTML
    modules_html = ''
    if has_modules:
        for module_num in sorted(modules.keys()):
            modules_html += generate_module_html(module_num, modules[module_num], config, True)
    else:
        # Show coming soon message
        modules_html = '''
        <div class="coming-soon-message">
            <span class="material-symbols-outlined">schedule</span>
            <h3>Coming Soon</h3>
            <p>This learning path is under development. Check back soon for updates!</p>
        </div>'''
    
    return f'''---
title: {config['title']}
description: {config['subtitle']}
---

<style>
/* Vertical Stacked Path Page Layout */
.md-content__inner {{
    max-width: 900px;
    margin: 0 auto;
}}

.path-header {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 2rem;
    margin: 2rem 0;
    text-align: center;
}}

.path-icon {{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background: linear-gradient(135deg, {config['color']} 0%, {config['color_secondary']} 100%);
    border-radius: 0.75rem;
    margin-bottom: 1rem;
}}

.path-icon .material-symbols-outlined {{
    font-size: 1.75rem;
    color: #ffffff;
    font-weight: 400;
}}

.path-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0 0 0.5rem 0;
    letter-spacing: -0.025em;
}}

.path-subtitle {{
    font-size: 1rem;
    color: #64748b;
    margin: 0 0 1rem 0;
    font-weight: 600;
}}

.path-description {{
    font-size: 0.9375rem;
    color: #475569;
    line-height: 1.6;
    margin: 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}}

.modules-section {{
    margin: 2rem 0;
}}

.modules-header {{
    margin-bottom: 1.5rem;
}}

.modules-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    letter-spacing: -0.025em;
}}

.module-card {{
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.25rem;
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
    margin-bottom: 1rem;
}}

.module-number {{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, {config['color']} 0%, {config['color_secondary']} 100%);
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    flex-shrink: 0;
}}

.module-title {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
}}

.chapter-list {{
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
}}

.chapter-link {{
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
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
    font-size: 1.125rem;
    color: {config['color']};
    flex-shrink: 0;
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

.coming-soon-message {{
    text-align: center;
    padding: 3rem 2rem;
    background: #f9fafb;
    border: 2px dashed #e2e8f0;
    border-radius: 1rem;
}}

.coming-soon-message .material-symbols-outlined {{
    font-size: 3rem;
    color: #9ca3af;
    margin-bottom: 1rem;
}}

.coming-soon-message h3 {{
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #6b7280;
    margin: 0 0 0.5rem 0;
}}

.coming-soon-message p {{
    font-size: 0.9375rem;
    color: #9ca3af;
    margin: 0;
}}

/* Hide feedback widget */
.md-feedback {{
    display: none !important;
}}
</style>

<div class="path-header">
    <div class="path-icon">
        <span class="material-symbols-outlined">{config['icon']}</span>
    </div>
    <h1 class="path-title">{config['title']}</h1>
    <p class="path-subtitle">{config['subtitle']}</p>
    <p class="path-description">{config['description']}</p>
</div>

<div class="modules-section">
    <div class="modules-header">
        <h2 class="modules-title">Learning Modules</h2>
    </div>
    
    {modules_html}
</div>
'''


def on_pre_build(config):
    """Hook that runs before the build starts"""
    docs_dir = config['docs_dir']
    
    logger.info("Generating learning path pages...")
    
    for path_slug, path_config in PATH_CONFIGS.items():
        # Scan for modules and chapters
        modules = scan_path_content(docs_dir, path_slug)
        
        # Generate page content
        page_content = generate_path_page(path_slug, path_config, modules)
        
        # Write to index.md
        index_path = Path(docs_dir) / 'paths' / path_slug / 'index.md'
        if index_path.parent.exists():
            with open(index_path, 'w', encoding='utf-8') as f:
                f.write(page_content)
            logger.info(f"Generated {path_slug}/index.md with {len(modules)} modules")
