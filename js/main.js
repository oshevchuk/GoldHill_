/**
 * Created by megad on 30.12.2017.
 */
var slides = document.querySelectorAll(".slider .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 5000);

var next = document.getElementById('next');
var previous = document.getElementById('previous');

var current_slide = document.getElementById('current_slide');
var total_slides = document.getElementById('total_slides');

function displayStat() {
    current_slide.innerHTML = currentSlide + 1;
    total_slides.innerHTML = "/" + (+slides.length);
}
displayStat();

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (slides.length + n) % slides.length;
    slides[currentSlide].className = 'slide showing';
    displayStat();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function pauseSlideshow() {
    clearInterval(slideInterval);
}

next.onclick = function () {
    // pauseSlideshow();
    nextSlide();
};

previous.onclick = function () {
    // pauseSlideshow();
    previousSlide();
};