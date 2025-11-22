// Loader: keep displayed for 4s then reveal site content (you can adjust timeout)
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const site = document.getElementById('site-content');

    // Duration in milliseconds; adjust as needed.
    const LOADER_DURATION = 4500; // 4.5 seconds

    // Ensure loader visible at first, then hide and show site
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        loader.setAttribute('aria-hidden', 'true');

        site.style.display = 'block';
    }, LOADER_DURATION);
});

// Theme toggle (keeps simple)
(function () {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleBtn.textContent = 'Light Mode';
            toggleBtn.setAttribute('aria-pressed', 'true');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleBtn.textContent = 'Dark Mode';
            toggleBtn.setAttribute('aria-pressed', 'false');
        }
    });
})();