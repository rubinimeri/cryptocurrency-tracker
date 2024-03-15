import { initializeApp } from 'firebase/app';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase, ref, set, get,
} from 'firebase/database';
import { loadProfilePage, loadProfileToHeader } from './display-controller';

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

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

function redirectToHomepage() {
  window.location.href = 'index.html';
}

// Initialize app with firebase
export default function initApp() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCMWkmMwBE4cHNrWwB9yNRyu1stR38cQx0',
    authDomain: 'cryptozenith-bc20a.firebaseapp.com',
    databaseURL: 'https://cryptozenith-bc20a-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cryptozenith-bc20a',
    storageBucket: 'cryptozenith-bc20a.appspot.com',
    messagingSenderId: '574850829297',
    appId: '1:574850829297:web:eda4dcdc57384f4b155250',
  };
  const page = window.location.pathname;

  // Initialize firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  function getUserDataFromDatabase(userId) {
    const userReference = ref(database, `users/${userId}`);
    return get(userReference)
      .then((userSnapshot) => {
        if (userSnapshot.exists()) {
          return userSnapshot.val();
        }
      })
      .catch(console.error);
  }

  // Check the user's authentication state
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user);
      const userId = user.uid;
      getUserDataFromDatabase(userId)
        .then((userData) => {
          if (userData) {
            loadProfileToHeader(userData.fullName);
          } else {
            console.log("User's data not found in the database");
          }
        })
        .catch((error) => {
          console.error("Error fetching user's data:", error);
        });
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });

  if (page.includes('profile.html')) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        getUserDataFromDatabase(userId)
          .then((userData) => {
            console.log('User data:', userData);
            loadProfilePage(userData.fullName, userData.username, userData.email);
          });
      } else {
        console.log('No user is signed in');
      }
    });
  }

  if (page.includes('login.html')) {
    const loginButton = document.getElementById('login');
    loginButton.addEventListener('click', (e) => {
      e.preventDefault();

      // Get input values
      const email = loginForm.querySelector('.email-form').value;
      const password = loginForm.querySelector('.password-form').value;

      // Validate email and password
      if (validateEmail(email) === false || validatePassword(password) === false) {
        alert('Email or password format is incorrect');
        return;
      }

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Handle successful login
          const { user } = userCredential;
          console.log('User logged in:', user);
        })
        .catch((error) => {
        // Handle login error
          console.error('Login error:', error.message);
        });
      redirectToHomepage();
    });
  }

  if (page.includes('register.html')) {
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
      redirectToHomepage();
    });
  }
}
