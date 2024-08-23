const openMenu = document.querySelector('.open-btn');
// const header = document.querySelector('.header-container');
const menuBackDrop = document.querySelector('.back-drop');
const closeMenu = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-wrapper');

const openModal = () => {
  modal.style.display = 'block';
  menuBackDrop.classList.add('active');
};

const closeModal = () => {
  modal.style.display = 'none';
  menuBackDrop.classList.remove('active');
};

openMenu.addEventListener('click', openModal);

closeMenu.addEventListener('click', closeModal);
