// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXg7sfnexr2Gb8I5Nc2b6UFNOFVShqdkA",
  authDomain: "exoplanet-detection-prototype.firebaseapp.com",
  projectId: "exoplanet-detection-prototype",
  storageBucket: "exoplanet-detection-prototype.firebasestorage.app",
  messagingSenderId: "177854801074",
  appId: "1:177854801074:web:80d5e3dac82381fd8b95ab",
  measurementId: "G-ZXRL1T5ZV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);