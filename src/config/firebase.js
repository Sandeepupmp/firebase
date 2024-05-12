
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGvYB80T7F0V1jQsupAd30zJj4IM0QM0U",
  authDomain: "login-9addc.firebaseapp.com",
  projectId: "login-9addc",
  storageBucket: "login-9addc.appspot.com",
  messagingSenderId: "883579101525",
  appId: "1:883579101525:web:c656a17ece6ed2103a4fdc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)