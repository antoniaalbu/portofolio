document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-container .btn');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');

    // Function to show the navbar
    function showNavbar() {
        navbar.style.display = 'flex'; // Set display to flex
        setTimeout(() => {
            navbar.classList.add('show'); // Add the show class after a short delay
        }, 10); // Delay to allow display change to take effect
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showNavbar();

            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('visible');
                section.style.display = 'none'; // Ensure it's hidden
            });

            // Show the target section
            const targetId = this.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('visible');
                targetSection.style.display = 'block'; // Show the section
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
            }
        });
    });
});
