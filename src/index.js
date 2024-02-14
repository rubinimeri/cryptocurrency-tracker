import './styles/header.css';
import './styles/style.css';
import './styles/about.css';
import './styles/footer.css';
import './styles/contact.css';
import './assets/logo-dark.png';
import {
  showMenu, moveSearchSelect, checkPage, addCoins, removeTableData, stopLoading, timeFrameSelector,
} from './display-controller';
import { coins } from './coin-data';
import { coinWatch } from './fetch-data';

showMenu();
moveSearchSelect();
window.addEventListener('resize', moveSearchSelect);
window.addEventListener('DOMContentLoaded', timeFrameSelector);
checkPage();

// Logic

const BTC = await coinWatch('BTC');
const ETH = await coinWatch('ETH');
const ADA = await coinWatch('ADA');
const LINK = await coinWatch('LINK');
const SOL = await coinWatch('SOL');
const TRX = await coinWatch('TRX');

coins.push(BTC, ETH, ADA, LINK, SOL, TRX);

// Every 6 seconds, get new data from API
/* setInterval(async () => {
  BTC = await coinWatch('BTC');
  ETH = await coinWatch('ETH');
  ADA = await coinWatch('ADA');
  LINK = await coinWatch('LINK');
  SOL = await coinWatch('SOL');
  TRX = await coinWatch('TRX');

  coins.splice(0, coins.length);
  coins.push(BTC, ETH, ADA, LINK, SOL, TRX);
  removeTableData();
  addCoins(coins);
}, 6000); */

// Add coins to DOM

stopLoading();
addCoins(coins);
