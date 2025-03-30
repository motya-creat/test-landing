
const first__header = document.getElementById('first__header');
const second__header = document.getElementById('second__header');

let lastScrollTop = 0;

window.onscroll = function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    first__header.classList.add('sticky');
    second__header.classList.add('sticky');
  } else {
    first__header.classList.remove('sticky');
    second__header.classList.remove('sticky');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};
