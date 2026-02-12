<<<<<<< HEAD
// src/firebase.js - SIMPLIFIÉ SANS ERREUR
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDLjB7ZTTEgBnAUcpgeIDRRJrk9nupi_o",
  authDomain: "sunspace-82fc8.firebaseapp.com",
  projectId: "sunspace-82fc8",
  storageBucket: "sunspace-82fc8.firebasestorage.app",
  messagingSenderId: "916888366760",
  appId: "1:916888366760:web:cc18fefb3e104a67b1dc9d"
};

// Initialise SEULEMENT l'app pour l'instant
const app = initializeApp(firebaseConfig);
console.log("✅ Firebase App initialisée");

export { app };
=======
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBLEZXX-86u6I9h1KAGDgRJq5GyUbfRRfI",
  authDomain: "sunspace-430ae.firebaseapp.com",
  projectId: "sunspace-430ae",
  storageBucket: "sunspace-430ae.appspot.com",
  messagingSenderId: "647611390056",
  appId: "1:647611390056:web:f7dcec652d8bc7836643dd",
  measurementId: "G-PS1C7895BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional (analytics)
export const analytics = getAnalytics(app);

// For notifications
export const messaging = getMessaging(app);

export default app;
>>>>>>> d3d36416f680a4a5641a8245a6b36dc5482fa986
