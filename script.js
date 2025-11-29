document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hero Visual Carousel
    const carousel = document.querySelector('.visual-carousel');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        let intervalId;

        const showSlide = (index) => {
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        };

        const startCarousel = () => {
            intervalId = setInterval(nextSlide, 6000); // Switch every 6 seconds
        };

        const stopCarousel = () => {
            clearInterval(intervalId);
        };

        // Start auto-rotation
        startCarousel();

        // Pause on hover
        carousel.addEventListener('mouseenter', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
    }

    // Mobile Menu Toggle (if needed in future)
    // const menuBtn = document.querySelector('.menu-btn');
    // const navLinks = document.querySelector('.nav-links');

    // if (menuBtn) {
    //     menuBtn.addEventListener('click', () => {
    //         navLinks.classList.toggle('active');
    //     });
    // }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
