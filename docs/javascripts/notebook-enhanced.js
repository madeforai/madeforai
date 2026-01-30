/**
 * Minimal Notebook Enhancements for MadeForAI - OPTIMIZED
 */

(function() {
    'use strict';
    
    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Sidebar toggle functionality
     */
    function initSidebarToggle() {
        // Only add toggle on desktop
        if (window.innerWidth <= 1220) return;
        
        // Check if toggle already exists
        if (document.querySelector('.sidebar-toggle')) return;
        
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'sidebar-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle sidebar');
        toggleBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        `;
        
        document.body.appendChild(toggleBtn);
        
        // Check localStorage for saved state
        const sidebarHidden = localStorage.getItem('sidebarHidden') === 'true';
        if (sidebarHidden) {
            document.body.classList.add('sidebar-hidden');
        }
        
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('sidebar-hidden');
            const isHidden = document.body.classList.contains('sidebar-hidden');
            localStorage.setItem('sidebarHidden', isHidden);
        });
    }
    
    // Debounced resize handler
    const handleResize = debounce(function() {
        const existingToggle = document.querySelector('.sidebar-toggle');
        if (window.innerWidth > 1220 && !existingToggle) {
            initSidebarToggle();
        } else if (window.innerWidth <= 1220 && existingToggle) {
            existingToggle.remove();
            document.body.classList.remove('sidebar-hidden');
        }
    }, 250);
    
    // Initialize
    function init() {
        initSidebarToggle();
        window.addEventListener('resize', handleResize, { passive: true });
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
