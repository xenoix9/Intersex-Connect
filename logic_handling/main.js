// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navUl.classList.contains('show')) {
                navUl.classList.remove('show');
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tab functionality for resources page
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
});
/*
//Light and dark theme code functionality
// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Initialize theme based on saved preference or system preference
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme === 'dark') {
            setDarkTheme();
        } else if (savedTheme === 'light') {
            setLightTheme();
        } else if (prefersDarkScheme.matches) {
            // If no saved preference, use system preference
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }
    
    function setDarkTheme() {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateToggleButton(true);
    }
    
    function setLightTheme() {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateToggleButton(false);
    }
    
    function updateToggleButton(isDark) {
        if (themeToggle) {
            const thumb = themeToggle.querySelector('.toggle-thumb');
            if (isDark) {
                thumb.style.transform = 'translateX(26px)';
                thumb.innerHTML = '🌙';
                themeToggle.setAttribute('aria-label', 'Switch to light theme');
            } else {
                thumb.style.transform = 'translateX(0)';
                thumb.innerHTML = '☀️';
                themeToggle.setAttribute('aria-label', 'Switch to dark theme');
            }
        }
    }
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                setLightTheme();
            } else {
                setDarkTheme();
            }
        });
    }
    
    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', function(e) {
        // Only update if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                setDarkTheme();
            } else {
                setLightTheme();
            }
        }
    });
    
    // Initialize theme
    initTheme();
    
    // Add smooth transitions after page load
    setTimeout(() => {
        document.body.classList.add('theme-transitions');
    }, 100);
});
*/