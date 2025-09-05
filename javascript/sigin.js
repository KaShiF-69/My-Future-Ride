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
    }); // 1 second
  });

  // button
const pickupInput = document.querySelector('input[placeholder="Email *"]');
const dropoffInput = document.querySelector('input[placeholder="Password *"]');
const bookNowButtonRide = document.querySelector('.btn-submit');
const bookNowButtonDrive = document.querySelector('.ride-btn');

bookNowButtonRide.addEventListener('click', function (event) {
  event.preventDefault(); // Stop the form from submitting

  // Check if any of the required fields are empty
  if (pickupInput.value === '' || dropoffInput.value === '') {
    alert('Please fill out all the fields before signing in to your account.');
  } else {
    // All fields are filled, show the success message
    alert('You have successfully signed in!');
  }
});



