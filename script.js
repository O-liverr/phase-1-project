document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.book-now-btn').addEventListener('click', function() {
      document.getElementById('vehicles').scrollIntoView({ behavior: 'smooth' });
    });
  
    fetch('http://localhost:3000/vehicles')
      .then(res => res.json())
      .then(vehicles => {
        vehicles.forEach(vehicle => {
          console.log('Available:', vehicle.name);
        });
  
        document.querySelectorAll('.select-btn').forEach(btn => {
          btn.addEventListener('click', function() {
            const card = this.closest('.card');
            const title = card.querySelector('h3').textContent;
            
            if (this.textContent === 'Select') {
              this.textContent = 'Selected!';
              this.style.backgroundColor = '#2ecc71';
            }
          });
        });
      });
  
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for booking!');
      });
    }
  });