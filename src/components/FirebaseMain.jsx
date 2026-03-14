import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0-AcmxqlZMRbRX5KppRnitOx0hCtHb4M",
    authDomain: "fir-learning-59e82.firebaseapp.com",
    projectId: "fir-learning-59e82",
    storageBucket: "fir-learning-59e82.firebasestorage.app",
    messagingSenderId: "282740497014",
    appId: "1:282740497014:web:34a40bad3b1a1b3bc59d57",
    measurementId: "G-C1MX18B3PP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app); 