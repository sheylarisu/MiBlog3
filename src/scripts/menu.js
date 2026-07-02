const menu = document.querySelector('.menu-button');

menu.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', `${!expanded}`);


});