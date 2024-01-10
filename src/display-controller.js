import { coinWatch } from "./fetch-data";

// Show hamburger menu
export function showMenu() {
    // When DOM content is loaded, add an event listener to
    // hamburger menu, when clicked toggle .active class
    document.addEventListener("DOMContentLoaded", () => {
    // Get hamburger-menu
    const hamburgerMenu = document.querySelector(".hamburger");
    hamburgerMenu.addEventListener("click", () => {
        // Get bottom nav bar
        const bottomNav = document.querySelector(".bottom-nav");
        bottomNav.classList.toggle("active")
    })
})
}

// Move search bar and currency selector to
// hamburger menu when screen is <= 900
export function moveSearchSelect() {
    // Select bottom and top navbars
    const topNav = document.querySelector(".top-nav");
    const bottomNav = document.querySelector(".bottom-nav");
    // Select search and select
    const searchContainer = document.querySelector(".search-container");
    const selectContainer = document.querySelector(".select-container");

    // If window width is <= 900
    if(window.innerWidth <= 900) {
        bottomNav.append(selectContainer, searchContainer);
    } else {
        topNav.append(selectContainer, searchContainer);
    }
}

// Check which page in the website we are in
export function checkPage() {
    document.addEventListener("DOMContentLoaded", () => {
        // Get the current URL
        const currentPage = window.location.pathname;

        // Remove 'active' class from all nav links
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.classList.remove("active");
            link.firstChild.classList.remove("active");
        });

        // Check which page we are in
        if(currentPage === "/dist/index.html") {
            // Set class to 'active'
            document.querySelector(".nav-link:first-child").classList.add("active");
            document.querySelector(".nav-link:first-child").firstChild.classList.add("active");
        }
        else if (currentPage === "/dist/about.html")
        {
            document.querySelector(".nav-link:nth-child(2)").classList.add("active");
            document.querySelector(".nav-link:nth-child(2)").firstChild.classList.add("active");
        }
        else if (currentPage === "/dist/contact.html")
        {
            document.querySelector(".nav-link:nth-child(3)").classList.add("active");
            document.querySelector(".nav-link:nth-child(3)").firstChild.classList.add("active"); 
        }
    })
}

// Coin creator, takes information and will be used to
// make a 'coin-card'
export function coinCreator(number, name, price, hour, day, marketCap, volume, circulatingSupply) {
    const table = document.querySelector(".crypto-list table");
    const row = document.createElement("tr");
    row.classList.add("table-row", "coin-info")
    table.append(row);

    for(let i = 0; i < 8; i++) {
        const data = arguments;
        const td = document.createElement("td");
        row.append(td);

        const span = document.createElement("span");
        td.append(span);

        span.textContent = arguments[i];
    }
}

// Function that makes big numbers easier to
// read
function addCommasToNumber(number) {
    // Convert the number to a string
    let numString = number.toString();
  
    // Use a regular expression to add commas
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return numString;
}


// Use data from API and coinCreator func. to
// add real-time data about cryptocurrencies
export async function addCoin(coin) {
    const coinData = await coinWatch(coin);

    // Adjust data
    const rank = coinData.rank;
    const name = coinData.name;
    const price = `$${addCommasToNumber(coinData.price.toFixed(2))}`;
    const hour = ((coinData.hour - 1) * 100).toFixed(2);
    const day = ((coinData.day - 1) * 100).toFixed(2);
    const marketCap = `$${addCommasToNumber(coinData.marketCap)}`;
    const volume = `$${addCommasToNumber(coinData.volume)}`;
    const circulatingSupply = `$${addCommasToNumber(coinData.circulatingSupply)}`;
    
    coinCreator(rank, name, price, hour, day, marketCap, volume, circulatingSupply);
}