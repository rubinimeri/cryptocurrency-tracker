import './styles/header.css'
import './styles/style.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage, coinCreator } from './display-controller.js';

showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();

coinCreator(2, "Ethereum", "$5,241", "+24%", "+18%", "$591,980,163,421", "$4,873,691,173", "42,515,188");