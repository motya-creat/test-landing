
// const first__header = document.getElementById('first__header');
// const second__header = document.getElementById('second__header');

// let lastScrollTop = 0;

// window.onscroll = function() {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     first__header.classList.add('sticky');
//     second__header.classList.add('sticky');
//   } else {
//     first__header.classList.remove('sticky');
//     second__header.classList.remove('sticky');
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// };

let lastScrollTop = 0;
const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        headerTop.style.top = '-50px'; // Скрыть верхнюю шапку
        headerBottom.style.top = '0'; // Показать нижнюю шапку
    } else {
        // Прокрутка вверх
        headerTop.style.top = '0'; // Показать верхнюю шапку
        headerBottom.style.top = '50px'; // Скрыть нижнюю шапку
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для мобильных устройств
});