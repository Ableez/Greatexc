// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAW_0BswzGEAq-rnnPHKlwyg4h_Dec6G4",
  authDomain: "greatexc-f9080.firebaseapp.com",
  projectId: "greatexc-f9080",
  storageBucket: "greatexc-f9080.appspot.com",
  messagingSenderId: "407893724079",
  appId: "1:407893724079:web:e4cb20e47db8e27da27d5a",
  measurementId: "G-6G7NFXGGKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
