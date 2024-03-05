import './styles/header.css';
import './styles/style.css';
import './styles/about.css';
import './styles/footer.css';
import './styles/contact.css';
import './assets/logo-dark.png';
import './styles/dark-mode.css';
import {
  showMenu, moveSearchSelect, checkPage,
  removeTableData, stopLoading, timeFrameSelector, toggleDarkMode,
  searchCoinsArray, renderCoinsDependingOnPage, pages, getSelectedPage, arrowListener, checkCurrency, currencyListener,
} from './display-controller';
import { coins } from './coin-data';
import { coinWatch } from './fetch-data';
import setRegister, { changeAuth, initApp, loadAuth } from './login-register';

window.addEventListener('DOMContentLoaded', initApp);
showMenu();
moveSearchSelect();
window.addEventListener('resize', moveSearchSelect);
window.addEventListener('DOMContentLoaded', timeFrameSelector);
window.addEventListener('DOMContentLoaded', toggleDarkMode);
setRegister();
checkPage();

// * Function that gets coin data from API and pushes it to coins array
export default async function getCoins() {
  const currency = checkCurrency();

  const BTC = await coinWatch('BTC', currency);
  const ETH = await coinWatch('ETH', currency);
  const ADA = await coinWatch('ADA', currency);
  const LINK = await coinWatch('LINK', currency);
  const SOL = await coinWatch('SOL', currency);
  const TRX = await coinWatch('TRX', currency);
  const DOGE = await coinWatch('DOGE', currency);
  const DOT = await coinWatch('DOT', currency);
  const ARB = await coinWatch('ARB', currency);
  const DAI = await coinWatch('DAI', currency);

  coins.push(BTC, ETH, ADA, LINK, SOL, TRX, DOGE, DOT, ARB, DAI);
}

const windowPath = window.location.pathname;

// * Check if we are on the homepage, if so load the coins
if (windowPath.includes('index.html')) {
  pages();
  arrowListener();
  currencyListener();
  const search = document.getElementById('search');
  search.addEventListener('input', searchCoinsArray);
  await getCoins();

  // Every 6 seconds, get new data from API
  /* setInterval(async () => {
    coins.splice(0, coins.length);
    await getCoins();
    removeTableData();
    if (search.value !== '') {
      searchCoinsArray();
    } else {
      renderCoinsDependingOnPage(getSelectedPage());
    }
  }, 6000); */

  // Add coins to DOM

  stopLoading();
  renderCoinsDependingOnPage(1);
}

// * Check if we are ong login-register page
if (windowPath.includes('login-register.html')) {
  loadAuth();
  changeAuth();
}
