const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {
    navMenu.classList.toggle("show-menu");

    if (navMenu.classList.contains("show-menu")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("show-menu");
        menuButton.textContent = "☰";
    });
});