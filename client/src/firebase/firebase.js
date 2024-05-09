// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRczTVHde5Pdh3CuyzlT5B1mqoDDIcDSo",
  authDomain: "catnipnu.firebaseapp.com",
  projectId: "catnipnu",
  storageBucket: "catnipnu.appspot.com",
  messagingSenderId: "494531799464",
  appId: "1:494531799464:web:ff888a646cc1863f87159d",
  measurementId: "G-RNZX6CRZSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
