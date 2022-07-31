let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menu.onclick = function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = function () {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};