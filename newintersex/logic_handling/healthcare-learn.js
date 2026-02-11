// Tab functionality
    function openTab(evt, tabName) {
            // Hide all tab content
            const tabContent = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove("active");
            }
            
            // Remove active class from all tabs
            const tabs = document.getElementsByClassName("tab");
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("active");
            }
            
            // Show the specific tab content and mark button as active
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        // Initialize the page with first tab active
        document.addEventListener('DOMContentLoaded', function() {
            // This ensures the first tab is active by default
            document.querySelector('.tab').classList.add('active');
            document.querySelector('.tab-content').classList.add('active');
        });

//feature: Light and dark theme code functionality
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