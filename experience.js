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
document.querySelectorAll('.small-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expanded');
    });
});

window.addEventListener('load', function() {
    if (window.innerWidth <= 900) {
        const section = document.getElementById('skills-experience');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
