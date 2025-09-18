// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, signupUser, getCurrentUser, sendOtp, verifyOtp } from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged in user info
  const [mode, setMode] = useState('light');
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
  const logout = async () => {
    return new Promise((resolve) => {
      localStorage.removeItem("token");
      setUser(null);
      resolve();
    });
  };

  const sendOptContex=async(data)=>{
    try{
      const res=await sendOtp(data)
      return res
    }catch(err){
      console.log(err);
      
    }
  }
  const verifyOtpContex=async(data)=>{
    try{
      const res=await verifyOtp(data)
      return res
    }catch(err){
      console.log(err);
    }
  }

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

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <AuthContext.Provider value={{verifyOtpContex,sendOptContex, user, loading, login, signup, logout, mode, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext)
