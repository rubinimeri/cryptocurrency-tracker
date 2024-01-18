import './styles/header.css'
import './styles/style.css'
import './styles/about.css'
import './styles/footer.css'
import './styles/contact.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, addCoins, removeTableData } from './display-controller.js';
import { coins } from "./coin-data";
import { coinWatch } from './fetch-data.js'


showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();


// Logic

let BTC = await coinWatch("BTC");
let ETH = await coinWatch("ETH");
let BNB = await coinWatch("BNB");
let USDT = await coinWatch("USDT");
let SOL = await coinWatch("SOL");
let XRP = await coinWatch("XRP");

coins.push(BTC, ETH, USDT, BNB, SOL, XRP);

// Every 6 seconds, get new data from API
/* setInterval(async () => {
    BTC = await coinWatch("BTC");
    ETH = await coinWatch("ETH");
    BNB = await coinWatch("BNB");
    USDT = await coinWatch("USDT");
    SOL = await coinWatch("SOL");
    XRP = await coinWatch("XRP");

    coins.splice(0, coins.length)
    coins.push(BTC, ETH, USDT, BNB, SOL, XRP);
    removeTableData();
    addCoins(coins);
}, 6000) */

// Add coins to DOM

addCoins(coins);