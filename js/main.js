// KhetMeKitab - Main JavaScript
// Hindi Translation and Interactive Features

// Language state
let currentLang = 'hi'; // Default to Hindi

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageToggle();
    loadSavedLanguage();
});

// Initialize language toggle button
function initializeLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

// Load saved language preference from localStorage
function loadSavedLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
    }
    applyLanguage(currentLang);
}

// Toggle between Hindi and English
function toggleLanguage() {
    currentLang = currentLang === 'hi' ? 'en' : 'hi';
    localStorage.setItem('preferredLanguage', currentLang);
    applyLanguage(currentLang);
}

// Apply language to all elements with data-en and data-hi attributes
function applyLanguage(lang) {
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-hi]');
    elements.forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (text) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'IMG') {
                element.alt = text;
            } else {
                element.textContent = text;
            }
        }
    });

    // Update language toggle button text
    const langText = document.getElementById('langText');
    if (langText) {
        langText.textContent = lang === 'hi' ? 'English' : 'हिंदी';
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.link-card, .skill-card, .news-card, .ncert-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
