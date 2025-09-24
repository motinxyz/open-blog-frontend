import React, { useState, useEffect, useCallback } from "react";
import { AuthContext } from "./AuthContext";
import * as authService from "../../../services/authService";

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    isLoading: true, // Start in a loading state
  });

  const refreshAuthStatus = useCallback(async () => {
    // For the initial load, isLoading is already true.
    // For subsequent refreshes (e.g., after login), we don't set it to true
    // again to prevent a jarring full-screen loading indicator.
    try {
      const data = await authService.checkStatus();
      setAuthState({
        isAuthenticated: data.isAuthenticated,
        user: data.user,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to fetch auth status:", error);
      setAuthState({
        isAuthenticated: false,
        user: null,
        isLoading: false,
      });
    }
  }, []);

  useEffect(() => {
    // When the component mounts, check the auth status with the backend
    refreshAuthStatus();
  }, [refreshAuthStatus]);

  return (
    <AuthContext.Provider value={{ authState, refreshAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
