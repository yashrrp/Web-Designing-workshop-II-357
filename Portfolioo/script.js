// =========================================================
// YASHRAJ RAJPUT PORTFOLIO - JAVASCRIPT
// =========================================================


// =========================================================
// 1. MOBILE MENU
// =========================================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        // Change hamburger icon
        if (nav.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });

}


// =========================================================
// 2. CLOSE MOBILE MENU AFTER CLICKING LINK
// =========================================================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


// =========================================================
// 3. MOUSE FOLLOWING PURPLE GLOW
// =========================================================

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});


// =========================================================
// 4. NAVBAR SCROLL EFFECT
// =========================================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5, 5, 7, 0.94)";

        navbar.style.borderBottomColor =
            "rgba(139, 92, 246, 0.18)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0, 0, 0, 0.3)";

    } else {

        navbar.style.background =
            "rgba(5, 5, 7, 0.72)";

        navbar.style.borderBottomColor =
            "rgba(255, 255, 255, 0.08)";

        navbar.style.boxShadow =
            "0 0 30px rgba(139, 92, 246, 0.04)";

    }

});


// =========================================================
// 5. SCROLL REVEAL ANIMATION
// =========================================================

const revealElements = document.querySelectorAll(
    ".section, .contact, .project-card, .skill-card, .timeline-item, .code-card"
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

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


// =========================================================
// 6. EXTRA BOX GLOW ON TOUCH / CLICK
// =========================================================

const glowBoxes = document.querySelectorAll(
    ".section, .contact, .skill-card, .project-card, .timeline-item, .code-card"
);


glowBoxes.forEach((box) => {

    // Mouse enters box
    box.addEventListener("mouseenter", () => {

        box.classList.add("active-glow");

    });


    // Mouse leaves box
    box.addEventListener("mouseleave", () => {

        box.classList.remove("active-glow");

    });


    // Touch / click
    box.addEventListener("touchstart", () => {

        box.classList.add("active-glow");

        setTimeout(() => {

            box.classList.remove("active-glow");

        }, 800);

    });

});


// =========================================================
// 7. PROJECT CARD CLICK EFFECT
// =========================================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.style.transform =
            "translateY(-12px) scale(1.015)";

        setTimeout(() => {

            card.style.transform =
                "";

        }, 300);

    });

});


// =========================================================
// 8. SMOOTH BUTTON INTERACTION
// =========================================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transition =
            "0.25s ease";

    });

});


// =========================================================
// 9. DYNAMIC FOOTER YEAR
// =========================================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Yashraj Rajput. Built with HTML, CSS & JavaScript.`;

}


// =========================================================
// 10. PARALLAX EFFECT FOR CODE CARD
// =========================================================

const codeCard = document.querySelector(".code-card");

if (codeCard) {

    document.addEventListener("mousemove", (event) => {

        // Only apply on larger screens
        if (window.innerWidth > 900) {

            const x =
                (window.innerWidth / 2 - event.clientX) / 70;

            const y =
                (window.innerHeight / 2 - event.clientY) / 70;

            codeCard.style.transform =
                `rotate(1deg) translate(${x}px, ${y}px)`;

        }

    });

}


// =========================================================
// 11. ACTIVE NAVIGATION LINK
// =========================================================

const sections = document.querySelectorAll(
    "section[id]"
);

const navigationLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.style.color = "#999";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color = "#ffffff";

            link.style.textShadow =
                "0 0 12px rgba(139,92,246,0.8)";

        }

    });

});


// =========================================================
// 12. DISABLE PARALLAX ON MOBILE
// =========================================================

window.addEventListener("resize", () => {

    if (window.innerWidth <= 900 && codeCard) {

        codeCard.style.transform =
            "rotate(0deg)";

    }

});


// =========================================================
// 13. WELCOME MESSAGE
// =========================================================

console.log(
    "%c YASHRAJ RAJPUT ",
    `
    background: #8b5cf6;
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding: 8px 15px;
    border-radius: 6px;
    `
);

console.log(
    "%cWelcome to my portfolio 🚀",
    `
    color: #a78bfa;
    font-size: 14px;
    font-weight: bold;
    `
);