// hamburger 
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('main-nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error("Hamburger menu or navigation links not found. Check IDs in HTML.");
    }
});

// button 
// Get all the input fields and the textarea
const nameInput = document.querySelector('input[placeholder="Your Name"]');
const phoneInput = document.querySelector('input[placeholder="Phone Number"]');
const pickupInput = document.querySelector('input[placeholder="Pick Up point"]');
const dropoffInput = document.querySelector('input[placeholder="Drop Off point"]');
const messageTextarea = document.querySelector('textarea[placeholder="Your Message..."]');
const bookNowButton = document.querySelector('.btn-submit');

// Add an event listener to the button
bookNowButton.addEventListener('click', function(event) {
    event.preventDefault(); // Stop the form from submitting

    // Check if any of the required fields are empty
    if (nameInput.value === '' || phoneInput.value === '' || pickupInput.value === '' || dropoffInput.value === '' || messageTextarea.value === '') {
        alert('Please fill out all the fields before booking your ride.');
    } else {
        // All fields are filled, show the success message
        alert('Your ride has been booked!');
    }
});



// AOS Animation 
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hide");
    }, 1000);
  });

