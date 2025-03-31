// Header
let lastScrollTop = 0;
const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        headerTop.style.top = '-50px'; 
        headerBottom.style.top = '0'; 
    } else {
        headerTop.style.top = '0'; 
        headerBottom.style.top = '50px';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});