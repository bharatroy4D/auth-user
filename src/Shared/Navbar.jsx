// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">MyApp</Link>
                </div>

                {/* Menu Links */}
                <div className="space-x-6">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/login" className="hover:text-gray-200">Login</Link>
                    <Link to="/signup" className="hover:text-gray-200">Signup</Link>
                    <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
