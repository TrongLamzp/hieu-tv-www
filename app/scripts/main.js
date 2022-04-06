// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
const header = document.querySelector('.header');
const headerHeight = header && header.offsetHeight;
console.log(header);
console.log(headerHeight);
console.log(scrollY);
window.addEventListener('scroll', debounceFn(scrollHeader, 50));
function scrollHeader(e) {
    const scrollY = window.pageYOffset;
    if(scrollY >= headerHeight) {
        header && header.classList.add('is-fixed');
        document.body.style.paddingTop = `${headerHeight}px`;
    }
    else {
        header && header.classList.remove('is-fixed');
        document.body.style.paddingTop = 0;
    }
}
function debounceFn(func, wait, imediate) {
    let timeout;
    return function() {
        let context = this,
        args =arguments;
        let later = function() {
            timeout = null;
            if(!imediate) func.apply(context,args);
        };
        let callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        callNow && func.apply(context,args);
    };

}

//!* toggle menu

const faBars = document.querySelector('.header-toggle');
const menu = document.querySelector('.header-list');
faBars.addEventListener('click', handleToggle);
function handleToggle(e) {
    e.target.classList.toggle('fa-times');
    e.target.classList.toggle('fa-bars');
    menu.classList.toggle('is-expand');

}

