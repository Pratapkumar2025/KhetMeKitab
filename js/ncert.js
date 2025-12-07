// NCERT Page - Class Tab Switching Functionality

document.addEventListener('DOMContentLoaded', function() {
    initializeClassTabs();
});

function initializeClassTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const classContents = document.querySelectorAll('.class-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const classNum = this.getAttribute('data-class');

            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Hide all content sections
            classContents.forEach(content => content.classList.remove('active'));

            // Show selected class content
            const targetContent = document.getElementById('class-' + classNum);
            if (targetContent) {
                targetContent.classList.add('active');

                // Smooth scroll to content
                targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}
