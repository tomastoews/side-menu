document.addEventListener('DOMContentLoaded', init());

function init() {
    const menuButton = document.querySelector('#menu-button');
    const menu = document.querySelector('nav');
    const menuCloseButton = document.querySelector('.close-button');

    menuButton.addEventListener('click', () => {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', () => {
        menu.classList.remove('open');
    });

}