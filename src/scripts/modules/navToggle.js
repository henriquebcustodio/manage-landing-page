const openNav = document.querySelector('.header__open-nav');
const closeNav = document.querySelector('.header__close-nav');
const navbar = document.querySelector('.navbar');
const backdrop = document.querySelector('.backdrop');
const body = document.body;
let isOpen = false;

const toggle = () => {
    openNav.classList.toggle('header__open-nav--visible');
    closeNav.classList.toggle('header__close-nav--visible');
    navbar.classList.toggle('navbar--visible');
    backdrop.classList.toggle('backdrop--visible');
    isOpen = !isOpen;

    isOpen ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';
};

const setNavToggle = () => {
    openNav.addEventListener('click', toggle);
    closeNav.addEventListener('click', toggle);
    backdrop.addEventListener('click', toggle);
};

export default setNavToggle;