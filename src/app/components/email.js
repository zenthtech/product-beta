"use client";

import React from "react";
import {
  signInWithGoogle,
  signInWithGitHub,
} from "../firebase/firebase";

export default function Login() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      alert("✅ Google login successful!");
    } catch (error) {
      console.error("Google login failed:", error);
      alert("❌ Google login failed.");
    }
  };

  const handleGitHubLogin = async () => {
    try {
      await signInWithGitHub();
      alert("✅ GitHub login successful!");
    } catch (error) {
      console.error("GitHub login failed:", error);
      alert("❌ GitHub login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

         
        <div className="space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl font-semibold transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.5 0 6.4 1.3 8.5 3.6l6.3-6.3C34.7 2.5 29.7 0 24 0 14.8 0 6.9 5.8 3 14.2l7.4 5.8C12 13.1 17.6 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.1 24.5c0-1.6-.1-2.8-.4-4H24v7.5h12.4c-.5 2.7-2 5-4.3 6.6l6.7 5.2c3.9-3.6 6.3-9 6.3-15.3z"
              />
              <path
                fill="#4A90E2"
                d="M10.4 28.7c-1.1-3.2-1.1-6.7 0-9.8l-7.4-5.8c-3.2 6.4-3.2 14 0 20.4l7.4-5.8z"
              />
              <path
                fill="#FBBC05"
                d="M24 48c6.5 0 11.9-2.1 15.9-5.6l-6.7-5.2c-2 1.4-4.6 2.3-7.2 2.3-6.3 0-11.7-4.3-13.6-10.1l-7.4 5.8C6.9 42.2 14.8 48 24 48z"
              />
            </svg>
            Sign in with Google
          </button>

          <button
            onClick={handleGitHubLogin}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white py-2 px-4 rounded-xl font-semibold transition duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.82-.262.82-.583 0-.288-.011-1.05-.017-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.334-1.755-1.334-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.836 2.81 1.306 3.495.998.107-.775.418-1.306.762-1.606-2.665-.303-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.628-5.48 5.922.43.372.823 1.103.823 2.222 0 1.606-.015 2.902-.015 3.293 0 .324.216.7.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
