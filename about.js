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

// JavaScript to toggle the display of the image and content
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('open'); // Toggle the open class to show content and hide the image
    });
});
