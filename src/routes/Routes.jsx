import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import OTPPage from "../pages/Otp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },

            {
                path: '/otp',
                element: <OTPPage />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>
    },
])
export default router;