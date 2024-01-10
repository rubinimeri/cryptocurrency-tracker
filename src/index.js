import './styles/header.css'
import './styles/style.css'
import './styles/about.css'
import './styles/footer.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, addCoin } from './display-controller.js';


showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();



const currentPage = window.location.pathname;
console.log(currentPage)

if(currentPage === '/dist/index.html') {
    // Add coins
    await addCoin("BTC");
    await addCoin("ETH");
    await addCoin("USDT");
    await addCoin("BNB");
    await addCoin("SOL");
    await addCoin("XRP");
}