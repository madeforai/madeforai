/**
 * Disable Progress Indicator - AGGRESSIVE FIX
 * Removes the spinning loader from browser tab
 */

(function() {
    'use strict';
    
    // Remove progress indicator immediately and aggressively
    function removeProgressIndicator() {
        // Remove all progress elements
        const selectors = [
            '.md-progress',
            '[data-md-component="progress"]',
            '.md-header__option',
            '.md-progress__bar',
            '[data-md-state="loading"]'
        ];
        
        selectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (el) {
                    el.remove();
                    el.style.display = 'none';
                }
            });
        });
        
        // Remove loading state from all elements
        document.querySelectorAll('[data-md-state="loading"]').forEach(el => {
            el.removeAttribute('data-md-state');
        });
        
        // Remove from body and html
        document.body.removeAttribute('data-md-state');
        document.documentElement.removeAttribute('data-md-state');
    }
    
    // Run immediately
    removeProgressIndicator();
    
    // Run after DOM loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeProgressIndicator);
    }
    
    // Run after window loads
    window.addEventListener('load', removeProgressIndicator);
    
    // Watch for instant navigation
    if (typeof app !== 'undefined' && app.document$) {
        app.document$.subscribe(() => {
            removeProgressIndicator();
        });
    }
    
    // Aggressive observer - remove any progress elements immediately
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // Element node
                    // Check if it's a progress element
                    if (node.matches && (
                        node.matches('.md-progress') ||
                        node.matches('[data-md-component="progress"]') ||
                        node.matches('.md-header__option')
                    )) {
                        node.remove();
                    }
                    
                    // Check children
                    if (node.querySelectorAll) {
                        node.querySelectorAll('.md-progress, [data-md-component="progress"], .md-header__option')
                            .forEach(el => el.remove());
                    }
                }
            });
        });
        
        // Always remove loading state
        removeProgressIndicator();
    });
    
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-md-state']
    });
    
    // Override fetch to prevent progress indicator
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        const promise = originalFetch.apply(this, args);
        
        // Remove progress immediately
        removeProgressIndicator();
        
        // Remove after fetch completes
        promise.then(() => {
            setTimeout(removeProgressIndicator, 0);
            setTimeout(removeProgressIndicator, 100);
            setTimeout(removeProgressIndicator, 500);
        }).catch(() => {
            setTimeout(removeProgressIndicator, 0);
        });
        
        return promise;
    };
    
    // Periodic cleanup (every 500ms for first 10 seconds)
    let cleanupCount = 0;
    const cleanupInterval = setInterval(() => {
        removeProgressIndicator();
        cleanupCount++;
        if (cleanupCount > 20) {
            clearInterval(cleanupInterval);
        }
    }, 500);
})();
