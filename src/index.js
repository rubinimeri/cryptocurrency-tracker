import './styles/header.css';
import './styles/style.css';
import './styles/about.css';
import './styles/footer.css';
import './styles/contact.css';
import './assets/logo-dark.png';
import './styles/dark-mode.css';
import {
  showMenu, moveSearchSelect, checkPage, addCoins,
  removeTableData, stopLoading, timeFrameSelector, toggleDarkMode,
  updateContainerHeight,
  searchCoinsArray,
} from './display-controller';
import { coins } from './coin-data';
import { coinWatch } from './fetch-data';

showMenu();
moveSearchSelect();
window.addEventListener('resize', moveSearchSelect);
window.addEventListener('DOMContentLoaded', timeFrameSelector);
window.addEventListener('DOMContentLoaded', toggleDarkMode);
checkPage();

// * Check if we are on the homepage, if so load the coins
if (window.location.pathname.includes('index.html')) {
  const search = document.getElementById('search');
  search.addEventListener('input', searchCoinsArray);
  // Logic

  let BTC = await coinWatch('BTC');
  let ETH = await coinWatch('ETH');
  let ADA = await coinWatch('ADA');
  let LINK = await coinWatch('LINK');
  let SOL = await coinWatch('SOL');
  let TRX = await coinWatch('TRX');

  coins.push(BTC, ETH, ADA, LINK, SOL, TRX);

  // Every 6 seconds, get new data from API
  setInterval(async () => {
    BTC = await coinWatch('BTC');
    ETH = await coinWatch('ETH');
    ADA = await coinWatch('ADA');
    LINK = await coinWatch('LINK');
    SOL = await coinWatch('SOL');
    TRX = await coinWatch('TRX');

    coins.splice(0, coins.length);
    coins.push(BTC, ETH, ADA, LINK, SOL, TRX);
    removeTableData();
    if (search.value !== '') {
      searchCoinsArray();
    } else {
      addCoins(coins);
    }
  }, 6000);

  // Add coins to DOM

  stopLoading();
  addCoins(coins);
}
