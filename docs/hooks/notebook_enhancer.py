"""
MkDocs hook to enhance notebook rendering - Clean & Minimal
"""

import re
from pathlib import Path


def on_page_content(html, page, config, files):
    """
    Hook to modify the HTML content of notebook pages
    """
    # Only process notebook pages
    if not page.file.src_path.endswith('.ipynb'):
        return html
    
    # Check if this is a notebook page
    if 'jp-Notebook' not in html:
        return html
    
    # Extract Title (H1)
    title_match = re.search(r'<h1.*?>(.*?)</h1>', html, re.DOTALL)
    title = title_match.group(1) if title_match else "Documentation"
    
    # Remove "Chapter X:" prefix from title
    title = re.sub(r'^Chapter\s+\d+:\s*', '', title, flags=re.IGNORECASE)
    
    # Remove original H1
    html = re.sub(r'<h1.*?>.*?</h1>', '', html, count=1, flags=re.DOTALL)
    
    # Remove the Colab badge
    html = re.sub(r'<p>\s*<a[^>]*colab[^>]*>\s*<img[^>]*colab-badge[^>]*>\s*</a>\s*</p>', '', html, flags=re.IGNORECASE)
    
    # Remove first HR
    html = re.sub(r'<hr>\s*', '', html, count=1)
    
    # Colab link
    notebook_path = page.file.src_path
    colab_url = f"https://colab.research.google.com/github/madeforai/madeforai/blob/main/docs/{notebook_path}"

    # Minimal header
    header_html = f"""
    <div class="nb-header">
        <h1>{title}</h1>
        <a href="{colab_url}" target="_blank" rel="noopener noreferrer" class="nb-colab-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
                <path d="M8.4 7.2h7.2v1.2H8.4zm0 2.4h7.2v1.2H8.4zm0 2.4h7.2v1.2H8.4zm0 2.4h4.8v1.2H8.4z"/>
            </svg>
            Open in Colab
        </a>
    </div>
    """

    return header_html + html


def on_post_page(output, page, config):
    """
    Minimal post-processing
    """
    if not page.file.src_path.endswith('.ipynb'):
        return output
    
    return output
