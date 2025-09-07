// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, signupUser, getCurrentUser } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged in user info
  const [loading, setLoading] = useState(true);

  // Login
  const login = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.token) {
        localStorage.setItem("token", res.token);
      }
      setUser(res?.user || null);
      return res;
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  // Signup
  const signup = async (data) => {
    try {
      const res = await signupUser(data);
      if (res?.token) {
        localStorage.setItem("token", res.token);
      }
      setUser(res?.user || null);
      return res;
    } catch (err) {
      console.error("Signup failed:", err);
      throw err;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Load user if token exists
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await getCurrentUser(token);
          setUser(res?.user || null);
        } catch (err) {
          console.error("User fetch failed:", err);
          localStorage.removeItem("token");
          setUser(null);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
// export const useAuth = () => useContext(AuthContext);
export const useAuth = () => useContext(AuthContext)
