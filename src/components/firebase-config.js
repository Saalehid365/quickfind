import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg0mJhTABVw0Oy0oE4lgECzRAkHFcrwfY",
  authDomain: "quickfind-2aa74.firebaseapp.com",
  projectId: "quickfind-2aa74",
  storageBucket: "quickfind-2aa74.appspot.com",
  messagingSenderId: "411511351003",
  appId: "1:411511351003:web:acab0622b6978d2f1c8efe",
  measurementId: "G-XZWDF85GDZ",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
