import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYFdE6gOlM4_HR6daecBi7z5tP5sBYtu0",
  authDomain: "quickfind-c0a9b.firebaseapp.com",
  projectId: "quickfind-c0a9b",
  storageBucket: "quickfind-c0a9b.appspot.com",
  messagingSenderId: "542218010181",
  appId: "1:542218010181:web:ab011808b2d79b54c6ed2c",
  measurementId: "G-5XMMW5ZNFY",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
