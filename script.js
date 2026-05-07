document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const themeToggle = document.querySelector('.theme-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav a');

    // Initialize theme from localStorage or system preference
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        } else if (savedTheme === 'light') {
            body.classList.remove('dark-mode');
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
        }
    }

    // Initialize sidebar state from localStorage
    function initSidebar() {
        const savedSidebar = localStorage.getItem('sidebarOpen');
        const isMobile = window.innerWidth <= 1024;

        if (isMobile) {
            body.classList.remove('sidebar-open');
        } else if (savedSidebar === 'false') {
            body.classList.remove('sidebar-open');
        } else {
            body.classList.add('sidebar-open');
        }
    }

    // Toggle sidebar
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            body.classList.toggle('sidebar-open');
            const isOpen = body.classList.contains('sidebar-open');
            localStorage.setItem('sidebarOpen', isOpen);
        });
    }

    // Close sidebar when clicking overlay
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', function() {
            body.classList.remove('sidebar-open');
            localStorage.setItem('sidebarOpen', 'false');
        });
    }

    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // Active navigation on scroll
    const sections = document.querySelectorAll('.section');
    const controlButtons = document.querySelector('.control-buttons');

    function updateActiveNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Show/hide control buttons on scroll
    function updateControlButtons() {
        if (window.scrollY > 100) {
            controlButtons.classList.add('visible');
        } else {
            controlButtons.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', function() {
        updateActiveNav();
        updateControlButtons();
    });

    updateActiveNav();
    updateControlButtons();

    // Close sidebar on mobile when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                body.classList.remove('sidebar-open');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 1024) {
            body.classList.remove('sidebar-open');
        }
    });

    // Initialize
    initTheme();
    initSidebar();
});
