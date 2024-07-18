document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".navbar");
    const header = document.querySelector("header");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show-nav");
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const joinNowButton = document.querySelector(".btn");
    const pricingSection = document.querySelector(".section2");

    joinNowButton.addEventListener("click", function (e) {
        e.preventDefault();
        pricingSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navbar ul');

    // Function to toggle the 'active' class on the nav menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Function to add 'scrolled' class to the navbar when the page is scrolled
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

