// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links based on current page
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Navbar color change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button functionality
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="bi bi-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect
    backToTopButton.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });

    backToTopButton.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });

    // Scroll reveal animation
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('fade-in-view');
            }
        });
    };

    // Initial check on load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Apply fade classes to elements
    applyAnimationClasses();
    
    // Parallax effect for hero section background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.getElementById('hero');
        
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });

    // Animate service cards on hover
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Animate destination cards on hover
    const destinationCards = document.querySelectorAll('.destination-card');
    
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = '';
            }
        });
    });

    // Animate testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        // Add a slight delay to each card for a staggered effect
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });

    // Floating animation for hero image
    const heroImg = document.querySelector('.hero-img');
    
    if (heroImg) {
        setInterval(() => {
            heroImg.style.animation = 'floatAnimation 3s ease-in-out infinite';
        }, 100);
    }

    // Add counter animation to numbers
    const counters = document.querySelectorAll('.counter');
    
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200;
            const increment = target / speed;
            let count = 0;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    }
});

// Helper function to apply animation classes to elements
function applyAnimationClasses() {
    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${0.1 * index}s`;
    });

    // Feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    featureBoxes.forEach((box, index) => {
        box.classList.add('fade-up');
        box.style.transitionDelay = `${0.1 * index}s`;
    });

    // Destination cards
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('fade-right');
        } else {
            card.classList.add('fade-left');
        }
        card.style.transitionDelay = `${0.1 * index}s`;
    });

    // Testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.classList.add('fade-up');
        card.style.transitionDelay = `${0.1 * index}s`;
    });

    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('fade-up');
    });
} 