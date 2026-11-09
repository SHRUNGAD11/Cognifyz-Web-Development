
const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

// Open and close mobile navigation

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.textContent = isExpanded ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isExpanded);

});

// Close menu when a navigation link is selected

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});

// Smooth navigation is also enabled through CSS.
