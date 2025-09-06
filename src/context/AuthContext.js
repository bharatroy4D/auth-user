import { createContext, useEffect, useState } from "react";
import { getCurrentUser, loginUser, signupUser } from "../api/authApi";

export const AuthContext = createContext();
export const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // login
    const login = async (data) => {
        try {
            const res = await loginUser(data);
            localStorage.setItem("token", res.token);
            setUser(res.user);
            return res;
        } catch (err) {
            throw err;
        };
    };

    // signup
    const signup = async (data) => {
        try {
            const res = await signupUser(data);
            localStorage.setItem("token", res.token);
            setUser(res.user)
        } catch (err) {
            throw err;
        }
    }
    // logout
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null)
    }

    // load user if token exists
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const res = getCurrentUser(token);
                    return (res.user);
                } catch (err) {
                    console.error("user fetch failed", err);
                    localStorage.removeItem("token");
                    setUser(null);
                }
            }
            setLoading(false)
        };
        loadUser()
    }, []);
    return (
        
    )
};