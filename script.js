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
    gsap.from("header nav ul li", { duration: 0.8, y: -30, opacity: 0, stagger: 0.2 });
    gsap.from("#hero .profile-circle", { duration: 1, scale: 0.8, opacity: 0, ease: "elastic.out(1, 0.5)" });
    gsap.from("#hero h1", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from("#hero h2", { duration: 1, x: 100, opacity: 0, delay: 0.7 });
    gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 0.9 });
    gsap.from(".hero-buttons .btn", { duration: 1, scale: 0.9, opacity: 0, stagger: 0.2, delay: 1 });

    gsap.from("#projects .project", { duration: 1, y: 50, opacity: 0, stagger: 0.3, delay: 0.5 });
    gsap.from("#education .education-item", { duration: 1, x: -50, opacity: 0, stagger: 0.3, delay: 0.5 });
    gsap.from("#certifications .certification-item", { duration: 1, x: 50, opacity: 0, stagger: 0.3, delay: 0.5 });
    gsap.from("footer", { duration: 1, y: 30, opacity: 0, delay: 0.5 });
});

// Form submission alert
const contactForm = document.querySelector("#contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! Your message has been sent successfully.");
        contactForm.reset();
    });
}
