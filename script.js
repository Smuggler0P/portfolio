const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");
document.getElementById("year").textContent = new Date().getFullYear();

// Toggle navbar on menu icon click
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// Highlight active nav link based on scroll position
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Adjust offset as needed
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav ul li a[href*=${id}]`)
        .classList.add("active");
    }
  });
});
