// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submit (demo, redirects to email if needed, but alert for now)
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Inquiry submitted! (Demo - would send to email)');
});

// Remove modal, as book now is link
// Form submit (demo alert)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Booking request submitted! (This is a demo)');
    modal.style.display = 'none';
});

// Dark mode with localStorage
const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});
// Fade-in on scroll using Intersection Observer for performance
const fadeSections = document.querySelectorAll('.fade-in-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeSections.forEach(section => observer.observe(section));
