/* ============================================
   MADEFORAI - ADVANCED JAVASCRIPT
   2026 Interactive Features & Animations
   ============================================ */

(function () {
    'use strict';

    /* ============================================
       1. SCROLL ANIMATIONS
       ============================================ */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    function initScrollAnimations() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));
    }

    /* ============================================
       2. PROGRESS TRACKING
       ============================================ */
    function trackProgress() {
        const STORAGE_KEY = 'madeforai-progress';

        function saveProgress(lessonId) {
            const completed = getCompletedLessons();
            if (!completed.includes(lessonId)) {
                completed.push(lessonId);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
                updateProgressUI();
            }
        }

        function getCompletedLessons() {
            try {
                return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            } catch {
                return [];
            }
        }

        function updateProgressUI() {
            const completed = getCompletedLessons();
            const totalLessons = document.querySelectorAll('[data-lesson-id]').length;

            if (totalLessons === 0) return;

            const percentage = Math.round((completed.length / totalLessons) * 100);

            // Update progress bar
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }

            // Update progress text
            const progressText = document.querySelector('.progress-text');
            if (progressText) {
                progressText.textContent = `${completed.length} / ${totalLessons} lessons completed (${percentage}%)`;
            }

            // Mark completed lessons
            completed.forEach(id => {
                const lesson = document.querySelector(`[data-lesson-id="${id}"]`);
                if (lesson) {
                    lesson.classList.add('completed');
                    lesson.querySelector('.lesson-status')?.classList.add('complete');
                }
            });
        }

        // Mark lesson complete button click handler
        document.addEventListener('click', (e) => {
            if (e.target.matches('.mark-complete-btn')) {
                const lessonId = e.target.dataset.lessonId;
                if (lessonId) {
                    saveProgress(lessonId);
                    e.target.textContent = '✓ Completed';
                    e.target.disabled = true;
                }
            }
        });

        // Initialize on page load
        updateProgressUI();

        return { saveProgress, getCompletedLessons, updateProgressUI };
    }

    /* ============================================
       3. FLOATING PARTICLES (Hero Background)
       ============================================ */
    function createParticles() {
        const hero = document.querySelector('.hero-particles');
        if (!hero) return;

        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            // Random animation delay and duration
            particle.style.animationDelay = `${Math.random() * 15}s`;
            particle.style.animationDuration = `${10 + Math.random() * 20}s`;

            // Random size
            const size = 2 + Math.random() * 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            hero.appendChild(particle);
        }
    }

    /* ============================================
       4. SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update URL without jumping
                    history.pushState(null, null, href);
                }
            });
        });
    }

    /* ============================================
       5. COPY CODE BUTTON ENHANCEMENT
       ============================================ */
    function enhanceCopyButtons() {
        document.querySelectorAll('.md-clipboard').forEach(button => {
            button.addEventListener('click', function () {
                // Add success feedback
                const icon = this.querySelector('svg');
                const originalHTML = icon?.innerHTML;

                if (icon) {
                    icon.innerHTML = '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>';
                    setTimeout(() => {
                        icon.innerHTML = originalHTML;
                    }, 2000);
                }

                // Optional: Show toast notification
                showToast('Code copied to clipboard!', 'success');
            });
        });
    }

    /* ============================================
       6. TOAST NOTIFICATIONS
       ============================================ */
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;

        // Styles
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '16px 24px',
            borderRadius: '12px',
            backgroundColor: type === 'success' ? '#10B981' : '#3B82F6',
            color: 'white',
            fontWeight: '600',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
            zIndex: '10000',
            animation: 'slide-in-right 0.3s ease',
            maxWidth: '300px'
        });

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'fade-out 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    /* ============================================
       7. NEWSLETTER FORM HANDLING
       ============================================ */
    function initNewsletterForm() {
        const form = document.querySelector('.newsletter-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            const input = form.querySelector('.newsletter-input');
            const button = form.querySelector('.newsletter-button');
            const originalText = button.textContent;

            // Don't prevent default - let Mailchimp handle it
            // But provide UI feedback
            button.textContent = 'Subscribing...';
            button.disabled = true;

            // Re-enable after a delay (Mailchimp will handle the actual submission)
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 3000);
        });
    }

    /* ============================================
       8. SEARCH ENHANCEMENT
       ============================================ */
    function enhanceSearch() {
        const searchInput = document.querySelector('[data-md-component="search-query"]');
        if (!searchInput) return;

        let searchTimeout;

        searchInput.addEventListener('input', function () {
            clearTimeout(searchTimeout);

            // Debounce search
            searchTimeout = setTimeout(() => {
                const query = this.value.toLowerCase();

                // Add search suggestions or highlight
                // (Material for MkDocs handles this, but we can enhance)
                if (query.length > 2) {
                    // Track search analytics
                    trackEvent('search', { query });
                }
            }, 300);
        });
    }

    /* ============================================
       9. THEME TOGGLE ANIMATION
       ============================================ */
    function enhanceThemeToggle() {
        const toggle = document.querySelector('[data-md-component="palette"]');
        if (!toggle) return;

        toggle.addEventListener('click', () => {
            // Add transition class to body
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';

            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }

    /* ============================================
       10. LAZY LOAD IMAGES
       ============================================ */
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Native lazy loading supported
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src || img.src;
            });
        } else {
            // Fallback for older browsers
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    /* ============================================
       11. KEYBOARD SHORTCUTS
       ============================================ */
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K: Open search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('[data-md-component="search-query"]');
                searchInput?.focus();
            }

            // Escape: Close search or modals
            if (e.key === 'Escape') {
                const search = document.querySelector('[data-md-component="search"]');
                if (search?.classList.contains('md-search--active')) {
                    search.classList.remove('md-search--active');
                }
            }
        });
    }

    /* ============================================
       12. EXTERNAL LINK HANDLING
       ============================================ */
    function handleExternalLinks() {
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            const url = new URL(link.href);
            const currentDomain = window.location.hostname;

            if (url.hostname !== currentDomain) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');

                // Add external link icon
                if (!link.querySelector('.external-icon')) {
                    const icon = document.createElement('span');
                    icon.className = 'external-icon';
                    icon.innerHTML = ' ↗';
                    icon.style.fontSize = '0.8em';
                    link.appendChild(icon);
                }
            }
        });
    }

    /* ============================================
       13. ANALYTICS TRACKING (GA4 Helper)
       ============================================ */
    function trackEvent(eventName, params = {}) {
        if (typeof gtag === 'function') {
            gtag('event', eventName, params);
        }
    }

    function trackPageView() {
        if (typeof gtag === 'function') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_path: window.location.pathname + window.location.search
            });
        }
    }

    /* ============================================
       14. PERFORMANCE MONITORING
       ============================================ */
    function monitorPerformance() {
        if ('PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];

                // Track LCP
                trackEvent('performance', {
                    metric: 'lcp',
                    value: lastEntry.renderTime || lastEntry.loadTime
                });
            });

            try {
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                // LCP not supported
            }

            // Monitor First Input Delay
            const fidObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    const delay = entry.processingStart - entry.startTime;
                    trackEvent('performance', {
                        metric: 'fid',
                        value: delay
                    });
                }
            });

            try {
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch (e) {
                // FID not supported
            }
        }
    }

    /* ============================================
       15. READING PROGRESS BAR
       ============================================ */
    function createReadingProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';

        Object.assign(progressBar.style, {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '0%',
            height: '3px',
            background: 'linear-gradient(90deg, #6366F1, #06B6D4)',
            zIndex: '10000',
            transition: 'width 0.1s ease'
        });

        document.body.appendChild(progressBar);

        function updateProgress() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;

            progressBar.style.width = `${Math.min(progress, 100)}%`;
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    /* ============================================
       16. BACK TO TOP BUTTON
       ============================================ */
    function createBackToTop() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');

        Object.assign(button.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366F1, #06B6D4)',
            color: 'white',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '9999',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        });

        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        }, { passive: true });

        document.body.appendChild(button);
    }

    /* ============================================
       17. INITIALIZATION
       ============================================ */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        console.log('🚀 MadeForAI - Initializing...');

        try {
            initScrollAnimations();
            createParticles();
            initSmoothScroll();
            enhanceCopyButtons();
            initNewsletterForm();
            enhanceSearch();
            enhanceThemeToggle();
            initLazyLoading();
            initKeyboardShortcuts();
            handleExternalLinks();
            monitorPerformance();
            createReadingProgress();
            createBackToTop();

            // Initialize progress tracking
            const progressTracker = trackProgress();
            window.madeforaiProgress = progressTracker;

            console.log('✅ MadeForAI - Initialized successfully!');
        } catch (error) {
            console.error('❌ MadeForAI - Initialization error:', error);
        }
    }

    // Auto-initialize
    init();

    // Expose API for external use
    window.madeforaiAPI = {
        trackProgress,
        showToast,
        trackEvent
    };
})();