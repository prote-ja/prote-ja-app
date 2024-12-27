// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDTqDI4wa0Pg8UkWIn56qnEJ_8-4yO1YkU",
  authDomain: "rman-94df4.firebaseapp.com",
  projectId: "rman-94df4",
  storageBucket: "rman-94df4.firebasestorage.app",
  messagingSenderId: "774051722368",
  appId: "1:774051722368:web:05c2d1100212e1533da265",
  measurementId: "G-6RDHR8QJCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
