import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHEOsvlgdOltYc8uG0bJnyjhYfgWtp_cc",
  authDomain: "trade-83d7c.firebaseapp.com",
  projectId: "trade-83d7c",
  storageBucket: "trade-83d7c.appspot.com",
  messagingSenderId: "978024760002",
  appId: "1:978024760002:web:d53dc5b8c03fddda40b15b",
  measurementId: "G-EHQESDB62N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
