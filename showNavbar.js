document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-container .btn');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.section');

    function showNavbar() {
        navbar.style.display = 'flex'; 
        setTimeout(() => {
            navbar.classList.add('show'); 
        }, 10); 
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            showNavbar();

            sections.forEach(section => {
                section.classList.remove('visible');
                section.style.display = 'none'; 
            });

            
            const targetId = this.dataset.target;
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('visible');
                targetSection.style.display = 'block'; 
                targetSection.scrollIntoView({ behavior: 'smooth' }); 
            }
        });
    });
});
