import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
});
// login Api
export const loginUser = async (data) => {
    try {
        const res = await API.post('/authentication_app/signin/', data);

        return res.data;
    } catch (err) {
        throw err.response?.data || { message: "login failed" }
    }
}
// signup Api
export const signupUser = async (data) => {
    try {
       const res = await API.post('/authentication_app/signup/', data);
        return res.data;
    } catch (err) {
        throw err.response?.data || { message: "signup failed" }
    }
}


export const getCurrentUser = async (token) => {
    try {
        const res = await API.get('/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return res.data;
    } catch (err) {
        throw err.response?.data || { message: "failed to fetch  user" }
    }
}

