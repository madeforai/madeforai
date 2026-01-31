/**
 * Sidebar Enhancer - Dynamic & Beautiful
 * Auto-updates sidebar, adds visual enhancements, and improves navigation
 */

(function () {
    'use strict';

    // Debounce utility
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
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

    function enhanceSidebarVisuals() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (!sidebar) return;

        // Add smooth scrolling to active item
        const activeItem = sidebar.querySelector('.md-nav__item--active');
        if (activeItem) {
            setTimeout(() => {
                activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }

        // Enhance navigation items with better styling
        const navItems = sidebar.querySelectorAll('.md-nav__item');
        navItems.forEach(item => {
            const link = item.querySelector('.md-nav__link');
            if (link && !link.dataset.enhanced) {
                link.dataset.enhanced = 'true';

                // Add smooth transitions
                link.style.transition = 'all 0.2s ease';

                // Add hover effects
                link.addEventListener('mouseenter', function () {
                    this.style.transform = 'translateX(4px)';
                });

                link.addEventListener('mouseleave', function () {
                    this.style.transform = 'translateX(0)';
                });
            }
        });

        // Enhance collapse/expand functionality
        const toggles = sidebar.querySelectorAll('.md-nav__toggle');
        toggles.forEach(toggle => {
            if (!toggle.dataset.enhanced) {
                toggle.dataset.enhanced = 'true';
                toggle.addEventListener('change', function () {
                    const label = this.nextElementSibling;
                    if (label) {
                        if (this.checked) {
                            label.style.fontWeight = '700';
                            label.style.color = '#0f172a';
                        } else {
                            label.style.fontWeight = '600';
                            label.style.color = '#475569';
                        }
                    }
                });
            }
        });
    }

    function addModuleIcons() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (!sidebar) return;

        // Add icons to learning path sections
        const pathIcons = {
            'Understanding AI': '🎓',
            'Engineering AI': '⚙️',
            'Researching AI': '🔬',
            'Architecting AI': '🏗️',
            'Business AI': '💼'
        };

        // Add icons to module sections
        const moduleIcons = {
            'Module 1': '1️⃣',
            'Module 2': '2️⃣',
            'Module 3': '3️⃣',
            'Module 4': '4️⃣',
            'Module 5': '5️⃣'
        };

        const navLinks = sidebar.querySelectorAll('.md-nav__link');
        navLinks.forEach(link => {
            if (link.querySelector('.sidebar-icon')) return; // Already has icon

            const text = link.textContent.trim();

            // Add path icons
            Object.keys(pathIcons).forEach(pathName => {
                if (text === pathName) {
                    const icon = document.createElement('span');
                    icon.className = 'sidebar-icon';
                    icon.textContent = pathIcons[pathName] + ' ';
                    icon.style.marginRight = '0.5rem';
                    link.prepend(icon);
                }
            });

            // Add module icons
            Object.keys(moduleIcons).forEach(moduleName => {
                if (text.startsWith(moduleName)) {
                    const icon = document.createElement('span');
                    icon.className = 'sidebar-icon';
                    icon.textContent = moduleIcons[moduleName] + ' ';
                    icon.style.marginRight = '0.5rem';
                    link.prepend(icon);
                }
            });
        });
    }

    function improveChapterNumbering() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (!sidebar) return;

        // Style chapter numbers (e.g., "1.1 - Title")
        const chapterLinks = sidebar.querySelectorAll('.md-nav__link');
        chapterLinks.forEach(link => {
            if (link.querySelector('.chapter-number')) return; // Already styled

            const text = link.textContent.trim();

            // Match chapter numbers like "1.1 - Title"
            if (/^\d+\.\d+\s*-/.test(text)) {
                const parts = text.split('-');
                if (parts.length >= 2) {
                    const number = parts[0].trim();
                    const title = parts.slice(1).join('-').trim();

                    link.innerHTML = `
                        <span class="chapter-number" style="
                            display: inline-block;
                            min-width: 2.5rem;
                            font-weight: 700;
                            color: #3b82f6;
                            margin-right: 0.5rem;
                        ">${number}</span>
                        <span class="chapter-title">${title}</span>
                    `;
                }
            }
        });
    }

    function addProgressIndicator() {
        const sidebar = document.querySelector('.md-sidebar--primary');
        if (!sidebar) return;

        // Remove existing progress bar
        const existingProgress = sidebar.querySelector('.sidebar-progress');
        if (existingProgress) {
            existingProgress.remove();
        }

        // Find all chapter links in current path
        const currentPath = window.location.pathname;
        const pathMatch = currentPath.match(/paths\/([^\/]+)/);

        if (!pathMatch) return;

        const navItems = sidebar.querySelectorAll('.md-nav__item');
        const chapterLinks = Array.from(navItems).filter(item => {
            const link = item.querySelector('.md-nav__link');
            return link && /^\d+\.\d+\s*-/.test(link.textContent.trim());
        });

        if (chapterLinks.length === 0) return;

        // Find current chapter index
        let currentIndex = -1;
        chapterLinks.forEach((item, index) => {
            if (item.classList.contains('md-nav__item--active')) {
                currentIndex = index;
            }
        });

        if (currentIndex === -1) return;

        // Calculate progress
        const progress = ((currentIndex + 1) / chapterLinks.length) * 100;

        // Add progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'sidebar-progress';
        progressBar.innerHTML = `
            <div style="
                padding: 1rem;
                background: #f8fafc;
                border-radius: 0.5rem;
                margin: 1rem 0.6rem;
                border: 1px solid #e2e8f0;
            ">
                <div style="
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: #64748b;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                ">Progress</div>
                <div style="
                    background: #e2e8f0;
                    height: 6px;
                    border-radius: 3px;
                    overflow: hidden;
                ">
                    <div style="
                        background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
                        height: 100%;
                        width: ${progress}%;
                        transition: width 0.3s ease;
                    "></div>
                </div>
                <div style="
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: #0f172a;
                    margin-top: 0.5rem;
                ">${currentIndex + 1} of ${chapterLinks.length} chapters</div>
            </div>
        `;

        const nav = sidebar.querySelector('.md-nav');
        if (nav) {
            nav.insertBefore(progressBar, nav.firstChild);
        }
    }

    function cleanupSidebar() {
        requestAnimationFrame(() => {
            cleanupChapterTitles();
            hideDuplicateTitles();
            enhanceSidebarVisuals();
            // addModuleIcons(); // Removed redundant emoji injection
            improveChapterNumbering();
            addProgressIndicator();
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

        // Watch for changes - sidebar updates dynamically
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
