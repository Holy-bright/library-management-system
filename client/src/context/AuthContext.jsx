import { createContext, useContext, useState } from "react";

const TOKEN_KEY = "token";
const USER_KEY = "user";

const AuthContext = createContext(null);

// A JWT has three parts separated by dots. The middle part holds the data,
// including "exp", the expiry time in seconds.
export function isTokenExpired(token) {
  try {
    const payloadPart = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(payloadPart));
    return typeof payload.exp === "number" && payload.exp * 1000 <= Date.now();
  } catch {
    return true;
  }
}

function loadSession() {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    const user = JSON.parse(localStorage.getItem(USER_KEY) ?? "null");
    if (token && user && !isTokenExpired(token)) {
      return { token, user };
    }
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {
    // Broken or blocked storage counts as logged out.
  }
  return { token: null, user: null };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(loadSession);

  // Store the JWT in localStorage so the login survives a page refresh.
  const saveSession = (token, user) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    setSession({ token, user });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    setSession({ token: null, user: null });
  };

  const isLoggedIn = Boolean(session.token) && !isTokenExpired(session.token);

  return (
    <AuthContext.Provider
      value={{ token: session.token, user: session.user, isLoggedIn, saveSession, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
