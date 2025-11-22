// Mobile menu toggle
const toggleButton = document.getElementById('js-navbar-toggle');
const menu = document.getElementById('js-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Light/Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});