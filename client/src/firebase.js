// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvnqgMgQYFubegrCJyjgz7RUZUAqBZm2Q",
  authDomain: "mern-bl.firebaseapp.com",
  projectId: "mern-bl",
  storageBucket: "mern-bl.firebasestorage.app",
  messagingSenderId: "310143657105",
  appId: "1:310143657105:web:5fe6f25ebf0f25582b4b30",
  measurementId: "G-YZERYYZLCH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
