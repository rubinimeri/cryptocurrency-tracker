import './styles/header.css'
import './styles/style.css'
import './assets/logo-dark.png'
import { showMenu, moveSearchSelect, checkPage } from './display-controller.js';

showMenu();
moveSearchSelect();
window.addEventListener("resize", moveSearchSelect);
checkPage();