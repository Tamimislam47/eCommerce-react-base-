import React from "react";
import { useAuthProvider } from "../../ContextApi/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuthProvider();

  if (loading) {
    return <div>Loading...</div>; 
  }

  return <>{user ? children : <Navigate to="/signin" />}</>;
}
