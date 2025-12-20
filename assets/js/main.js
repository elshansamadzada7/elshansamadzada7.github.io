const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const statusEl = document.querySelector(".status");
const contactForm = document.querySelector("#contact-form");

// Toggle mobile nav
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.getAttribute("data-open") === "true";
    mobileMenu.setAttribute("data-open", String(!open));
    mobileMenu.style.display = open ? "none" : "grid";
    menuToggle.setAttribute("aria-expanded", String(!open));
  });
}

// Demo contact form handler
if (contactForm && statusEl) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Sending...";
    setTimeout(() => {
      statusEl.textContent = "Thanks! This is a demo submission.";
      contactForm.reset();
    }, 700);
  });
}

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all panels and cards
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll(".panel");
  const cards = document.querySelectorAll(".card");
  
  [...panels, ...cards].forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});

