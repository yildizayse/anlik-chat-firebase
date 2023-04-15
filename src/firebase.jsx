// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOzqsiEAcGY-JUli-Oh-NHNwjbh2zhgM",
  authDomain: "instantchat-8cc53.firebaseapp.com",
  projectId: "instantchat-8cc53",
  storageBucket: "instantchat-8cc53.appspot.com",
  messagingSenderId: "865595715358",
  appId: "1:865595715358:web:13d4d76aa3ac8df695a30f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);