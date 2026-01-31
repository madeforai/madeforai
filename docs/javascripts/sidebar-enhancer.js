/**
 * Sidebar Enhancer for MadeForAI - OPTIMIZED
 * Clean chapter titles, hide duplicates
 */

(function() {
    'use strict';
    
    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
    
    function cleanupChapterTitles() {
        const chapterLinks = document.querySelectorAll('.md-nav__item--nested .md-nav__item .md-nav__link');
        
        chapterLinks.forEach(link => {
            const text = link.textContent.trim();
            const cleanedText = text
                .replace(/^Chapter\s+\d+:\s*/i, '')
                .replace(/^Chapter\s+\d+\s*-\s*/i, '')
                .replace(/^Chapter\s+\d+\s+/i, '');
            
            if (cleanedText !== text && cleanedText.length > 0) {
                link.textContent = cleanedText;
            }
        });
    }
    
    function hideDuplicateTitles() {
        const navSections = document.querySelectorAll('.md-nav--primary > .md-nav__list > .md-nav__item');
        
        navSections.forEach(section => {
            const sectionLink = section.querySelector(':scope > .md-nav__link');
            if (!sectionLink) return;
            
            const sectionTitle = sectionLink.textContent.trim();
            const nestedNav = section.querySelector(':scope > .md-nav');
            if (!nestedNav) return;
            
            const firstNestedItem = nestedNav.querySelector(':scope > .md-nav__list > .md-nav__item');
            if (!firstNestedItem) return;
            
            const firstNestedLink = firstNestedItem.querySelector(':scope > .md-nav__link');
            if (!firstNestedLink) return;
            
            if (sectionTitle === firstNestedLink.textContent.trim()) {
                firstNestedItem.style.display = 'none';
            }
        });
    }
    
    function cleanupSidebar() {
        requestAnimationFrame(() => {
            cleanupChapterTitles();
            hideDuplicateTitles();
        });
    }
    
    // Initialize
    let sidebarObserver = null;
    
    function init() {
        cleanupSidebar();
        
        // Disconnect old observer
        if (sidebarObserver) {
            sidebarObserver.disconnect();
        }
        
        // Watch for changes
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (sidebar) {
            sidebarObserver = new MutationObserver(debounce(cleanupSidebar, 150));
            sidebarObserver.observe(sidebar, { childList: true, subtree: true });
        }
    }
    
    // Run
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
    
    // Handle instant navigation
    if (typeof app !== 'undefined' && app.document$) {
        app.document$.subscribe(() => {
            requestAnimationFrame(init);
        });
    }
})();

