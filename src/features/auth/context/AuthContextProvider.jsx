import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const API_URL = "http://localhost:3000/api";

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    isLoading: true, // Start in a loading state
  });

  useEffect(() => {
    // When the component mounts, check the auth status with the backend
    const checkStatus = async () => {
      try {
        const response = await fetch(`${API_URL}/auth/status`, {
          credentials: "include", // Crucial for sending cookies
        });
        const data = await response.json();
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
    };

    checkStatus();
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        // Instead of throwing, return the detailed error from the backend.
        return {
          success: false,
          error: data.message,
          errors: data.errors || [],
        };
      }

      // On successful login, update the global auth state
      setAuthState({
        isAuthenticated: true,
        user: data.user,
        isLoading: false,
      });
      return { success: true };
    } catch (error) {
      // This will now primarily catch network errors.
      return { success: false, error: error.message, errors: [] };
    }
  };

  const registerUser = async (
    firstName,
    lastName,
    email,
    password,
    termsAccepted,
  ) => {
    try {
      const response = await fetch(API_URL + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          termsAccepted,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message,
          errors: data.errors,
        };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message, errors: [] };
    }
  };

  const logoutUser = async () => {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      // Always update the frontend state regardless of server response
      setAuthState({ isAuthenticated: false, user: null, isLoading: false });
    }
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, registerUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
