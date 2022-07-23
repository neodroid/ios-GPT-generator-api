// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoDsHlWn7lE66ZbalrEtLaCZxW5xYu3q0",
  authDomain: "ios-ideas-firebase.firebaseapp.com",
  projectId: "ios-ideas-firebase",
  storageBucket: "ios-ideas-firebase.appspot.com",
  messagingSenderId: "776520061443",
  appId: "1:776520061443:web:b4f0ab77c85b62462e7436",
  measurementId: "G-TGGY6GKL8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);