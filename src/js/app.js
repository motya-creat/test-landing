// let lastScroll = 0
// const defaultOffset = 200
// const header = document.querySelector('.first__header');

// const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
// const containHide = () => header.classList.contains('hide')

// window.addEventListener('scroll', () => {

//     if (scrollPosition() > lastScroll && !containHide()) {
//         //scroll down
//         console.log('down')
//         header.classList.add(`hide`)
//     } else if (scrollPosition() < lastScroll && containHide()) {
//         //scroll up
//         console.log('up')
//         header.classList.remove(`hide`)
//     }

//     lastScroll = scrollPosition()
// })

// const secondHeader = documentSelector('.second__header')
// window.addEventListener('header_fix', () => {

//     if (header.classList('hide')) {
//         secondHeader.classList.add('top')
//     } else{
//         secondHeader.classList.remove('top')
//     }
// })


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
