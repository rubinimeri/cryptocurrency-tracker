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

export function initApp() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCMWkmMwBE4cHNrWwB9yNRyu1stR38cQx0',
    authDomain: 'cryptozenith-bc20a.firebaseapp.com',
    databaseURL: 'https://cryptozenith-bc20a-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cryptozenith-bc20a',
    storageBucket: 'cryptozenith-bc20a.appspot.com',
    messagingSenderId: '574850829297',
    appId: '1:574850829297:web:eda4dcdc57384f4b155250',
  };

  // Initialize firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const registerForm = document.querySelector('.register-form');
  const registerButton = document.getElementById('register');

  // Add event listener to register form
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get input values
    const fullName = document.querySelector('.full-name').value;
    const username = document.querySelector('.username').value;
    const email = registerForm.querySelector('.email-form').value;
    const password = registerForm.querySelector('.password-form').value;

    // Validate email and password
    if (validateEmail(email) === false || validatePassword(password) === false) {
      alert('Email or password format is incorrect');
      return;
    }

    // Validate full name and username
    if (validateField(username) === false || validateField(fullName) === false) {
      alert('Username and fullname must not be empty');
      return;
    }

    // Create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful registration
        const { user } = userCredential;
        console.log(user);

        // Store additional user data in the database
        const userId = user.uid;
        const userRef = ref(database, `users/${userId}`);
        set(userRef, {
          fullName,
          username,
          email,
          lastLogin: Date.now(),
        });
      })
      .catch((error) => {
        // Handle registration error
        console.error('Registration error:', error.message);
      });
  });
}
