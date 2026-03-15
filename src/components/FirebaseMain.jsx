import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// !!! GERÇEK DEĞERLERİ BURAYA KOYMAYIN !!!
// Buraya kendi Firebase projenizin bilgilerini koyacaksınız
const firebaseConfig = {
    apiKey: "BURAYA_FIREBASE_API_KEY",            // Örn: "AIzaSyA0-xxxxxxxxxxxxxxxxxx"
    authDomain: "BURAYA_FIREBASE_AUTH_DOMAIN",    // Örn: "proje-adi.firebaseapp.com"
    projectId: "BURAYA_FIREBASE_PROJECT_ID",      // Örn: "proje-adi"
    storageBucket: "BURAYA_FIREBASE_STORAGE_BUCKET", // Örn: "proje-adi.appspot.com"
    messagingSenderId: "BURAYA_FIREBASE_MESSAGING_SENDER_ID", // Örn: "1234567890"
    appId: "BURAYA_FIREBASE_APP_ID",              // Örn: "1:1234567890:web:abcdef123456"
    measurementId: "BURAYA_FIREBASE_MEASUREMENT_ID" // Örn: "G-XXXXXXX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);