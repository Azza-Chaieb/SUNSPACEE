<<<<<<< HEAD
// public/firebase-messaging-sw.js
// Fichier VIDE pour l'instant - juste pour que Firebase soit content
console.log('Service Worker Firebase chargé');

// Événements de base
self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activé');
});

// Ce fichier est requis par Firebase même s'il ne fait rien
=======
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyBLEZXX-86u6I9h1KAGDgRJq5GyUbfRRfI",
  authDomain: "sunspace-430ae.firebaseapp.com",
  projectId: "sunspace-430ae",
  messagingSenderId: "647611390056",
  appId: "1:647611390056:web:f7dcec652d8bc7836643dd",
});

firebase.messaging();
>>>>>>> d3d36416f680a4a5641a8245a6b36dc5482fa986
