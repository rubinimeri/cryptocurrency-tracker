export default function setRegister() {
  const loginHeader = document.querySelector('.login');
  const registerHeader = document.querySelector('.register');

  registerHeader.addEventListener('click', () => {
    localStorage.setItem('register', 'true');
  });
  loginHeader.addEventListener('click', () => {
    localStorage.setItem('register', 'false');
  });
}

const changeToLogin = document.querySelector('.p.display-none');
const changeToRegister = document.querySelector('.p');
const register = document.querySelector('.button-submit.display-none');
const login = document.querySelector('.button-submit');

export function loadAuth() {
  if (localStorage.getItem('register') === 'true') {
    changeToLogin.classList.remove('display-none');
    changeToRegister.classList.add('display-none');
    register.classList.remove('display-none');
    login.classList.add('display-none');
  } else {
    changeToLogin.classList.add('display-none');
    changeToRegister.classList.remove('display-none');
    login.classList.remove('display-none');
    register.classList.add('display-none');
  }
}

export function changeAuth() {
  const loginSpan = changeToLogin.querySelector('.span');
  const registerSpan = changeToRegister.querySelector('.span');

  loginSpan.addEventListener('click', () => {
    changeToLogin.classList.add('display-none');
    changeToRegister.classList.remove('display-none');
    login.classList.remove('display-none');
    register.classList.add('display-none');
  });

  registerSpan.addEventListener('click', () => {
    changeToLogin.classList.remove('display-none');
    changeToRegister.classList.add('display-none');
    register.classList.remove('display-none');
    login.classList.add('display-none');
  });
}
