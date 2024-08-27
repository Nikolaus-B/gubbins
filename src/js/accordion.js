import questionMark from '../img/faq/question-mark.png';
import cross from '../img/faq/cross.png';

document.querySelectorAll('.faq-item').forEach(function (item) {
  item
    .querySelector('.faq-item-icon-container')
    .addEventListener('click', function () {
      const allItems = document.querySelectorAll('.faq-item');

      if (item.classList.contains('open')) {
        item.classList.remove('open');
        item
          .querySelector('.faq-item-content')
          .classList.add('visually-hidden');
        item.querySelector('.faq-item-image').src = questionMark;
        return;
      }

      allItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem
            .querySelector('.faq-item-content')
            .classList.add('visually-hidden');
          otherItem.querySelector('.faq-item-image').src = questionMark;
        }
      });

      item.classList.add('open');
      item.querySelector('.faq-item-image').src = cross;
      setTimeout(() => {
        item
          .querySelector('.faq-item-content')
          .classList.remove('visually-hidden');
      }, 100);
    });
});
