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


//on scroll animation
var $animatedElements=$('.animated');
var $window=$(window);
$window.on('scroll', check_view);

function check_view() {
    var window_height=$window.height();
    var window_top_position=$window.scrollTop();
    var window_bottom_position=(window_top_position+window_height);

    $.each($animatedElements, function () {
        var delta=100;
        var $element=$(this);
        var element_height=$element.outerHeight();
        var element_top_position=$element.offset().top;
        var element_bottom_position=(element_top_position+element_height);

        if((element_bottom_position>=window_top_position) && (element_top_position<=window_bottom_position)){
            // $element.addClass('show');
            setTimeout(function () {
                $element.addClass('show');
            }, 500);
        }else{
            // $element.removeClass('show');
        }
    })
}

$window.on('scroll resize');
$window.trigger('scroll');