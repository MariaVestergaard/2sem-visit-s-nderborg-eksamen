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