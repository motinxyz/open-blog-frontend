import { SUCCESS_MESSAGES } from "../../../open-blog-back/constants/messages";
import { ERROR_MESSAGES } from "../constants/messages";
import apiRequest from "./api";

export async function login(email, password) {
  try {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    // console.log("service layer:", data);

    return { success: true, user: data.user };
  } catch (error) {
    return error;
  }
}

export async function register(userData) {
  try {
    const result = await apiRequest("/auth/register", {
      method: "POST",
      body: JSON.stringify(userData),
    });

    return { success: true };
  } catch (error) {
    return error;
  }
}

export async function logout() {
  // We can choose to ignore logout errors on the backend as the
  // frontend state will be cleared anyway.
  try {
    await apiRequest("/auth/logout", {
      method: "POST",
    });
    return { success: true, message: SUCCESS_MESSAGES.LOGOUT_SUCCESSFUL };
  } catch (error) {
    console.error({ success: false, message: error.error });
  }
}

export async function checkStatus() {
  return apiRequest("/auth/status");
}
