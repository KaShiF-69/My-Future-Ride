// Navbar JS Talha

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

// Number Stats Js Kashif

// Select all number counters
const counters = document.querySelectorAll(".counter-number");

function countUp(counter) {
  const target = +counter.getAttribute("data-target");
  let count = 0;
  const speed = 50; // speed of the count up in milliseconds

  const update = setInterval(() => {
    const step = Math.ceil(target / 100); // step value
    count += step;

    if (count >= target) {
      counter.innerText = target;
      clearInterval(update);
    } else {
      counter.innerText = count;
    }
  }, speed);
}

// Trigger on scroll
window.addEventListener("scroll", () => {
  const section = document.querySelector(".fact-box");
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight) {
    counters.forEach((counter) => {
      if (!counter.classList.contains("started")) {
        counter.classList.add("started");
        countUp(counter);
      }
    });
  }
});

// Show preloader for 3 seconds
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hide");
    }, 1000); // 1 second
  });
