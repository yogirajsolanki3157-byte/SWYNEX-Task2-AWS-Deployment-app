// SWYNEX Cloud Portfolio

document.addEventListener("DOMContentLoaded", function () {

    console.log("SWYNEX Cloud Portfolio Loaded Successfully!");

    // Welcome message
    const heroTitle = document.querySelector(".hero h1");

    heroTitle.addEventListener("click", function () {
        alert("Welcome to SWYNEX Cloud Portfolio!");
    });

    // Navigation active effect
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });

});