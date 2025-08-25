
        // Initialize Lucide icons
        lucide.createIcons();

        // Initialize AOS
        AOS.init({
            duration: 800, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
        });

        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });

        // Dark/Light Theme Toggle
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // Check for saved theme in localStorage and apply it
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleDarkIcon.classList.remove('hidden');
        }

        themeToggleBtn.addEventListener('click', function() {
            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                }

            // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        });


        // Hero carousel
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.hero-indicator');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = i === index ? '1' : '0';
            });
            indicators.forEach((indicator, i) => {
                indicator.style.backgroundColor = i === index ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.5)';
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        // Auto-advance slides
        setInterval(nextSlide, 5000);

        // Manual slide control
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });


// Swiper.js Initialization for Event Gallery
// Swiper.js Initialization for Event Gallery (Final Version)
var swiper = new Swiper(".event-gallery-swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1, // মোবাইল এবং ছোট স্ক্রিনের জন্য ডিফল্ট
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Breakpoints for larger screens
    breakpoints: {
        // 768px এর চেয়ে বড় স্ক্রিনের জন্য
        768: {
          slidesPerView: 3, // মাঝখানে ১টি এবং দুইপাশে ২টি স্লাইড দেখাবে
          spaceBetween: 50,
        },
    }
});


// Swiper.js Initialization for Testimonials
var testimonialsSwiper = new Swiper(".testimonials-swiper", {
    loop: true,
    autoplay: {
        delay: 4000, // স্লাইড পরিবর্তনের সময় (৪ সেকেন্ড)
        disableOnInteraction: false,
    },
    slidesPerView: 1, // মোবাইলের জন্য ডিফল্ট
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next-testimonial",
        prevEl: ".swiper-button-prev-testimonial",
    },
    breakpoints: {
        // 768px এর চেয়ে বড় স্ক্রিনের জন্য
        768: {
          slidesPerView: 2, // একসাথে দুটি করে টেস্টিমোনিয়াল দেখাবে
          spaceBetween: 30,
        },
    }
});


// FAQ Accordion Logic
// FAQ Accordion Logic (Corrected for Stable Icons)
const faqAccordion = document.getElementById('faq-accordion');
if (faqAccordion) {
    const faqItems = faqAccordion.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const wasOpen = item.classList.contains('open');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
                otherItem.querySelector('.faq-plus-icon').classList.remove('opacity-0');
                otherItem.querySelector('.faq-minus-icon').classList.add('opacity-0');
            });

            if (!wasOpen) {
                // Open the clicked item
                item.classList.add('open');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                item.querySelector('.faq-plus-icon').classList.add('opacity-0');
                item.querySelector('.faq-minus-icon').classList.remove('opacity-0');
            }
        });
    });
}
        
   

// Countdown Timer Logic
const countdownTimer = document.getElementById('countdown-timer');
if (countdownTimer) {
    // -----------------------------------------------------------------
    // আপনার ইভেন্টের তারিখ ও সময় এখানে পরিবর্তন করুন
    // -----------------------------------------------------------------
    const countdownDate = new Date("Aug 30, 2025 09:00:00").getTime();

    // প্রতি ১ সেকেন্ড পর পর টাইমার আপডেট করার জন্য
    const updateCountdown = setInterval(function() {
        // আজকের তারিখ ও সময়
        const now = new Date().getTime();
        
        // নির্দিষ্ট তারিখ এবং আজকের সময়ের মধ্যে পার্থক্য
        const distance = countdownDate - now;

        // দিন, ঘন্টা, মিনিট এবং সেকেন্ড গণনা
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // HTML এলিমেন্টগুলোতে সময় দেখানো
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // কাউন্টডাউন শেষ হয়ে গেলে যা হবে
        if (distance < 0) {
            clearInterval(updateCountdown);
            countdownTimer.innerHTML = "<h3 class='text-2xl font-playfair font-bold'>The Event Has Started!</h3>";
        }
    }, 1000);
}