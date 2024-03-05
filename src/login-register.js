import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

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

// Validate Functions
function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  if (expression.test(email) === true) {
    // Email is good
    return true;
  }
  // Email is not good
  return false;
}

function validatePassword(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false;
  }
  return true;
}

function validateField(field) {
  if (field == null) {
    return false;
  }

  if (field.length <= 0) {
    return false;
  }
  return true;
}
