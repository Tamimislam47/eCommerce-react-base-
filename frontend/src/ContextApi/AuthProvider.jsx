import React, { useContext, createContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWAIBHWtgCYWKPODXQ3gRTbt6pD7UkSCw",
  authDomain: "simple-project-6ae61.firebaseapp.com",
  projectId: "simple-project-6ae61",
  storageBucket: "simple-project-6ae61.appspot.com",
  messagingSenderId: "1080776379369",
  appId: "1:1080776379369:web:d197946519c6607947d978",
  measurementId: "G-CWB75213SB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const AuthProviderContext = createContext(null);

export const useAuthProvider = () => useContext(AuthProviderContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const signupWithEmailAndPassword = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signinWithEmailAndPassword = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubcribed();
    };
  }, []);

  const errorMessage = (error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Invalid Credential";
      case "auth/email-already-in-use":
        return "Email is already in use.";
      case "auth/admin-restricted-operation":
        return "Admin restricted operation.";
      case "auth/user-not-found":
        return "No account found with this email.";
      default:
        return "An unexpected error occurred. Please try again.";
    }
  };

  const value = {
    user,
    loading,
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    signout,
    errorMessage,
  };
  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  );
}
