import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  // ✅ Redirect to login if not logged in
  if (!user) return <Navigate to="/login" />;

  // ✅ If role is required and user doesn't match → redirect to user dashboard
  if (role && user.role !== role) {
    return <Navigate to={`/dashboard/${user.role}`} />;
  }

  return children;
};

export default ProtectedRoute;
