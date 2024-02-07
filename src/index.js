import './styles/header.css'
import './styles/style.css'
import './styles/about.css'
import './styles/footer.css'
import './styles/contact.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, addCoins, removeTableData, stopLoading } from './display-controller.js';
import { coins } from "./coin-data";
import { coinWatch } from './fetch-data.js'


showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();


// Logic

let BTC = await coinWatch("BTC");
let ETH = await coinWatch("ETH");
let ADA = await coinWatch("ADA");
let LINK = await coinWatch("LINK");
let SOL = await coinWatch("SOL");
let TRX = await coinWatch("TRX");


coins.push(BTC, ETH, ADA, LINK, SOL, TRX);

console.log(coins);

// Every 6 seconds, get new data from API
setInterval(async () => {

    let BTC = await coinWatch("BTC");
    let ETH = await coinWatch("ETH");
    let ADA = await coinWatch("ADA");
    let LINK = await coinWatch("LINK");
    let SOL = await coinWatch("SOL");
    let TRX = await coinWatch("TRX");

    coins.splice(0, coins.length)
    coins.push(BTC, ETH, ADA, LINK, SOL, TRX);
    removeTableData();
    addCoins(coins);
}, 6000)

// Add coins to DOM

stopLoading();
addCoins(coins);