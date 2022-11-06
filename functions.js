const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('nav');
const menuStyles = window.getComputedStyle(menu)



menuBtn.addEventListener("click", function() {
    if (menuStyles.getPropertyValue('clip-path') === 'circle(0% at 100% 0%)') {

        menu.style.clipPath = 'circle(100% at 50% 50%)'
    }
    else {
        menu.style.clipPath = 'circle(0% at 100% 0%)'
    }
})

