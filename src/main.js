import './scss/styles.scss';
const openMenu = document.querySelector('.open-btn');
const clickOnModal = document.querySelector('.nav-mobile-list');
const menuBackDrop = document.querySelector('.back-drop');
const closeMenu = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-wrapper');
const myBody = document.body;

const nextSlide = document.querySelector('.arrow-btn');
const slider = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const countSlides = sliderItems.length;
let currentIndex = 0;

const openModal = () => {
  modal.style.display = 'block';
  menuBackDrop.classList.add('active');
  myBody.classList.add('lock');
};

const closeModal = () => {
  modal.style.display = 'none';
  menuBackDrop.classList.remove('active');
  myBody.classList.remove('lock');
};

openMenu.addEventListener('click', openModal);

closeMenu.addEventListener('click', closeModal);

clickOnModal.addEventListener('click', closeModal);

const firstClone = sliderItems[sliderItems.length - 1].cloneNode(true);
const secondClone = sliderItems[sliderItems.length - 2].cloneNode(true);
const thirdClone = sliderItems[sliderItems.length - 3].cloneNode(true);

slider.prepend(firstClone);
slider.prepend(secondClone);
slider.prepend(thirdClone);

const allSliderItems = document.querySelectorAll('.slider-item');

const slideCount = allSliderItems.length;

slider.style.transform = `translateY(-${(slideCount - 3) * 176}px)`;

function sliderMove() {
  slider.style.transition = 'transform 0.5s ease-in-out';

  slider.style.transform = `translateY(-${
    (countSlides - currentIndex) * 176
  }px)`;

  if (currentIndex === countSlides + 1) {
    slider.style.transform = `translateY(-${(slideCount - 3) * 176}px)`;
    slider.style.transition = 'none';
    currentIndex = 0;
  }
}

const moveToNextSlide = () => {
  currentIndex++;
  sliderMove();
};

allSliderItems.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('text-active');
  });
});

nextSlide.addEventListener('click', moveToNextSlide);
