importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

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
firebase.initializeApp(firebaseConfig);
firebase.messaging();
