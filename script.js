// Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Animate skill items on scroll
    const skillItems = document.querySelectorAll('.skills-list li');
    
    const animateOnScroll = function() {
        skillItems.forEach(item => {
            const position = item.getBoundingClientRect();
            
            // If the item is in the viewport
            if (position.top < window.innerHeight - 50) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize skill items with hidden state
    skillItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on scroll and initially
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Project card hover effect
    const projectCard = document.querySelector('.project-card');
    
    if (projectCard) {
        projectCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        projectCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
        });
    }
    
    // Add current year to footer
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} - Designed and developed by yours truly`;
    }
    
    // Add subtle animation to CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Console greeting (for fun)
    console.log('%cHello there! Thanks for checking out my portfolio.', 
                'color: #1d3146; font-size: 16px; font-weight: bold;');
    console.log('%cFeel free to explore the code or get in touch if you have any questions!', 
                'color: #db680a; font-size: 14px;');
});