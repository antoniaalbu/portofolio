document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('show');

    const content = document.querySelector('.content-container');
    setTimeout(() => {
        content.classList.add('slide-in-active');
    }, 100);

    currentSlide = 0;
    showSlide(currentSlide);
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('show');

    const content = document.querySelector('.content-container');
    setTimeout(() => {
        content.classList.add('slide-in-active');
    }, 100); 
});



