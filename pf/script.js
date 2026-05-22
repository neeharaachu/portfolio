document.addEventListener("DOMContentLoaded", () => {
    // Menu toggle
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    // Typed.js
    var typed = new Typed(".multiple-text", {
        strings: ["Web Developer", "UI/UX Designer", "VR Developer", "Game Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.onclick = () => {
    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        icon.classList.replace("bx-moon", "bx-sun");
    } else {
        icon.classList.replace("bx-sun", "bx-moon");
    }
};






