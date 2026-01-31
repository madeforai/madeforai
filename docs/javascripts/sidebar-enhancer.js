/**
 * Sidebar Enhancer for MadeForAI - OPTIMIZED
 * Clean chapter titles, hide duplicates, and fix positioning
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
    
    // Fix sidebar positioning on initial load
    function fixSidebarPosition() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        const header = document.querySelector('.md-header');
        const tabs = document.querySelector('.md-tabs');
        
        if (!sidebar || !header) return;
        
        // Calculate proper top position
        const headerHeight = header.offsetHeight || 44; // 2.75rem = 44px
        const tabsHeight = tabs ? (tabs.offsetHeight || 44) : 0;
        const totalNavHeight = headerHeight + tabsHeight;
        
        // Force correct positioning
        sidebar.style.top = `${totalNavHeight}px`;
        sidebar.style.height = `calc(100vh - ${totalNavHeight}px)`;
        sidebar.style.maxHeight = `calc(100vh - ${totalNavHeight}px)`;
        
        // Ensure scrollwrap is properly sized
        const scrollwrap = sidebar.querySelector('.md-sidebar__scrollwrap');
        if (scrollwrap) {
            scrollwrap.style.height = '100%';
            scrollwrap.style.maxHeight = '100%';
        }
    }
    
    // Update sidebar position on scroll
    function updateSidebarOnScroll() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        const header = document.querySelector('.md-header');
        
        if (!sidebar || !header) return;
        
        const isScrolled = header.classList.contains('md-header--shadow');
        
        if (isScrolled) {
            // Single row navbar (compact)
            const compactHeight = header.offsetHeight || 40; // Compact height
            sidebar.style.top = `${compactHeight}px`;
            sidebar.style.height = `calc(100vh - ${compactHeight}px)`;
            sidebar.style.maxHeight = `calc(100vh - ${compactHeight}px)`;
        } else {
            // Two row navbar (default)
            fixSidebarPosition();
        }
    }
    
    function cleanupSidebar() {
        requestAnimationFrame(() => {
            cleanupChapterTitles();
            hideDuplicateTitles();
            fixSidebarPosition();
        });
    }
    
    // Initialize
    let sidebarObserver = null;
    let scrollHandler = null;
    
    function init() {
        cleanupSidebar();
        
        // Disconnect old observer
        if (sidebarObserver) {
            sidebarObserver.disconnect();
        }
        
        // Remove old scroll handler
        if (scrollHandler) {
            window.removeEventListener('scroll', scrollHandler);
        }
        
        // Watch for changes
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (sidebar) {
            sidebarObserver = new MutationObserver(debounce(cleanupSidebar, 150));
            sidebarObserver.observe(sidebar, { childList: true, subtree: true });
        }
        
        // Watch for scroll to update positioning
        scrollHandler = debounce(updateSidebarOnScroll, 50);
        window.addEventListener('scroll', scrollHandler, { passive: true });
        
        // Watch for header class changes (shadow state)
        const header = document.querySelector('.md-header');
        if (header) {
            const headerObserver = new MutationObserver(debounce(updateSidebarOnScroll, 50));
            headerObserver.observe(header, { attributes: true, attributeFilter: ['class'] });
        }
        
        // Fix positioning after a short delay (for dynamic content)
        setTimeout(fixSidebarPosition, 100);
        setTimeout(fixSidebarPosition, 300);
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
    
    // Handle window resize
    window.addEventListener('resize', debounce(fixSidebarPosition, 150));
})();

