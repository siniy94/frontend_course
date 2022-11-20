$(window).on('load', function() {
    console.log('navigation-hamburger');

    const hamburgerBtn = document.querySelector('.navigation-hamburger');
    const mobileMenu = document.querySelector('.navigation__list--animation');
    const closeMenuBtn = document.querySelector('.navigation__close-icon');
    const navLinks = document.querySelectorAll('.navigation__link');

    hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.add('visible');
    });

    closeMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('visible');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            mobileMenu.classList.remove('visible');

            const elementToScroll = document.querySelector(event.target.getAttribute('href'));
            elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start'});
        });
    });
});