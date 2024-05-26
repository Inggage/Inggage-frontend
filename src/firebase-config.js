/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdkLfs9eq0C4BmzQldRrAlKKkxryMKbQk",
  authDomain: "inggage-3282c.firebaseapp.com",
  projectId: "inggage-3282c",
  storageBucket: "inggage-3282c.appspot.com",
  messagingSenderId: "319566936145",
  appId: "1:319566936145:web:806ffc92914feab7ece070",
  measurementId: "G-E7S9E628YY"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const facebook = new FacebookAuthProvider();