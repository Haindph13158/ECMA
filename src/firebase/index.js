// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVvzTS4aByIsLrx3QwxmXtt8Z7xFIDWow",
  authDomain: "asm-ecma.firebaseapp.com",
  projectId: "asm-ecma",
  storageBucket: "asm-ecma.appspot.com",
  messagingSenderId: "639440821232",
  appId: "1:639440821232:web:74eaa8374b7af39a795b35",
  measurementId: "G-H20PKSKRMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();