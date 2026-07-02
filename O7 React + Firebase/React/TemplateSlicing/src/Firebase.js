// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTeUzMxYZOpky18YHhwmIoYL6S7ysS0uA",
  authDomain: "practice-o7.firebaseapp.com",
  projectId: "practice-o7",
  storageBucket: "practice-o7.firebasestorage.app",
  messagingSenderId: "769356043747",
  appId: "1:769356043747:web:e14e0ad4cfb9ffdf393cd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);