// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");


    const icon =
        menuButton.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking navigation link

document
    .querySelectorAll(".nav-link")
    .forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");


            const icon =
                menuButton.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");


                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =====================================================
// PROJECT FILTERING
// =====================================================

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove(
                "active"
            );

        });


        button.classList.add(
            "active"
        );


        const selectedFilter =
            button.dataset.filter;


        projectCards.forEach((card) => {

            const categories =
                card.dataset.category.split(" ");


            if (

                selectedFilter === "all" ||

                categories.includes(
                    selectedFilter
                )

            ) {

                card.classList.remove(
                    "hide"
                );

            } else {

                card.classList.add(
                    "hide"
                );

            }

        });

    });

});


// =====================================================
// ACTIVE NAVIGATION ON SCROLL
// =====================================================

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const internalNavLinks =
    document.querySelectorAll(
        '.nav-link[href^="#"]'
    );


function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;


        const sectionHeight =
            section.offsetHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY <
            sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    internalNavLinks.forEach((link) => {

        link.classList.remove(
            "active"
        );


        if (

            link.getAttribute("href") ===
            `#${currentSection}`

        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(

    "scroll",

    updateActiveNavigation

);


// =====================================================
// HERO TEXT ROTATION
// =====================================================

const typingText =
    document.getElementById(
        "typingText"
    );


const phrases = [

    "real problems.",

    "secure systems.",

    "useful products.",

    "interesting ideas."

];


let phraseIndex = 0;


function changeHeroText() {

    phraseIndex =

        (phraseIndex + 1) %

        phrases.length;


    typingText.style.opacity =
        "0";


    setTimeout(() => {

        typingText.textContent =
            phrases[phraseIndex];


        typingText.style.opacity =
            "1";

    }, 250);

}


typingText.style.transition =
    "opacity 0.25s ease";


setInterval(

    changeHeroText,

    3000

);


// =====================================================
// CURRENT YEAR
// =====================================================

const currentYear =
    document.getElementById(
        "currentYear"
    );


currentYear.textContent =
    new Date().getFullYear();


// =====================================================
// NAVBAR SHADOW
// =====================================================

const header =
    document.querySelector(
        ".header"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.style.boxShadow =

                "0 10px 35px rgba(0, 0, 0, 0.25)";

        } else {

            header.style.boxShadow =
                "none";

        }

    }
);