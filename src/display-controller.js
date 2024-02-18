import moment from 'moment';
import {
  changeChartData, loadChartWithData, loadResizedChart, myChart,
} from './coin-chart';
import { historicalData } from './fetch-data';
import { coins } from './coin-data';
import './assets/logo-light.png';

// Show hamburger menu
export function showMenu() {
  // When DOM content is loaded, add an event listener to
  // hamburger menu, when clicked toggle .active class
  document.addEventListener('DOMContentLoaded', () => {
    // Get hamburger-menu
    const hamburgerMenu = document.querySelector('.hamburger');
    hamburgerMenu.addEventListener('click', () => {
      // Get bottom nav bar
      const bottomNav = document.querySelector('.bottom-nav');
      bottomNav.classList.toggle('active');
    });
  });
}

// Move search bar and currency selector to
// hamburger menu when screen is <= 900
export function moveSearchSelect() {
  // Select bottom and top navbars
  const topNav = document.querySelector('.top-nav');
  const bottomNav = document.querySelector('.bottom-nav');
  // Select search and select
  const searchContainer = document.querySelector('.search-container');
  const selectContainer = document.querySelector('.select-container');

  // If window width is <= 900
  if (window.innerWidth <= 900) {
    bottomNav.append(selectContainer, searchContainer);
  } else {
    topNav.append(selectContainer, searchContainer);
  }
}

// Check which page in the website we are in
export function checkPage() {
  document.addEventListener('DOMContentLoaded', () => {
    // Get the current URL
    const currentPage = window.location.pathname;

    // Remove 'active' class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
      link.firstChild.classList.remove('active');
    });

    // Check which page we are in
    if (currentPage.includes('index.html')) {
      // Set class to 'active'
      document.querySelector('.nav-link:first-child').classList.add('active');
      document.querySelector('.nav-link:first-child').firstChild.classList.add('active');
    } else if (currentPage.includes('about.html')) {
      document.querySelector('.nav-link:nth-child(2)').classList.add('active');
      document.querySelector('.nav-link:nth-child(2)').firstChild.classList.add('active');
    } else if (currentPage.includes('contact.html')) {
      document.querySelector('.nav-link:nth-child(3)').classList.add('active');
      document.querySelector('.nav-link:nth-child(3)').firstChild.classList.add('active');
    }
  });
}

// * Toggle dark mode when dark icon is clicked
export function toggleDarkMode() {
  const toggler = document.querySelector('.toggler');
  const body = document.querySelector('body');
  const header = body.querySelector('header');
  const footer = body.querySelector('footer');
  const container = body.querySelector('.container');
  const headerLogo = document.querySelector('.logo-container img');
  const footerLogo = document.querySelector('footer img');
  const lightLogo = './83add02974a09868b30e.png';
  const darkLogo = './82ce140b93c72bd10f68.png';
  const light = toggler.querySelector('.light');
  const dark = toggler.querySelector('.dark');
  if (localStorage.getItem('darkMode') === 'true') {
    // Change logo
    headerLogo.src = lightLogo;
    footerLogo.src = lightLogo;

    // Change icon to light theme
    light.classList.remove('display-none');
    dark.classList.add('display-none');

    // Add classes
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    container.classList.add('dark-mode');
    footer.classList.add('dark-mode');
  }
  toggler.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      light.classList.add('display-none');
      dark.classList.remove('display-none');
      headerLogo.src = darkLogo;
      footerLogo.src = darkLogo;
      body.classList.remove('dark-mode');
      header.classList.remove('dark-mode');
      footer.classList.remove('dark-mode');
      container.classList.remove('dark-mode');
      localStorage.setItem('darkMode', false);
    } else {
      light.classList.remove('display-none');
      dark.classList.add('display-none');
      headerLogo.src = lightLogo;
      footerLogo.src = lightLogo;
      body.classList.add('dark-mode');
      header.classList.add('dark-mode');
      container.classList.add('dark-mode');
      footer.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
  });
}

// Function that makes big numbers easier to
// read
function addCommasToNumber(number) {
  // Convert the number to a string
  let numString = number.toString();

  // Use a regular expression to add commas
  numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return numString;
}

// * Get coin inside 'coins' array using it's ID
function getCoin(coinId) {
  const COIN = coins.find((coin) => coin.name.toLowerCase() === coinId);
  if (!COIN) {
    throw new Error(`Coin with id ${coinId} not found`);
  }
  return COIN;
}

// * Depending on which coin was clicked, search through
// * coins array to find it and load it's data to the DOM
function loadCoinData(coinId) {
  const {
    logo, name, price, hour, day, marketCap, volume, circulatingSupply, liquidity, week,
    month,
    quarter,
    year,
  } = getCoin(coinId);
  const coinLogo = document.querySelector('.coin-details img');
  const coinName = document.querySelector('.coin-details h3');
  const coinPrice = document.querySelector('.coin-details h1');
  const otherData = document.querySelectorAll('.data');

  const [coinHour, coinDay, coinWeek, coinMonth, coinQuarter, coinYear, coinMarketCap,
    coinVolume, coinCircSupply, coinLiquidity] = otherData;

  // * Load data
  coinLogo.src = logo;
  coinName.textContent = name;
  coinPrice.textContent = `$${addCommasToNumber(price)}`;
  coinHour.textContent = hour;
  coinDay.textContent = day;
  coinWeek.textContent = week;
  coinMonth.textContent = month;
  coinYear.textContent = year;
  coinQuarter.textContent = quarter;
  coinMarketCap.textContent = `$${addCommasToNumber(marketCap)}`;
  coinVolume.textContent = `$${addCommasToNumber(volume)}`;
  coinCircSupply.textContent = `$${addCommasToNumber(circulatingSupply)}`;
  coinLiquidity.textContent = `$${addCommasToNumber(liquidity)}`;

  // * Add classes
  coinHour.classList.add(hour > 0 ? 'positive' : 'negative', 'percent');
  coinDay.classList.add(day > 0 ? 'positive' : 'negative', 'percent');
  coinWeek.classList.add(week > 0 ? 'positive' : 'negative', 'percent');
  coinMonth.classList.add(month > 0 ? 'positive' : 'negative', 'percent');
  coinQuarter.classList.add(quarter > 0 ? 'positive' : 'negative', 'percent');
  coinYear.classList.add(year > 0 ? 'positive' : 'negative', 'percent');
}

// * Get coin dates and prices
async function getCoinData(coinId, days) {
  const result = await historicalData(coinId, 'usd', days);
  const prices = result.map((price) => price[1]);
  const dates = result.map((timee) => moment.unix(timee[0] / 1000).format('MM-DD-YYYY'));
  return [dates, prices];
}

async function loadChart(coinId, days = 1) {
  const [dates, prices] = await getCoinData(coinId, days);
  // Create chart
  loadChartWithData(dates, prices, 10);
  loadCoinData(coinId);

  window.addEventListener('resize', () => {
    loadResizedChart(myChart);
  });
}

// Dynamically loaded 'coin-details' section
// when coin is clicked

async function loadCoinDetails(coinId) {
  const cryptoList = document.querySelector('.crypto-list');
  const pages = document.querySelector('.pages');
  const coinDetails = document.querySelector('.coin-details');
  const h1 = document.querySelector('.hero-title');
  coinDetails.classList.remove('display-none');
  cryptoList.classList.add('display-none');
  pages.classList.add('display-none');
  h1.classList.add('display-none');
  await loadChart(coinId);
}

// Recurisve parent search

function recursiveSearch(e) {
  if (!e.classList.contains('table-row')) return recursiveSearch(e.parentNode);
  return e;
}

// * Current selected coin
let coinId;

// Load chart when table-row is clicked
function rowListener(row) {
  row.addEventListener('click', (e) => {
    const coinContainer = recursiveSearch(e.target);
    coinId = coinContainer.querySelector('td:nth-child(2) > span').textContent.toLowerCase();
    loadCoinDetails(coinId);
  });
}

// Coin creator, takes information and will be used to
// make a 'coin-card'
function coinCreator(...args) {
  const [, logo, name] = args;
  const table = document.querySelector('.crypto-list table');
  const row = document.createElement('tr');
  const logoElement = document.createElement('img');
  row.classList.add('table-row', 'coin-info');
  table.append(row);

  // * Load chart when table row is clicked
  rowListener(row);

  for (let i = 0; i < 9; i += 1) {
    const td = document.createElement('td');
    row.append(td);
    const span = document.createElement('span');

    if (i !== 1) {
      td.append(span);
      span.textContent = args[i];
    } else {
      // Add coin logos to table
      logoElement.src = logo;
      td.append(logoElement);

      span.textContent = name;
      td.append(span);
      i += 1;
    }

    // Add classes
    if ((i === 4 || i === 5) && parseFloat(span.textContent) > 0) {
      span.classList.add('positive', 'percent');
    } else if ((i === 4 || i === 5) && parseFloat(span.textContent) < 0) {
      span.classList.add('negative', 'percent');
    }
  }
}

// Use data from 'coins' array, to add coins to the DOM
export function addCoins() {
  coins.forEach((coin, index) => {
    // Adjust data
    const rank = index + 1;
    const {
      logo, name, hour, day,
    } = coin;
    const price = `$${addCommasToNumber(coin.price)}`;
    const marketCap = `$${addCommasToNumber(coin.marketCap)}`;
    const volume = `$${addCommasToNumber(coin.volume)}`;
    const circulatingSupply = addCommasToNumber(coin.circulatingSupply);

    coinCreator(rank, logo, name, price, hour, day, marketCap, volume, circulatingSupply);
  });
}

// Remove table data

export function removeTableData() {
  const table = document.querySelector('.crypto-list table');
  const coinInfo = table.querySelectorAll('.coin-info');

  coinInfo.forEach((coin) => {
    coin.remove();
  });
}

// Function that removes loading gif
// when coins are loaded
export function stopLoading() {
  const loader = document.querySelector('.loader');
  loader.classList.add('display-none');
}

// * Add event listener to timeframe radio buttons
// * and load a new chart based on the selected timeframe
export function timeFrameSelector() {
  const timeFrames = Array.from(document.querySelectorAll('input[type="radio"]'));
  timeFrames.forEach((timeframe) => {
    timeframe.addEventListener('change', async function () {
      const selectedTimeFrameValue = this.value;
      let dates; let
        prices;

      // * Add and remove classes/attributes
      timeFrames.forEach((timeFrame) => {
        if (timeFrame.hasAttribute('checked')) {
          timeframe.removeAttribute('checked');
          timeFrame.parentNode.classList.remove('checked');
        }
      });
      timeframe.setAttribute('checked', true);
      timeframe.parentNode.classList.add('checked');

      if (selectedTimeFrameValue === 'day') {
        [dates, prices] = await getCoinData(coinId, 1);
      }
      if (selectedTimeFrameValue === 'week') {
        [dates, prices] = await getCoinData(coinId, 7);
      }
      if (selectedTimeFrameValue === 'month') {
        [dates, prices] = await getCoinData(coinId, 30);
      }
      if (selectedTimeFrameValue === 'quarter') {
        [dates, prices] = await getCoinData(coinId, 90);
      }
      if (selectedTimeFrameValue === 'year') {
        [dates, prices] = await getCoinData(coinId, 365);
      }
      changeChartData(dates, prices);
    });
  });
}
