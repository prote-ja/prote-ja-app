// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXpWOQnAVfru7c-aUth_ythwosDhXJiRo",
  authDomain: "prote-ja.firebaseapp.com",
  projectId: "prote-ja",
  storageBucket: "prote-ja.firebasestorage.app",
  messagingSenderId: "783248319174",
  appId: "1:783248319174:web:a1617a492c49619c266dc7",
  measurementId: "G-001BPXX6L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
