import './scss/styles.scss';
import './js/accordion.js';
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
const lineSlider = document.querySelector('.line-slider-wrapper');
let currentIndex = 0;
let currentCloud = 0;

// =========================================================================
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryButtons = document.querySelector('.gallery-buttons');
const galleryBtn = document.querySelectorAll('.gallery-btn');
const galleryItemsIndex = galleryItems.length;
const gallerybuttonsIndex = galleryBtn.length;

galleryButtons.addEventListener('click', event => {
  const target = event.target;

  if (target.tagName === 'LI') {
    const btnIndex = Array.prototype.indexOf.call(
      galleryButtons.children,
      target
    );
    galleryItems.forEach(item => {
      item.classList.remove('gallery-active');
    });
    galleryItems[btnIndex].classList.add('gallery-active');
  }
});
// =============================================================================

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

let slideCount = allSliderItems.length;

slider.style.transform = `translateY(-${(slideCount - 3) * 176}px)`;

const lineSliderItems = document.querySelectorAll('.line-slider-item');
const maxIndex = lineSliderItems.length;

const firstCloneCloud = lineSliderItems[0].cloneNode(true);
const secondCloneCloud = lineSliderItems[1].cloneNode(true);
const thirdCloneCloud = lineSliderItems[2].cloneNode(true);

lineSlider.append(firstCloneCloud);
lineSlider.append(secondCloneCloud);
lineSlider.append(thirdCloneCloud);
const newSliderItems = document.querySelectorAll('.line-slider-item');
const countCloud = newSliderItems.length;

lineSliderItems[0].classList.add('right-cloud');
lineSliderItems[1].classList.add('center-cloud');
lineSliderItems[2].classList.add('left-cloud');

function cloudMove() {
  if (currentCloud === maxIndex) {
    currentCloud = 0;
    newSliderItems[0].classList.add('right-cloud');
    newSliderItems[1].classList.add('center-cloud');
    newSliderItems[2].classList.add('left-cloud');
    newSliderItems[countCloud - 2].classList.remove('left-cloud');
    newSliderItems[countCloud - 3].classList.remove('center-cloud');
    newSliderItems[countCloud - 4].classList.remove('right-cloud');
  }

  if (newSliderItems[currentCloud].previousElementSibling) {
    newSliderItems[currentCloud].previousElementSibling.classList.remove(
      'right-cloud'
    );
  }

  newSliderItems[currentCloud].classList.replace('center-cloud', 'right-cloud');

  if (lineSliderItems[currentCloud].nextElementSibling) {
    newSliderItems[currentCloud].nextElementSibling.classList.replace(
      'left-cloud',
      'center-cloud'
    );
  }

  if (newSliderItems[currentCloud + 1].nextElementSibling) {
    newSliderItems[currentCloud + 1].nextElementSibling.classList.add(
      'left-cloud'
    );
  }
}

window.addEventListener('resize', function () {
  this.location.reload();
});

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
  currentCloud++;

  if (window.innerWidth < 1439) {
    sliderMove();
  } else {
    cloudMove();
  }
};

allSliderItems.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('text-active');
  });
});

newSliderItems.forEach(item => {
  item.addEventListener('click', function () {
    this.classList.toggle('text-active');
  });
});

nextSlide.addEventListener('click', moveToNextSlide);
