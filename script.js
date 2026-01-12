// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
// Scroll Reveal Animation
ScrollReveal({ reset: true });
ScrollReveal().reveal(".home-content, .heading", { origin: "top", distance: "80px", duration: 1000, delay: 200 });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom", distance: "80px", duration: 1000, delay: 200 });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left", distance: "80px", duration: 1000, delay: 200 });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right", distance: "80px", duration: 1000, delay: 200 });
// Typing Animation
const typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
