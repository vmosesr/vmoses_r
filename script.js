document.addEventListener('DOMContentLoaded', function() {

    // EXPERIENCE TAB SECTION FUNCTION

    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(function(tabLink) {
        tabLink.addEventListener('click', function() {
            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
            
            const tabPanels = document.querySelectorAll('.tab-panel');
            tabPanels.forEach(function(panel) {
                panel.classList.remove('active');
            });
            
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });


    // SERVICES SECTION ANIMATIONS

    const section = document.querySelector('.services-section');
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(section);
        }
        
        const cards = document.querySelectorAll('.services-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            });
        });


    // SERVICES SECTION PARTICLE CREATION FUNCTION

    function createParticle(parent) {
        const particle = document.createElement('div');
        particle.className = 'services-particle';
        
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `floatAnimation ${duration}s infinite ease-in-out`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        parent.appendChild(particle);
        particle.addEventListener('animationend', function() {
            this.remove();
            createParticle(parent);
        });
    }

});