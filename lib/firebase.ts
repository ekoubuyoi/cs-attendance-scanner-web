import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0P76Blahr1yXNogBumWOdH0SDND0vQYQ",
  authDomain: "cs-attendance-scanner.firebaseapp.com",
  projectId: "cs-attendance-scanner",
  storageBucket: "cs-attendance-scanner.firebasestorage.app",
  messagingSenderId: "133111873917",
  appId: "1:133111873917:web:7575d8abe17d6926da0c14"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// Export line (db)
export { db };
