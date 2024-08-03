// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu40aOZD-W4oRO3_0p4JuNcT33uVqzfp0",
  authDomain: "ai-travel-app-8d8de.firebaseapp.com",
  projectId: "ai-travel-app-8d8de",
  storageBucket: "ai-travel-app-8d8de.appspot.com",
  messagingSenderId: "517400451142",
  appId: "1:517400451142:web:da6accd2cf6dedf9125247",
  measurementId: "G-2HSVNW23PC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)