const openMenu = document.querySelector('.open-btn');
const header = document.querySelector('.header-container');
const menuBackDrop = document.querySelector('.back-drop');
const closeMenu = document.querySelector('.close-btn');
const body = document.body;

const openModal = () => {
  menuBackDrop.classList.add('active');
  body.classList.add('lock');
};

const closeModal = () => {
  menuBackDrop.classList.remove('active');
  body.classList.remove('lock');
};

openMenu.addEventListener('click', openModal);

closeMenu.addEventListener('click', closeModal);
