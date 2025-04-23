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


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('open'); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("aboutCard");
  
    card.addEventListener("click", () => {
      card.classList.toggle("open");
    });
  });
  
  