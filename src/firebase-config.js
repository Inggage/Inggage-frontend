// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIo1aTatG-aSupdBcvf5KkstyynQ2yKGM",
  authDomain: "ingage-85f45.firebaseapp.com",
  projectId: "ingage-85f45",
  storageBucket: "ingage-85f45.appspot.com",
  messagingSenderId: "371134618637",
  appId: "1:371134618637:web:f7a6fd3c69be82e63b0944",
  measurementId: "G-N2XZKQTFYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app); 

export { database };