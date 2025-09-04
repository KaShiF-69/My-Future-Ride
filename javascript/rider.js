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



  // Show preloader for 3 seconds
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hide");
    }, 1000); // 1 second
  });

