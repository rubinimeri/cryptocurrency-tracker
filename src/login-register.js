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

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

export function loadAuth() {
  if (localStorage.getItem('register') === 'true') {
    loginForm.classList.add('display-none');
    registerForm.classList.remove('display-none');
  } else {
    loginForm.classList.remove('display-none');
    registerForm.classList.add('display-none');
  }
}

export function changeAuth() {
  const loginSpan = document.querySelector('.login-span');
  const registerSpan = document.querySelector('.register-span');

  loginSpan.addEventListener('click', () => {
    loginForm.classList.remove('display-none');
    registerForm.classList.add('display-none');
  });

  registerSpan.addEventListener('click', () => {
    loginForm.classList.add('display-none');
    registerForm.classList.remove('display-none');
  });
}
