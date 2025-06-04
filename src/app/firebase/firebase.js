// src/app/firebase/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCegRif1OWkyKHkVNeFTJOjdifhoCH8HKU",
  authDomain: "booking-2e6e4.firebaseapp.com",
  projectId: "booking-2e6e4",
  storageBucket: "booking-2e6e4.appspot.com",
  messagingSenderId: "944465090782",
  appId: "1:944465090782:web:b26dac9a155637304f4a4f",
  measurementId: "G-VHVVNY7EPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGitHub = () => signInWithPopup(auth, githubProvider);

export { auth, app };
