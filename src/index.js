import './styles/header.css'
import './styles/style.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, coinCreator, addCoin } from './display-controller.js';
import { coinWatch } from './fetch-data.js';

showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();

// Add coins
await addCoin("BTC");
await addCoin("ETH");
await addCoin("USDT");