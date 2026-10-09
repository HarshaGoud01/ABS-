// =====================================================
// ABS TAXHUB - WEBSITE JAVASCRIPT
// =====================================================


// =====================================================
// APPOINTMENT FORM
// =====================================================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Thank you for contacting ABS TAXHUB! " +
            "Your appointment request has been received."
        );

        appointmentForm.reset();
    });
}


// =====================================================
// MOBILE NAVIGATION MENU
// =====================================================

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

if (mobileMenu && mainNav) {

    mobileMenu.addEventListener("click", function () {

        const menuIsOpen = mainNav.classList.toggle("mobile-active");

        mobileMenu.setAttribute(
            "aria-expanded",
            String(menuIsOpen)
        );

        mobileMenu.setAttribute(
            "aria-label",
            menuIsOpen ? "Close menu" : "Open menu"
        );

        mobileMenu.textContent = menuIsOpen ? "×" : "☰";

    });


    // Close menu when a navigation link is clicked

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("mobile-active");

            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-label", "Open menu");

            mobileMenu.textContent = "☰";

        });

    });


    // Close menu when Escape is pressed

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            mainNav.classList.remove("mobile-active");

            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.setAttribute("aria-label", "Open menu");

            mobileMenu.textContent = "☰";

        }

    });

}


// =====================================================
// HERO SLIDER ELEMENTS
// =====================================================

const sliderTrack = document.querySelector(".hero-slider-track");
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");

let currentSlide = 0;
let sliderTimer = null;

const slideTime = 5000;


// =====================================================
// MOVE SLIDER
// =====================================================

function moveSlider() {

    if (!sliderTrack || slides.length === 0) {
        return;
    }

    const slideWidth = 100 / slides.length;

    sliderTrack.style.transform =
        "translateX(-" + (currentSlide * slideWidth) + "%)";


    // Update active slider dots

    dots.forEach(function (dot, index) {

        const isActive = index === currentSlide;

        dot.classList.toggle("active", isActive);

        dot.setAttribute(
            "aria-current",
            isActive ? "true" : "false"
        );

    });

}


// =====================================================
// NEXT SLIDE
// =====================================================

function nextSlide() {

    if (slides.length === 0) {
        return;
    }

    currentSlide = (currentSlide + 1) % slides.length;

    moveSlider();

}


// =====================================================
// PREVIOUS SLIDE
// =====================================================

function previousSlide() {

    if (slides.length === 0) {
        return;
    }

    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    moveSlider();

}


// =====================================================
// AUTOMATIC SLIDER
// =====================================================

function startSlider() {

    if (slides.length < 2) {
        return;
    }

    clearInterval(sliderTimer);

    sliderTimer = setInterval(function () {

        nextSlide();

    }, slideTime);

}


// =====================================================
// NEXT ARROW BUTTON
// =====================================================

if (nextButton) {

    nextButton.addEventListener("click", function () {

        nextSlide();

        startSlider();

    });

}


// =====================================================
// PREVIOUS ARROW BUTTON
// =====================================================

if (prevButton) {

    prevButton.addEventListener("click", function () {

        previousSlide();

        startSlider();

    });

}


// =====================================================
// SLIDER DOT BUTTONS
// =====================================================

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        currentSlide = index;

        moveSlider();

        startSlider();

    });

});


// =====================================================
// INITIALIZE SLIDER
// =====================================================

if (sliderTrack && slides.length > 0) {

    moveSlider();

    startSlider();

}


// =====================================================
// PAUSE SLIDER WHEN TAB IS HIDDEN
// =====================================================

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {

        clearInterval(sliderTimer);

    } else {

        startSlider();

    }

});
