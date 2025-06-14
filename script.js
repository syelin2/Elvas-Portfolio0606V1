document.addEventListener('DOMContentLoaded', function () {
  // Create references to the menu icon and navigation menu
  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');

  // Function to toggle the visibility of the navigation menu
  function toggleNavMenu() {
    if (navMenu.style.display === 'block') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'block';
    }
  }

  // Initialize the Typed.js library
  let typed = new Typed(".auto-type", {
    strings: ["Professor", "Educator"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

  // You can add any other JavaScript code you need here.
});