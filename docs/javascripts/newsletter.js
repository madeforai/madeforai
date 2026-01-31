
(function () {
    'use strict';

    // Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyLPmR1ZdKyq8OyvJjp9Ljo-pZfyxwaGiBLWbsE0sxtKMLEOHObGvMmaWImtQ1zTemD/exec';

    // Helper to initialize form
    function initNewsletterForm() {
        const form = document.getElementById('newsletter-form');
        const messageDiv = document.getElementById('form-message');
        const submitBtn = document.getElementById('submit-btn');

        if (!form) return;

        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const emailInput = document.getElementById('subscriber-email');

            // Show loading state
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;
            messageDiv.style.display = 'none';

            // Prepare form data
            const formData = new FormData();
            formData.append('email', emailInput.value.trim());
            formData.append('name', ''); // Empty name field

            try {
                // Send to Google Apps Script
                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (result.status === 'success') {
                    showMessage('success', '✅ ' + result.message);
                    form.reset();
                } else {
                    showMessage('error', '❌ ' + result.message);
                }

            } catch (error) {
                // Fallback for no-cors mode
                showMessage('success', '✅ Thank you for subscribing! You should receive a confirmation email shortly.');
                form.reset();
                console.log('Submitted:', emailInput.value);
            } finally {
                submitBtn.innerHTML = 'Subscribe <span class="material-symbols-outlined">arrow_forward</span>';
                submitBtn.disabled = false;
            }
        });

        function showMessage(type, text) {
            messageDiv.textContent = text;
            messageDiv.style.display = 'block';

            if (type === 'success') {
                messageDiv.style.background = '#d4edda';
                messageDiv.style.color = '#155724';
                messageDiv.style.border = '1px solid #c3e6cb';

                // Auto-hide success messages after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            } else {
                messageDiv.style.background = '#f8d7da';
                messageDiv.style.color = '#721c24';
                messageDiv.style.border = '1px solid #f5c6cb';
            }
        }
    }

    // Initialize on load and on navigation (for SPA behavior)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNewsletterForm);
    } else {
        initNewsletterForm();
    }

    // Re-init for MkDocs Instant Loading
    if (typeof app !== 'undefined' && app.document$) {
        app.document$.subscribe(function () {
            setTimeout(initNewsletterForm, 100);
        });
    }
})();
