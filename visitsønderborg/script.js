
// Lavet ved hjælp af chat gpt
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 40000); // Change image every 40 seconds
}

function changeSlide(n) {
    slideIndex += n - 1;
    showSlides();
}


//lille slider
let smallSlideIndex = 0;
showSmallSlides();

function showSmallSlides() {
    let slides = document.getElementsByClassName("small-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    smallSlideIndex++;
    if (smallSlideIndex > slides.length) {
        smallSlideIndex = 1;
    }
    slides[smallSlideIndex - 1].style.display = "block";
    
}

function changeSmallSlide(n) {
    smallSlideIndex += n - 1;
    showSmallSlides();
}



        // header
        document.addEventListener('DOMContentLoaded', () => {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
        
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('nav-active');
            });
        });