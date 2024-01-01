import './style.css'
import './assets/logo-dark.png'

// Get DOM elements
const container = document.querySelector(".container");
const hamburgerMenu = document.querySelector(".hamburger");
const bottomNav = document.querySelector(".bottom-nav")
const topNav = document.querySelector(".top-nav")
const searchBar = document.getElementById("search")


document.addEventListener("DOMContentLoaded", () => {
    hamburgerMenu.addEventListener("click", () => {
        bottomNav.classList.toggle("active")
        container.classList.toggle("active")
    })
})
