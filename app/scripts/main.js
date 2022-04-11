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
window.addEventListener('scroll', debounceFn(scrollHeader, 10));
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
const headerIcon = document.querySelector('.header-content');
const iconMenu = document.querySelector('.header-toggle');

headerIcon.addEventListener('click', handleHeader);

function handleHeader(e) {
    const content = e.target.nextElementSibling;
    content.classList.toggle('is-show');
    content.style.height = `${content.scrollHeight}px`;
    if(!content.classList.contains('is-show')) {
        content.style.height = "0px";
    }
    
    iconMenu.classList.toggle('fa-bars');
    iconMenu.classList.toggle('fa-skull');
    
}
//! document remove class
// document.addEventListener('click', documentRemove);
// function documentRemove(e) {
//     const headerBottom = document.querySelector('.header-bottom');
//     console.log(headerBottom);
//  if(!headerIcon.contains(e.target) && !e.target.matches(".header-toggle")) {
//      headerBottom.classList.remove("is-show");
//  }
// }

