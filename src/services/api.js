import { ERROR_MESSAGES } from "../constants/messages";

const API_URL = "http://localhost:3000/api";

/**
 * A utility function to make API requests and handle responses.
 * @param {string} endpoint - The API endpoint to call (e.g., '/auth/login').
 * @param {RequestInit} options - The options for the fetch call.
 * @returns {Promise<any>} - The JSON response from the API.
 * @throws {object} - A structured error object for handling in UI.
 */
async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: "include", // Include cookies in all requests
    });

    const data = await response.json();

    // console.log("api layer",data);
    if (!response.ok) {
      // Throw an object that mimics the structure of our action state
      // for easier handling in components.
      console.log(response.ok);

      throw {
        success: false,
        error: data.message || ERROR_MESSAGES.UNKNOWN_ERROR,
        errors: data.errors || [],
        status: response.status,
      };
    }

    return data;
  } catch (error) {
    // If it's already the structured error, return it
    if (error.status) {
      throw error;
    }
    // Otherwise, it's likely a network error.
    throw {
      success: false,
      error: ERROR_MESSAGES.NETWORK_ERROR,
      errors: [],
    };
  }
}

export default apiRequest;
