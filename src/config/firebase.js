// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwyYXAcjnPAr8mjLPQwg7sTkZ6yyO1ENM",
    authDomain: "book-store-61c66.firebaseapp.com",
    projectId: "book-store-61c66",
    storageBucket: "book-store-61c66.appspot.com",
    messagingSenderId: "359344743936",
    appId: "1:359344743936:web:6350e3748698d03c0ddae5",
    measurementId: "G-FQCLTPCMZ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

