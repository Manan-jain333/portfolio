
// // Smooth scrolling for navigation links
// const navLinks = document.querySelectorAll("nav a");
// navLinks.forEach(link => {
//     link.addEventListener("click", function(event) {
//         event.preventDefault();
//         const targetSection = document.querySelector(this.getAttribute("href"));
//         targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
//     });
// });

// // GSAP animations
// window.addEventListener("DOMContentLoaded", () => {
//     gsap.from("header nav ul li", { 
//         duration: 0.8, 
//         y: -30, 
//         opacity: 0, 
//         stagger: 0.2 
//     });

//     gsap.from("#hero .profile-circle", { 
//         duration: 1, 
//         scale: 0.8, 
//         opacity: 0, 
//         ease: "elastic.out(1, 0.5)" 
//     });

//     gsap.from("#hero h1", { 
//         duration: 1, 
//         x: -100, 
//         opacity: 0, 
//         delay: 0.5 
//     });

//     gsap.from("#hero h2", { 
//         duration: 1, 
//         x: 100, 
//         opacity: 0, 
//         delay: 0.7 
//     });

//     gsap.from("#hero p", { 
//         duration: 1, 
//         y: 50, 
//         opacity: 0, 
//         delay: 0.9 
//     });

//     gsap.from(".hero-buttons .btn", { 
//         duration: 1, 
//         scale: 0.9, 
//         opacity: 0, 
//         stagger: 0.2, 
//         delay: 1 
//     });

//     gsap.from("#projects .project", { 
//         duration: 1, 
//         y: 50, 
//         opacity: 0, 
//         stagger: 0.3, 
//         delay: 0.5 
//     });

//     gsap.from("#education .education-item", { 
//         duration: 1, 
//         x: -50, 
//         opacity: 0, 
//         stagger: 0.3, 
//         delay: 0.5 
//     });

//     gsap.from("#certifications .certification-item", { 
//         duration: 1, 
//         x: 50, 
//         opacity: 0, 
//         stagger: 0.3, 
//         delay: 0.5 
//     });

//     gsap.from("footer", { 
//         duration: 1, 
//         y: 30, 
//         opacity: 0, 
//         delay: 0.5 
//     });
// });

// // Form submission alert with validation
// const contactForm = document.querySelector("#contact form");
// if (contactForm) {
//     contactForm.addEventListener("submit", function(event) {
//         event.preventDefault();

//         // Form fields
//         const name = contactForm.name.value.trim();
//         const email = contactForm.email.value.trim();
//         const message = contactForm.message.value.trim();

//         if (!name || !email || !message) {
//             alert("Please fill out all fields before submitting the form.");
//             return;
//         }

//         if (!validateEmail(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         alert("Thank you for reaching out! Your message has been sent successfully.");
//         contactForm.reset();
//     });
// }

// // Email validation function
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// // Scroll-to-top button
// const scrollTopButton = document.createElement("button");
// scrollTopButton.textContent = "↑";
// scrollTopButton.className = "scroll-top";
// document.body.appendChild(scrollTopButton);

// scrollTopButton.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// });

// window.addEventListener("scroll", () => {
//     scrollTopButton.style.display = window.scrollY > 200 ? "block" : "none";
// });

// // Highlight active navigation link on scroll
// window.addEventListener("scroll", () => {
//     const sections = document.querySelectorAll("section");
//     const scrollPos = window.scrollY + 100;

//     navLinks.forEach(link => {
//         link.classList.remove("active");
//     });

//     sections.forEach(section => {
//         if (
//             scrollPos >= section.offsetTop &&
//             scrollPos < section.offsetTop + section.offsetHeight
//         ) {
//             const id = section.getAttribute("id");
//             document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
//         }
//     });
// });

// const canvas = document.createElement("canvas");
// document.body.appendChild(canvas);

// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let particles = [];

// function createParticles() {
//     for (let i = 0; i < 50; i++) {
//         particles.push({
//             x: Math.random() * canvas.width,
//             y: Math.random() * canvas.height,
//             radius: Math.random() * 5 + 2,
//             dx: (Math.random() - 0.5) * 2,
//             dy: (Math.random() - 0.5) * 2,
//         });
//     }
// }

// function drawParticles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
//         ctx.fill();
//     });
// }

// function animateParticles() {
//     particles.forEach(p => {
//         p.x += p.dx;
//         p.y += p.dy;

//         if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
//     });

//     drawParticles();
//     requestAnimationFrame(animateParticles);
// }

// createParticles();
// animateParticles();

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

// GSAP animations
window.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Header navigation animation
    gsap.from("header nav ul li", { 
        duration: 0.8, 
        y: -30, 
        opacity: 0, 
        stagger: 0.2 
    });

    // Hero section animations
    gsap.from("#hero .profile-circle", { 
        duration: 1, 
        scale: 0.8, 
        opacity: 0, 
        ease: "elastic.out(1, 0.5)" 
    });

    gsap.from("#hero h1", { 
        duration: 1, 
        x: -100, 
        opacity: 0, 
        delay: 0.5 
    });

    gsap.from("#hero h2", { 
        duration: 1, 
        x: 100, 
        opacity: 0, 
        delay: 0.7 
    });

    gsap.from("#hero p", { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        delay: 0.9 
    });

    gsap.from(".hero-buttons .btn", { 
        duration: 1, 
        scale: 0.9, 
        opacity: 0, 
        stagger: 0.2, 
        delay: 1 
    });

    // Scroll-triggered animations for sections
    gsap.from("#projects .project", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
    });

    gsap.from("#education .education-item", {
        scrollTrigger: {
            trigger: "#education",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        x: -50,
        opacity: 0,
        stagger: 0.3,
    });

    gsap.from("#certifications .certification-item", {
        scrollTrigger: {
            trigger: "#certifications",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        x: 50,
        opacity: 0,
        stagger: 0.3,
    });

    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse",
        },
        duration: 1,
        y: 30,
        opacity: 0,
    });
});

// Form submission alert with validation
const contactForm = document.querySelector("#contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Form fields
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const message = contactForm.message.value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting the form.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you for reaching out! Your message has been sent successfully.");
        contactForm.reset();
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Scroll-to-top button
const scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "↑";
scrollTopButton.className = "scroll-top";
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    scrollTopButton.style.display = window.scrollY > 200 ? "block" : "none";
});

// Highlight active navigation link on scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 100;

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            const id = section.getAttribute("id");
            document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
        }
    });
});

// Canvas particles background
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticles() {
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 2,
            dx: (Math.random() - 0.5) * 2,
            dy: (Math.random() - 0.5) * 2,
        });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.fill();
    });
}

function animateParticles() {
    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    drawParticles();
    requestAnimationFrame(animateParticles);
}

createParticles();
animateParticles();
