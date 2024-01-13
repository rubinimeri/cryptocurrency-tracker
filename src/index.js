import './styles/header.css'
import './styles/style.css'
import './styles/about.css'
import './styles/footer.css'
import './styles/contact.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, addCoins } from './display-controller.js';
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

console.log(coins)

// Add coins to DOM

addCoins(coins);