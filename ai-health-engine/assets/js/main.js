// Main JavaScript for AI Health Engine website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 absolute top-4 right-4';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('nav > div').appendChild(mobileMenuButton);

    const navLinks = document.querySelector('nav .hidden.md\\:flex');
    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('right-4');
        navLinks.classList.toggle('bg-white');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('rounded-lg');
        navLinks.classList.toggle('shadow-lg');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!formValues.name || !formValues.email || !formValues.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // In a real application, you would send this data to a server
            console.log('Form submitted:', formValues);
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Service cards animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .team-card, .contact-card').forEach(card => {
        card.classList.add('opacity-0', 'transition-all', 'duration-500', 'ease-out');
        observer.observe(card);
    });

    // Add animation classes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
});
