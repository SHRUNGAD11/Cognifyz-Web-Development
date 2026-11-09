
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle mobile navigation
menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isExpanded = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

    menuToggle.textContent = isExpanded ? "✕" : "☰";

});

// Close navigation after clicking a link
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
