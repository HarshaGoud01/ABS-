// =====================================================
// APPOINTMENT FORM
// =====================================================

const form = document.getElementById("appointmentForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you! Your appointment request has been submitted."
        );

        form.reset();

    });

}



// =====================================================
// MOBILE MENU
// =====================================================

const mobileMenu =
    document.getElementById("mobileMenu");

const mainNav =
    document.getElementById("mainNav");


if (mobileMenu && mainNav) {

    mobileMenu.addEventListener("click", function () {

        mainNav.classList.toggle("mobile-active");

    });

}



// =====================================================
// CLOSE MOBILE MENU
// =====================================================

const navLinks =
    document.querySelectorAll("#mainNav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (mainNav) {

            mainNav.classList.remove(
                "mobile-active"
            );

        }

    });

});



// =====================================================
// HERO SLIDER
// =====================================================

const sliderTrack =
    document.querySelector(".hero-slider-track");

const slides =
    document.querySelectorAll(".hero-slide");

const dots =
    document.querySelectorAll(".slider-dot");

const nextButton =
    document.getElementById("nextSlide");

const prevButton =
    document.getElementById("prevSlide");


let currentSlide = 0;

let sliderTimer;

const slideTime = 5000;



// =====================================================
// MOVE SLIDER
// =====================================================

function moveSlider() {

    if (!sliderTrack || slides.length === 0) {
        return;
    }

    const slideWidth =
        100 / slides.length;

    sliderTrack.style.transform =
        "translateX(-" +
        (currentSlide * slideWidth) +
        "%)";

    updateDots();

}



// =====================================================
// NEXT SLIDE
// =====================================================

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    moveSlider();

}



// =====================================================
// PREVIOUS SLIDE
// =====================================================

function previousSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide =
            slides.length - 1;

    }

    moveSlider();

}



// =====================================================
// UPDATE DOTS
// =====================================================

function updateDots() {

    dots.forEach(function (dot, index) {

        if (index === currentSlide) {

            dot.classList.add("active");

        } else {

            dot.classList.remove("active");

        }

    });

}



// =====================================================
// START AUTOMATIC SLIDER
// =====================================================

function startSlider() {

    clearInterval(sliderTimer);

    sliderTimer =
        setInterval(function () {

            nextSlide();

        }, slideTime);

}



// =====================================================
// NEXT BUTTON
// =====================================================

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            nextSlide();

            startSlider();

        }
    );

}



// =====================================================
// PREVIOUS BUTTON
// =====================================================

if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            previousSlide();

            startSlider();

        }
    );

}



// =====================================================
// DOT BUTTONS
// =====================================================

dots.forEach(function (dot, index) {

    dot.addEventListener(
        "click",
        function () {

            currentSlide = index;

            moveSlider();

            startSlider();

        }
    );

});



// =====================================================
// START SLIDER
// =====================================================

if (slides.length > 0) {

    moveSlider();

    startSlider();

}