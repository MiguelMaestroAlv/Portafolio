document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    menuButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});

