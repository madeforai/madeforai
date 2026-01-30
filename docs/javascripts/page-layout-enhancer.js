/**
 * Page Layout Enhancer for MadeForAI - OPTIMIZED
 * Hide sidebar for specific pages
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
    
    const NO_SIDEBAR_PAGES = ['/community/', '/about/', '/contributing/'];
    
    function shouldHideSidebar() {
        const currentPath = window.location.pathname;
        return NO_SIDEBAR_PAGES.some(page => currentPath.includes(page));
    }
    
    function adjustLayout() {
        if (!shouldHideSidebar()) return;
        
        requestAnimationFrame(() => {
            const primarySidebar = document.querySelector('.md-sidebar--primary');
            const secondarySidebar = document.querySelector('.md-sidebar--secondary');
            const content = document.querySelector('.md-content');
            const contentInner = document.querySelector('.md-content__inner');
            const mainContainer = document.querySelector('.md-main__inner');
            
            if (primarySidebar) primarySidebar.style.display = 'none';
            if (secondarySidebar) secondarySidebar.style.display = 'none';
            
            if (content) {
                content.style.marginLeft = '0';
                content.style.maxWidth = '100%';
            }
            
            if (contentInner) {
                contentInner.style.maxWidth = '1200px';
                contentInner.style.margin = '0 auto';
                const padding = window.innerWidth <= 768 ? '1.5rem' : '3rem';
                contentInner.style.paddingLeft = padding;
                contentInner.style.paddingRight = padding;
            }
            
            if (mainContainer) {
                mainContainer.style.marginLeft = '0';
                mainContainer.style.marginRight = '0';
            }
        });
    }
    
    // Initialize
    function init() {
        adjustLayout();
        
        // Handle navigation changes
        if (typeof app !== 'undefined' && app.document$) {
            app.document$.subscribe(() => requestAnimationFrame(adjustLayout));
        }
        
        // Handle resize
        window.addEventListener('resize', debounce(adjustLayout, 150), { passive: true });
    }
    
    // Run
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
