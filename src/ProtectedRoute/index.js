import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  // Check if "user" key exists in local storage
  const isAuthenticated = localStorage.getItem("user");

  // If user is authenticated, render the provided element
  // Otherwise, redirect to the authentication page
  return isAuthenticated ? element : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
