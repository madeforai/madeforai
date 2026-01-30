/**
 * Navbar Enhancer for MadeForAI - OPTIMIZED
 * Minimal, efficient navbar behavior
 */

(function() {
    'use strict';
    
    let isScrolled = false;
    const SCROLL_THRESHOLD = 50;
    
    // Throttle for performance
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Handle scroll - merge navbar into single row
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.md-header');
        
        if (!header) return;
        
        if (scrollTop > SCROLL_THRESHOLD && !isScrolled) {
            isScrolled = true;
            header.classList.add('md-header--shadow');
        } else if (scrollTop <= SCROLL_THRESHOLD && isScrolled) {
            isScrolled = false;
            header.classList.remove('md-header--shadow');
        }
    }
    
    // Update active tab from URL
    function updateActiveTab() {
        const currentPath = window.location.pathname;
        const tabs = document.querySelectorAll('.md-tabs__link');
        
        tabs.forEach(tab => {
            const tabHref = tab.getAttribute('href');
            if (tabHref && currentPath.includes(tabHref.replace(/\/$/, ''))) {
                tab.classList.add('md-tabs__link--active');
            } else {
                tab.classList.remove('md-tabs__link--active');
            }
        });
    }
    
    // Initialize
    function init() {
        requestAnimationFrame(() => {
            updateActiveTab();
            handleScroll();
            
            // Scroll listener with throttle
            window.addEventListener('scroll', throttle(handleScroll, 16), { passive: true });
        });
        
        // Handle instant navigation
        if (typeof app !== 'undefined' && app.document$) {
            app.document$.subscribe(() => {
                requestAnimationFrame(() => {
                    updateActiveTab();
                    handleScroll();
                });
            });
        }
    }
    
    // Run
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
