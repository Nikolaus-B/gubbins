const nextSlide = document.querySelector('.arrow-btn');
const slider = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
const countSlides = sliderItems.length;
const lineSlider = document.querySelector('.line-slider-wrapper');
let currentIndex = 0;
let currentCloud = 0;

const firstClone = sliderItems[sliderItems.length - 1].cloneNode(true);
const secondClone = sliderItems[sliderItems.length - 2].cloneNode(true);
const thirdClone = sliderItems[sliderItems.length - 3].cloneNode(true);

slider.prepend(firstClone);
slider.prepend(secondClone);
slider.prepend(thirdClone);

const allSliderItems = document.querySelectorAll('.slider-item');

let slideCount = allSliderItems.length;

slider.style.transform = `translateY(-${(slideCount - 3) * 172}px)`;

const lineSliderItems = document.querySelectorAll('.line-slider-item');
const maxIndex = lineSliderItems.length;

const firstStartCloneCloud = lineSliderItems[0].cloneNode(true);
const firstCloneCloud = lineSliderItems[0].cloneNode(true);
const secondCloneCloud = lineSliderItems[1].cloneNode(true);
const thirdCloneCloud = lineSliderItems[2].cloneNode(true);

lineSlider.prepend(firstStartCloneCloud);
lineSlider.append(firstCloneCloud);
lineSlider.append(secondCloneCloud);
lineSlider.append(thirdCloneCloud);

const newSliderItems = document.querySelectorAll('.line-slider-item');
const countCloud = newSliderItems.length;

lineSliderItems[0].classList.add('right-cloud');
lineSliderItems[1].classList.add('center-cloud');
lineSliderItems[2].classList.add('left-cloud');

newSliderItems[currentCloud + 1].style.top = '110px';
newSliderItems[currentCloud + 1].style.right = '2px';
newSliderItems[currentCloud + 1].style.zIndex = '4';

newSliderItems[currentCloud + 2].style.top = '210px';
newSliderItems[currentCloud + 2].style.right = '252px';
newSliderItems[currentCloud + 2].style.zIndex = '4';

newSliderItems[currentCloud + 3].style.top = '70px';
newSliderItems[currentCloud + 3].style.right = '552px';
newSliderItems[currentCloud + 3].style.zIndex = '3';

function cloudMove() {
  if (currentCloud === maxIndex + 1) {
    currentCloud = 0;

    newSliderItems[newSliderItems.length - 1].transition = 'none';
    newSliderItems[newSliderItems.length - 1].style.zIndex = '0';
    newSliderItems[newSliderItems.length - 1].style.top = '0px';
    newSliderItems[newSliderItems.length - 1].style.right = '300px';

    newSliderItems[newSliderItems.length - 2].transition = 'none';
    newSliderItems[newSliderItems.length - 2].style.zIndex = '0';
    newSliderItems[newSliderItems.length - 2].style.top = '0px';
    newSliderItems[newSliderItems.length - 2].style.right = '300px';

    newSliderItems[newSliderItems.length - 3].transition = 'none';
    newSliderItems[newSliderItems.length - 3].style.zIndex = '0';
    newSliderItems[newSliderItems.length - 3].style.top = '0px';
    newSliderItems[newSliderItems.length - 3].style.right = '300px';
  }

  newSliderItems[currentCloud].style.top = '0px';
  newSliderItems[currentCloud].style.right = '300px';
  newSliderItems[currentCloud].style.zIndex = '0';

  newSliderItems[currentCloud + 1].style.top = '110px';
  newSliderItems[currentCloud + 1].style.right = '2px';
  newSliderItems[currentCloud + 1].style.zIndex = '3';

  newSliderItems[currentCloud + 2].style.top = '210px';
  newSliderItems[currentCloud + 2].style.right = '252px';
  newSliderItems[currentCloud + 2].style.zIndex = '4';

  newSliderItems[currentCloud + 3].style.top = '70px';
  newSliderItems[currentCloud + 3].style.right = '552px';
  newSliderItems[currentCloud + 3].style.zIndex = '3';
}

window.addEventListener('resize', function () {
  this.location.reload();
});

function sliderMove() {
  slider.style.transition = '500ms cubic-bezier(0.4, 0, 0.2, 1)';

  slider.style.transform = `translateY(-${
    (countSlides - currentIndex) * 172
  }px)`;

  if (currentIndex === countSlides + 1) {
    slider.style.transform = `translateY(-${(slideCount - 3) * 172}px)`;
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
