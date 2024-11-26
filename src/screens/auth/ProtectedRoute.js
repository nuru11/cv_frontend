import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ element, adminOnly }) => {
  const location = useLocation(); // Get the current location

  const checkTokenExpiration = () => {
    const expirationTime = localStorage.getItem('tokenExpiration');
    if (expirationTime && new Date().getTime() > expirationTime) {
      localStorage.removeItem('token'); // Remove token
      localStorage.removeItem('tokenExpiration'); // Remove expiration
      return false; // Token is expired
    }
    return true; // Token is still valid
  };

  const isAuthenticated = checkTokenExpiration();
  const token = localStorage.getItem('token'); // Get the token
  let isAdmin = false;

  if (token) {
    // Decode the token to check if the user is an admin
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    isAdmin = payload.isAdmin || false; // Check if user is admin
  }

  // Check for admin access
  if (adminOnly && !isAdmin) {
    return <Navigate to="/login" state={{ from: location.pathname }} />; // Redirect to login with state
  }

  return isAuthenticated && token ? element : <Navigate to="/login" state={{ from: location.pathname }} />; // Redirect to login with state
};

export default ProtectedRoute;