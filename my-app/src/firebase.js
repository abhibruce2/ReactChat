// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const REACT_APP_API_KEY_GOES_HERE = "AIzaSyDEJUyOeRhNCvFgnLD5kXijGQdLlfECDrM" ;
// const REACT_APP_AUTH_DOMAIN_GOES_HERE = "react-chat-b85c9.firebaseapp.com"
// const REACT_APP_PROJECT_ID_GOES_HERE = "react-chat-b85c9";
// const REACT_APP_STORAGE_BUCKET_GOES_HERE = "react-chat-b85c9.appspot.com" ;
// const REACT_APP_MESSSAGING_SENDER_ID_GOES_HERE = "951820632316" ;
// const REACT_APP_APP_ID_GOES_HERE = "1:951820632316:web:8da185ca825dbec4389779"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Analytics_________________", analytics);
export const auth = getAuth(app);
export const db = getFirestore(app);