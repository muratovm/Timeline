// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoB82gtHk7lsqZSPJo3uELnhZiIjROVsk",
  authDomain: "active-campus-332704.firebaseapp.com",
  projectId: "active-campus-332704",
  storageBucket: "active-campus-332704.appspot.com",
  messagingSenderId: "25841264571",
  appId: "1:25841264571:web:5fd9cab1b7ebd0ce83469e",
  measurementId: "G-XT02SGS1RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);