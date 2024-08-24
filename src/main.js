import './scss/styles.scss';
const openMenu = document.querySelector('.open-btn');
const clickOnModal = document.querySelector('.nav-mobile-list');
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

clickOnModal.addEventListener('click', closeModal);
