let currentSlide = 0;
        const slides = document.querySelectorAll('.slides .slide_image');
        const buttons = document.querySelectorAll('.navigation button');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.transform = `translateX(${(i - index) * 100}%)`;
            });
            buttons.forEach((button, i) => {
                button.classList.toggle('active', i === index);
            });
            currentSlide = index;
        }
    