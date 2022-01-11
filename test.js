const toogleBtn = document.querySelector('.navbar_toggleBnt');
const menu = document.querySelector('.nav_menu');
const icon = document.querySelector('.nav_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});