// BROWSE 2025 - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initCountdown();
    initParticles();
    initAnimations();
    initFormSubmissions();

    // Cyber Etymology Modal logic
    bindModal('.cyber-etymology .event-details', '#cyberEtymologyModal', '#closeCyberEtymologyModal');
    // Technical Quiz Modal logic
    bindModal('.technical-quiz .event-details', '#technicalQuizModal', '#closeTechnicalQuizModal');
    // Byte Surge Modal logic
    bindModal('.byte-surge .event-details', '#byteSurgeModal', '#closeByteSurgeModal');
    // Life Extension Modal logic
    bindModal('.life-extension .event-details', '#lifeExtensionModal', '#closeLifeExtensionModal');
    // Witty Byte Modal logic
    bindModal('.witty-byte .event-details', '#wittyByteModal', '#closeWittyByteModal');
    // UI/UX Print Modal logic
    bindModal('.uiux-print .event-details', '#uiuxPrintModal', '#closeUiuxPrintModal');
    // Hyperthon Modal logic
    bindModal('.hyperthon .event-details', '#hyperthonModal', '#closeHyperthonModal');
    // Pitchathon Modal logic
    bindModal('.pitchathon .event-details', '#pitchathonModal', '#closePitchathonModal');
});

function bindModal(openSelector, modalSelector, closeSelector) {
    const openBtn = document.querySelector(openSelector);
    const modal = document.querySelector(modalSelector);
    const closeBtn = document.querySelector(closeSelector);
    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('show');
        });
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
}

// Mobile Navigation Toggle
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active nav item on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Countdown Timer
function initCountdown() {
    // Set the date for BROWSE 2025 (May 20, 2025)
    const countdownDate = new Date("May 20, 2025 09:00:00").getTime();

    // Update the countdown every 1 second
    const timer = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countdownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');
        
        // If the countdown is finished, display expired text
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000);
}

// Particle Animation
function initParticles() {
    const particleContainer = document.querySelector('.particle-container');
    
    if (particleContainer) {
        // Number of particles
        const particleCount = 50;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            let particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Set random properties
            const size = Math.random() * 5 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            // Apply styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.backgroundColor = getRandomColor();
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Add to container
            particleContainer.appendChild(particle);
        }
        
        // Add CSS for particles
        const style = document.createElement('style');
        style.innerHTML = `
            .particle {
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                animation: float linear infinite;
            }
            
            @keyframes float {
                0% {
                    transform: translateY(0) translateX(0) rotate(0deg);
                }
                25% {
                    transform: translateY(-20px) translateX(10px) rotate(90deg);
                }
                50% {
                    transform: translateY(-40px) translateX(0) rotate(180deg);
                }
                75% {
                    transform: translateY(-20px) translateX(-10px) rotate(270deg);
                }
                100% {
                    transform: translateY(0) translateX(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Helper function to get random color
    function getRandomColor() {
        const colors = [
            'rgba(108, 99, 255, 0.8)',  // Primary color
            'rgba(255, 86, 120, 0.8)',  // Secondary color
            'rgba(44, 220, 220, 0.8)'   // Tertiary color
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

// Scroll Animations
function initAnimations() {
    // Add .fade-up and .fade-in classes to elements we want to animate
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        if (sectionTitle) sectionTitle.classList.add('fade-up');
        
        const eventCards = section.querySelectorAll('.event-card');
        eventCards.forEach(card => card.classList.add('fade-up'));
        
        const timelineItems = section.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => item.classList.add('fade-up'));
        
        const sponsorItems = section.querySelectorAll('.sponsor-item');
        sponsorItems.forEach(item => item.classList.add('fade-in'));
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Check if elements are in viewport and add .appear class
    function checkScroll() {
        const fadeElements = document.querySelectorAll('.fade-up, .fade-in');
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('appear');
            }
        });
    }
    
    // Initial check on page load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
}

// Form Submissions
function initFormSubmissions() {
    // Registration Form
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for registering for BROWSE 2025! We will contact you with more details soon.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demonstration, we'll just show an alert
            alert('Thank you for subscribing to our newsletter!');
            
            // Reset the form
            this.reset();
        });
    }
} 