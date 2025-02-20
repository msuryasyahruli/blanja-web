const TOKEN = "token";
const PROFILE = "profile";

export async function setStorage(token, data) {
  try {
    localStorage.setItem(PROFILE, JSON.stringify(data));
    localStorage.setItem(TOKEN, token);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}

export function getToken() {
  try {
    return localStorage.getItem(TOKEN);
  } catch (error) {
    console.error("Error reading token:", error);
    return null;
  }
}

export function clearStorage() {
  try {
    localStorage.removeItem(PROFILE);
    localStorage.removeItem(TOKEN);
  } catch (error) {
    console.error("Error clearing storage:", error);
  }
}

export function getUserData() {
  try {
    const data = localStorage.getItem(PROFILE);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error parsing user data:", error);
    return null;
  }
}

export function getRole() {
  const data = getUserData();
  return data?.role || null;
}
