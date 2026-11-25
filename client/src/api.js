import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Attach the saved JWT to every request, so guarded API routes accept it.
api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch {
    // localStorage can be blocked in private browsing. Send the request without a token.
  }
  return config;
});

// Turn a NestJS error response into a readable message.
export function getErrorMessage(err, fallback) {
  if (!err.response) {
    return "Cannot reach the server. Check that the API is running.";
  }
  const message = err.response.data?.message;
  if (Array.isArray(message)) return message.join(". ");
  if (typeof message === "string") return message;
  return fallback;
}

export default api;
