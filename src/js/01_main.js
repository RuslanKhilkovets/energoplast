const burger = document.querySelector(".burger-menu");
const navbar = document.querySelector(".mobile-navbar");
const openModalButton = document.querySelector(".open-modal");
const modal = document.querySelector(".modal");

const handleBurgerMenuOpen = () => {
    burger.classList.toggle("burger-active");
    navbar.classList.toggle("mobile-navbar--active")
}

const handleModal = () => {
    modal.classList.toggle("modal--active")
}

openModalButton.addEventListener("click",  handleModal)
burger.addEventListener("click", handleBurgerMenuOpen)