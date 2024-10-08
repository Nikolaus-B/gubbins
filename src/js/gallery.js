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
    galleryBtn.forEach(item => {
      item.classList.remove('gallery-btn-active');
    });
    galleryBtn[btnIndex].classList.add('gallery-btn-active');
  }
});
