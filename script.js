
// =====================================================
// ABS TAXHUB - WEBSITE JAVASCRIPT
// =====================================================


// =====================================================
// SERVICE INFORMATION
// =====================================================

const serviceInformation = {
    "federal-state-filing": {
        title: "Federal & State Filing",
        description: "Professional assistance with applicable federal and state tax return preparation and filing.",
        paragraphs: [
            "Federal and state tax returns help individuals and businesses report applicable income, deductions, credits and other tax information to the relevant tax authorities.",
            "ABS TAXHUB can help you understand the information and documents needed to prepare your return and review the filing process based on your circumstances.",
            "The documents and filing requirements may vary depending on your income, residency, filing status and applicable state rules."
        ],
        benefits: [
            "Guidance on required tax documents",
            "Assistance with return preparation",
            "Review of applicable filing requirements",
            "Support with tax-related questions"
        ]
    },

    "itin-processing": {
        title: "ITIN Processing",
        description: "Guidance with Individual Taxpayer Identification Number applications and supporting documentation.",
        paragraphs: [
            "An Individual Taxpayer Identification Number (ITIN) is issued by the IRS to eligible individuals who need a U.S. taxpayer identification number but are not eligible for a Social Security number.",
            "The application process may require Form W-7 and supporting identity or foreign-status documentation. The appropriate documents depend on the applicant's situation.",
            "ABS TAXHUB can help you understand the application process and prepare the relevant documentation for submission."
        ],
        benefits: [
            "Guidance on the ITIN application process",
            "Help understanding supporting documents",
            "Assistance with application preparation",
            "Information about relevant IRS requirements"
        ]
    },

    "amendment": {
        title: "Tax Return Amendment",
        description: "Assistance with reviewing previously filed returns and understanding when an amended return may be necessary.",
        paragraphs: [
            "A tax return amendment may be appropriate when a previously filed return contains an error or needs to be updated with additional information.",
            "The correct approach depends on the type of return, the error involved and the applicable IRS or state requirements.",
            "Our team can help you review the circumstances, understand the information required and discuss the next steps for a possible amendment."
        ],
        benefits: [
            "Review of the issue with your original return",
            "Guidance on relevant supporting documents",
            "Information about applicable amendment procedures",
            "Assistance understanding possible next steps"
        ]
    },

    "advance-tax-planning": {
        title: "Advance Tax Planning",
        description: "Proactive tax planning assistance to help you understand potential tax obligations and plan ahead.",
        paragraphs: [
            "Advance tax planning involves reviewing relevant financial information and considering applicable deductions, credits, estimated payments and other tax factors before filing time.",
            "Planning needs can differ for individuals, self-employed taxpayers, partnerships and corporations. The right approach depends on your circumstances and applicable tax rules.",
            "ABS TAXHUB can discuss your objectives and help you understand potential planning considerations for your situation."
        ],
        benefits: [
            "Review of relevant tax-planning information",
            "Guidance on potential deductions and credits",
            "Information about estimated tax obligations",
            "A clearer view of upcoming tax responsibilities"
        ]
    },

    "extension-filing": {
        title: "Extension Filing",
        description: "Assistance with understanding tax return extensions, filing requirements and applicable deadlines.",
        paragraphs: [
            "An eligible taxpayer may request an extension of time to file a tax return when additional preparation time is needed.",
            "An extension to file generally does not extend the deadline to pay taxes owed. Payment requirements and deadlines should be checked carefully.",
            "Our team can help you understand the applicable extension process, required information and relevant federal or state deadlines."
        ],
        benefits: [
            "Guidance on extension requirements",
            "Help understanding filing deadlines",
            "Information about payment responsibilities",
            "Assistance preparing relevant information"
        ]
    },

    "tax-representation": {
        title: "Tax Representation",
        description: "Assistance with understanding tax notices, correspondence and possible next steps for tax-related matters.",
        paragraphs: [
            "Tax-related notices and correspondence can raise questions about reported information, outstanding balances, documentation or other compliance matters.",
            "The appropriate response depends on the notice, the tax authority involved and the circumstances of the case.",
            "ABS TAXHUB can help you understand the information involved and discuss the available assistance. Formal representation before a tax authority is subject to applicable authorization and eligibility requirements."
        ],
        benefits: [
            "Help understanding tax correspondence",
            "Guidance on relevant records and documents",
            "Information about potential response steps",
            "Support identifying the appropriate type of assistance"
        ]
    },

    "student-tax-filing": {
        title: "Student Tax Filing",
        description: "Tax filing guidance for eligible international students and other students with U.S. tax obligations.",
        paragraphs: [
            "International students studying in the United States may have specific federal tax filing or reporting obligations depending on their immigration status, tax residency and income.",
            "Some students may need to file Form 8843, while others may have additional filing requirements. Tax treaty eligibility and reporting obligations depend on individual circumstances.",
            "ABS TAXHUB can help students understand which documents and forms may be relevant to their situation."
        ],
        benefits: [
            "Guidance on student tax documents",
            "Information about Form 8843 where applicable",
            "Help understanding potential filing obligations",
            "Discussion of relevant tax treaty considerations"
        ]
    },

    "fbar-fatca": {
        title: "FBAR & FATCA Processing",
        description: "Guidance on applicable foreign financial account reporting and U.S. international tax compliance requirements.",
        paragraphs: [
            "Certain U.S. persons may have reporting obligations relating to financial accounts held outside the United States. Requirements depend on the person's circumstances and applicable thresholds.",
            "FBAR reporting and FATCA-related tax reporting are distinct requirements. The forms, eligibility rules and filing deadlines can differ.",
            "Our team can help you understand the relevant reporting requirements and identify the information needed to discuss your filing situation."
        ],
        benefits: [
            "Guidance on foreign account information",
            "Help understanding relevant reporting requirements",
            "Information about supporting records",
            "Assistance identifying potential filing obligations"
        ]
    },

    "tax-consultation": {
        title: "Free Expert Tax Consultation",
        description: "Discuss your tax questions and learn which tax assistance services may suit your requirements.",
        paragraphs: [
            "If you are unsure which tax service you need, a consultation can help you explain your circumstances and identify the questions that need attention.",
            "You can discuss filing requirements, relevant documentation, tax planning, amendments or other tax-related concerns.",
            "Contact ABS TAXHUB to ask about consultation availability and the scope of assistance offered."
        ],
        benefits: [
            "Discuss your tax-related questions",
            "Understand which documents may be relevant",
            "Explore suitable service options",
            "Learn about possible next steps"
        ]
    }
};


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

function closeMobileNavigation() {
    if (!mobileMenu || !mainNav) return;

    mainNav.classList.remove("mobile-active");
    mobileMenu.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-label", "Open menu");
    mobileMenu.textContent = "☰";
}

if (mobileMenu && mainNav) {
    mobileMenu.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("mobile-active");

        mobileMenu.setAttribute("aria-expanded", String(isOpen));
        mobileMenu.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
        mobileMenu.textContent = isOpen ? "×" : "☰";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileNavigation);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMobileNavigation();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            closeMobileNavigation();
        }
    });
}


// =====================================================
// SERVICES DROPDOWN
// =====================================================

const servicesDropdown = document.getElementById("servicesDropdown");
const servicesToggle = document.getElementById("servicesToggle");

if (servicesDropdown && servicesToggle) {
    servicesToggle.addEventListener("click", function (event) {
        event.stopPropagation();

        const isOpen = servicesDropdown.classList.toggle("dropdown-open");

        servicesToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
        if (!servicesDropdown.contains(event.target)) {
            servicesDropdown.classList.remove("dropdown-open");
            servicesToggle.setAttribute("aria-expanded", "false");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            servicesDropdown.classList.remove("dropdown-open");
            servicesToggle.setAttribute("aria-expanded", "false");
            servicesToggle.blur();
        }
    });

    servicesDropdown.querySelectorAll(".services-menu a").forEach(function (link) {
        link.addEventListener("click", function () {
            servicesDropdown.classList.remove("dropdown-open");
            servicesToggle.setAttribute("aria-expanded", "false");
            closeMobileNavigation();
        });
    });
}


// =====================================================
// SERVICE DETAILS PAGE
// =====================================================

const servicePageTitle = document.getElementById("servicePageTitle");
const servicePageDescription = document.getElementById("servicePageDescription");
const servicePageParagraphs = document.getElementById("servicePageParagraphs");
const serviceBenefits = document.getElementById("serviceBenefits");

if (
    servicePageTitle &&
    servicePageDescription &&
    servicePageParagraphs &&
    serviceBenefits
) {
    const queryParameters = new URLSearchParams(window.location.search);
    const selectedService = queryParameters.get("service");
    const service = serviceInformation[selectedService];

    function createTextElement(tagName, textContent, className) {
        const element = document.createElement(tagName);
        element.textContent = textContent;

        if (className) {
            element.className = className;
        }

        return element;
    }

    if (service) {
        document.title = service.title + " | ABS TAXHUB";
        servicePageTitle.textContent = service.title;
        servicePageDescription.textContent = service.description;

        servicePageParagraphs.replaceChildren();

        service.paragraphs.forEach(function (paragraph) {
            servicePageParagraphs.appendChild(
                createTextElement("p", paragraph)
            );
        });

        serviceBenefits.replaceChildren();

        service.benefits.forEach(function (benefit, index) {
            const card = document.createElement("article");
            card.className = "benefit-card";

            const number = createTextElement(
                "span",
                String(index + 1).padStart(2, "0"),
                "benefit-number"
            );

            const icon = createTextElement("span", "✓", "benefit-check");
            const heading = createTextElement("h3", benefit);

            card.append(number, icon, heading);
            serviceBenefits.appendChild(card);
        });
    } else {
        document.title = "Our Tax Services | ABS TAXHUB";
        servicePageTitle.textContent = "Explore Our Tax Services";
        servicePageDescription.textContent =
            "Choose a service below to learn more about our tax assistance.";

        servicePageParagraphs.replaceChildren(
            createTextElement(
                "p",
                "Select one of our services to view information about the assistance available."
            )
        );

        serviceBenefits.replaceChildren();

        Object.keys(serviceInformation).forEach(function (key) {
            const item = serviceInformation[key];
            const link = document.createElement("a");

            link.className = "benefit-card service-directory-link";
            link.href = "service-details.html?service=" + encodeURIComponent(key);

            link.appendChild(createTextElement("span", "→", "benefit-check"));
            link.appendChild(createTextElement("h3", item.title));

            serviceBenefits.appendChild(link);
        });
    }
}


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
// HERO SLIDER
// =====================================================

const sliderTrack = document.querySelector(".hero-slider-track");
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");

let currentSlide = 0;
let sliderTimer = null;
const slideTime = 5000;

function moveSlider() {
    if (!sliderTrack || slides.length === 0) return;

    sliderTrack.style.transform =
        "translateX(-" + (currentSlide * 100 / slides.length) + "%)";

    dots.forEach(function (dot, index) {
        const isActive = index === currentSlide;

        dot.classList.toggle("active", isActive);

        if (isActive) {
            dot.setAttribute("aria-current", "true");
        } else {
            dot.removeAttribute("aria-current");
        }
    });
}

function nextSlide() {
    if (slides.length < 2) return;

    currentSlide = (currentSlide + 1) % slides.length;
    moveSlider();
}

function previousSlide() {
    if (slides.length < 2) return;

    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    moveSlider();
}

function stopSlider() {
    if (sliderTimer !== null) {
        clearInterval(sliderTimer);
        sliderTimer = null;
    }
}

function startSlider() {
    stopSlider();

    if (
        slides.length < 2 ||
        document.hidden ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    sliderTimer = setInterval(nextSlide, slideTime);
}

if (sliderTrack && slides.length > 0) {
    moveSlider();
    startSlider();

    if (nextButton) {
        nextButton.addEventListener("click", function () {
            nextSlide();
            startSlider();
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", function () {
            previousSlide();
            startSlider();
        });
    }

    dots.forEach(function (dot, index) {
        dot.addEventListener("click", function () {
            if (index >= slides.length) return;

            currentSlide = index;
            moveSlider();
            startSlider();
        });
    });

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            stopSlider();
        } else {
            startSlider();
        }
    });
}
