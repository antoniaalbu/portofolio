document.addEventListener('DOMContentLoaded', () => {
    // Add the class to trigger the slide-in effect after the page loads
    const content = document.querySelector('.content-container');
    setTimeout(() => {
        content.classList.add('slide-in-active');
    }, 100); // Add a slight delay before the slide-in
});

window.addEventListener('DOMContentLoaded', (event) => {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
        navbar.classList.add('show'); // Show the navbar with a sliding effect
    }, 300); // Delay the appearance by 300ms for effect
});
