/**
 * Performance Optimizer - CRITICAL
 * Ensures instant navigation and prevents stuck states
 */

(function() {
    'use strict';
    
    // Prevent multiple initializations
    if (window.__performanceOptimizerLoaded) return;
    window.__performanceOptimizerLoaded = true;
    
    // Configuration
    const CONFIG = {
        MAX_NAVIGATION_TIME: 1000, // 1 second max for navigation
        PREFETCH_ENABLED: true,
        CACHE_ENABLED: true
    };
    
    // Navigation state tracker
    let navigationTimer = null;
    let isNavigating = false;
    
    /**
     * Force complete any stuck navigation
     */
    function forceCompleteNavigation() {
        if (!isNavigating) return;
        
        isNavigating = false;
        clearTimeout(navigationTimer);
        
        requestAnimationFrame(() => {
            // Remove all loading indicators
            document.querySelectorAll('[data-md-state="loading"]').forEach(el => {
                el.removeAttribute('data-md-state');
            });
            
            // Remove progress bars
            document.querySelectorAll('.md-progress').forEach(el => {
                if (el && el.parentNode) el.remove();
            });
            
            // Ensure content is visible
            const content = document.querySelector('.md-content');
            if (content) {
                content.style.opacity = '1';
                content.style.visibility = 'visible';
            }
        });
    }
    
    /**
     * Start navigation tracking
     */
    function startNavigation() {
        isNavigating = true;
        
        // Set timeout to force completion
        clearTimeout(navigationTimer);
        navigationTimer = setTimeout(() => {
            console.warn('Navigation timeout - forcing completion');
            forceCompleteNavigation();
        }, CONFIG.MAX_NAVIGATION_TIME);
    }
    
    /**
     * Complete navigation
     */
    function completeNavigation() {
        clearTimeout(navigationTimer);
        isNavigating = false;
    }
    
    /**
     * Optimize instant navigation
     */
    function optimizeInstantNavigation() {
        if (typeof app === 'undefined' || !app.document$) return;
        
        // Subscribe to navigation events
        app.document$.subscribe(() => {
            startNavigation();
            
            // Complete after a short delay
            requestAnimationFrame(() => {
                setTimeout(completeNavigation, 100);
            });
        });
    }
    
    /**
     * Prevent XHR from hanging
     */
    function optimizeXHR() {
        const originalOpen = XMLHttpRequest.prototype.open;
        const originalSend = XMLHttpRequest.prototype.send;
        
        XMLHttpRequest.prototype.open = function(method, url, ...args) {
            this._url = url;
            this._startTime = Date.now();
            return originalOpen.call(this, method, url, ...args);
        };
        
        XMLHttpRequest.prototype.send = function(...args) {
            const xhr = this;
            
            // Set timeout for all XHR requests
            const timeout = setTimeout(() => {
                if (xhr.readyState !== 4) {
                    console.warn('XHR timeout:', xhr._url);
                    xhr.abort();
                    forceCompleteNavigation();
                }
            }, CONFIG.MAX_NAVIGATION_TIME);
            
            // Clear timeout on completion
            const originalOnReadyStateChange = xhr.onreadystatechange;
            xhr.onreadystatechange = function(...args) {
                if (xhr.readyState === 4) {
                    clearTimeout(timeout);
                }
                if (originalOnReadyStateChange) {
                    return originalOnReadyStateChange.apply(this, args);
                }
            };
            
            return originalSend.call(this, ...args);
        };
    }
    
    /**
     * Optimize fetch requests
     */
    function optimizeFetch() {
        const originalFetch = window.fetch;
        
        window.fetch = function(url, options = {}) {
            // Add timeout to all fetch requests
            const controller = new AbortController();
            const timeoutId = setTimeout(() => {
                console.warn('Fetch timeout:', url);
                controller.abort();
                forceCompleteNavigation();
            }, CONFIG.MAX_NAVIGATION_TIME);
            
            options.signal = controller.signal;
            
            return originalFetch(url, options)
                .finally(() => clearTimeout(timeoutId));
        };
    }
    
    /**
     * Initialize all optimizations
     */
    function init() {
        // Force complete any initial loading state
        forceCompleteNavigation();
        
        // Optimize instant navigation
        optimizeInstantNavigation();
        
        // Optimize network requests
        optimizeXHR();
        optimizeFetch();
        
        // Handle page visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && isNavigating) {
                forceCompleteNavigation();
            }
        }, { passive: true });
        
        // Handle beforeunload
        window.addEventListener('beforeunload', () => {
            forceCompleteNavigation();
        }, { passive: true });
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
