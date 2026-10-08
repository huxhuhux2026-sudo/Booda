/* =========================================
   Mobile Menu
========================================= */

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", () => {

        mainNav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (mainNav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuBtn.setAttribute("aria-label", "إغلاق القائمة");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute("aria-label", "فتح القائمة");
        }

    });


    /* إغلاق القائمة عند الضغط على أي رابط */

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute("aria-label", "فتح القائمة");

        });

    });

}


/* =========================================
   Active Navigation Link
========================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll("#mainNav a");

function updateActiveLink() {

    let currentSection = "";

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


/* =========================================
   Back To Top Button
========================================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================
   Current Year
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* =========================================
   Smooth Scroll
========================================= */

const allInternalLinks = document.querySelectorAll('a[href^="#"]');

allInternalLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#" ||
            targetId.length <= 1
        ) {
            return;
        }


        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }


        event.preventDefault();

        const header = document.querySelector(".header");

        const headerHeight = header
            ? header.offsetHeight
            : 0;

        const targetPosition =
            targetSection.offsetTop - headerHeight;


        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});
/* =========================================
   Reveal Animation
========================================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .about-content, .contact-content"
);


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   Prevent Empty Links
========================================= */

const emptyLinks = document.querySelectorAll('a[href="#"]');

emptyLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});
