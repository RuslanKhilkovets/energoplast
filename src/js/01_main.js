const burger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".mobile-navbar");
const openModalButton = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");

const handleBurgerMenuOpen = () => {
  burger.classList.toggle("burger-active");
  navbar.classList.toggle("mobile-navbar--active");
  document.body.classList.toggle("open-burger");
};

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar__list--link, .mobile-navbar__list--link");
  const currentUrl = window.location.pathname;

  links.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
          link.classList.add("active");
      }
  });
});


burger.addEventListener("click", handleBurgerMenuOpen);
