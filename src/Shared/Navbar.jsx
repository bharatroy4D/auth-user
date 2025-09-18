// // src/components/Navbar.jsx
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//     const { user, logout, mode, toggleTheme } = useAuth();
//     const navigate = useNavigate();
//     const handleLogout = () => {
//         logout();
//         navigate("/login")
//     }
//     return (
//         <nav className="bg-blue-600 text-white shadow-md">
//             <div className="container mx-auto flex justify-between items-center px-6 py-3">
//                 {/* Logo */}
//                 <div className="text-2xl font-bold">
//                     <Link to="/">Authentication</Link>
//                 </div>

//                 {/* Menu Links */}
//                 <div className="space-x-6">
//                     <Link to="/" className="hover:text-gray-200">Home</Link>
//                     {
//                         user ? <> <button onClick={handleLogout} className="btn btn-primary">Logout</button></> : <>
//                             <Link to="/login" className="hover:text-gray-200">Login</Link> </>
//                     }
//                     <Link to="/signup" className="hover:text-gray-200">Signup</Link>
//                     <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react"; // icon library

const Navbar = () => {
    const { user, logout, mode, toggleTheme } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav
            className={`${mode === "light" ? "bg-blue-500 text-white" : "bg-gray-900 text-yellow-200"
                } shadow-md`}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">Authentication</Link>
                </div>

                {/* Menu Links */}
                <div className="flex items-center space-x-6">
                    <Link to="/" className="hover:text-gray-200">
                        Home
                    </Link>
                    {user ? (
                       ''
                    ) : (
                        <Link to="/login" className="hover:text-gray-200">
                            Login
                        </Link>
                    )}
                    <Link to="/signup" className="hover:text-gray-200">
                        Signup
                    </Link>
                    <Link to="/dashboard" className="hover:text-gray-200">
                        Dashboard
                    </Link>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-gray-400 hover:scale-110 transition"
                        aria-label="Toggle Theme"
                    >
                        {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

