document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content-container');
    setTimeout(() => {
        content.classList.add('slide-in-active');
    }, 100); 
});

window.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
        navbar.classList.add('show');
    }, 300); 
});
