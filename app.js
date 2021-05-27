const slide = () => {
  const burger = document.querySelector(".burger");
  const navbar = document.querySelector("#navbar");
  const slideMenu = document.querySelector(".slide-menu");
  const slideUl = document.querySelector(".slide-links");
  const navLinks = document.querySelectorAll(".nav-link");
  const body = document.querySelector(".body");

  burger.addEventListener("click", () => {
    slideMenu.classList.toggle("slide-menu-active");
    slideUl.classList.toggle("slide-links-active");
    navbar.classList.toggle("navbar-off");
    body.classList.toggle("body-overflow-active");
    burger.classList.toggle("toggle");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        slideMenu.classList.remove("slide-menu-active");
        slideUl.classList.remove("slide-links-active");
        navbar.classList.remove("navbar-off");
        body.classList.remove("body-overflow-active");
      });
    });
  });
};
slide();
