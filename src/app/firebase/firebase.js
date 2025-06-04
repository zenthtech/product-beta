// src/app/firebase/firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
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

// Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Exported Auth Methods
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithGitHub = () => signInWithPopup(auth, githubProvider);
export const loginWithEmail = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
export const registerWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
export const resetPassword = (email) => sendPasswordResetEmail(auth, email);
export const logout = () => signOut(auth);

export { auth, app };
