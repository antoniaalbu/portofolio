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
  
document.addEventListener('DOMContentLoaded', function() {
  // Create and append arrow elements to each card
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    // Create arrows
    const arrowRight = document.createElement('div');
    arrowRight.className = 'card-arrow-right';
    
    const arrowLeft = document.createElement('div');
    arrowLeft.className = 'card-arrow-left';
    
    const arrowBottom = document.createElement('div');
    arrowBottom.className = 'card-arrow-bottom';
    
    // Append arrows to card
    card.appendChild(arrowRight);
    card.appendChild(arrowLeft);
    card.appendChild(arrowBottom);
    
    // Add special animation for mobile
    if (window.matchMedia('(hover: none)').matches) {
      // For touch devices, add a class that reveals content on touch
      card.addEventListener('touchstart', function() {
        this.classList.add('card-touch-active');
      });
      
      // Add this class to handle touch devices
      const style = document.createElement('style');
      style.textContent = `
        .card-touch-active .card__content {
          transform: rotateX(0deg);
        }
        .card-touch-active {
          transform: translate(-5px, -5px);
          box-shadow: 17px 17px 0 #00b4ff;
        }
      `;
      document.head.appendChild(style);
    }
  });
  
  // Add shaking animation class to highlight cards
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add('shake-active');
    });
  }, 1000);
});