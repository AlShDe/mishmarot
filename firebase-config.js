// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOI_aAyo_2oj6y20JQTaSNhQH2XLOyYmk",
    authDomain: "mishmarot-76a6b.firebaseapp.com",
    projectId: "mishmarot-76a6b",
    storageBucket: "mishmarot-76a6b.appspot.com",
    messagingSenderId: "677673005974",
    appId: "1:677673005974:web:88abb691419edce75563b7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
