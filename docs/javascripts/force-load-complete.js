/**
 * Force Load Complete - OPTIMIZED
 * Ensures instant page loads without blocking
 */

(function() {
    'use strict';
    
    let hasRun = false;
    
    function forceLoadComplete() {
        if (hasRun) return;
        hasRun = true;
        
        // Remove all loading states instantly
        requestAnimationFrame(() => {
            document.querySelectorAll('[data-md-state="loading"]').forEach(el => {
                el.removeAttribute('data-md-state');
            });
            
            // Remove progress indicators
            document.querySelectorAll('.md-progress, [data-md-component="progress"]').forEach(el => {
                if (el && el.parentNode) el.remove();
            });
        });
    }
    
    // Run immediately
    forceLoadComplete();
    
    // Run once on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', forceLoadComplete, { once: true });
    }
    
    // Handle instant navigation
    if (typeof app !== 'undefined' && app.document$) {
        app.document$.subscribe(() => {
            hasRun = false;
            forceLoadComplete();
        });
    }
})();
