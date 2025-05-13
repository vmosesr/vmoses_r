// Animate skill bars when they come into view
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-skill');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.skill-container').forEach(container => {
        observer.observe(container);
    });
});