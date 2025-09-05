document.addEventListener('DOMContentLoaded', () => {
  // Get the hamburger menu and the navigation links by their IDs
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('main-nav-links');

  // Check if the elements exist before adding event listeners
  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener('click', () => {
      // Toggle the 'active' class on the hamburger menu for animation
      hamburgerMenu.classList.toggle('active');
      // Toggle the 'active' class on the navigation links to show/hide them
      navLinks.classList.toggle('active');
    });
  } else {
    console.error("Hamburger menu or navigation links not found. Check IDs in HTML.");
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".client");
  const contentSections = document.querySelectorAll(".sign-up");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      contentSections.forEach(section => section.classList.remove("active"));

      button.classList.add("active");
      const targetId = button.getAttribute("data-target");
      document.getElementById(targetId).classList.add("active");
    });
  });

  buttons[0].click();
});



// Show preloader for 3 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
  }, 1000); // 1 second
});

// Get all the input fields and the textarea
const nameInput = document.querySelector('input[placeholder="Full Name *"]');
const phoneInput = document.querySelector('input[placeholder="Phone *"]');
const pickupInput = document.querySelector('input[placeholder="Email *"]');
const dropoffInput = document.querySelector('input[placeholder="Password *"]');
const bookNowButton = document.querySelector('.btn-submit');
const bookNowButtonRide = document.querySelector('.ride-btn');

bookNowButton.addEventListener('click', function (event) {
  event.preventDefault(); // Stop the form from submitting

  // Check if any of the required fields are empty
  if (nameInput.value === '' || phoneInput.value === '' || pickupInput.value === '' || dropoffInput.value === '') {
    alert('Please fill out all the fields before creating your account.');
  } else {
    // All fields are filled, show the success message
    alert('Your account has been created!');
  }
});
bookNowButtonRide.addEventListener('click', function (event) {
  event.preventDefault(); // Stop the form from submitting

  // Check if any of the required fields are empty
  if (nameInput.value === '' || phoneInput.value === '' || pickupInput.value === '' || dropoffInput.value === '') {
    alert('Please fill out all the fields before creating your account.');
  } else {
    // All fields are filled, show the success message
    alert('Your account has been created!');
  }
});