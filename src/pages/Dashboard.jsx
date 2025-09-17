// src/pages/Dashboard.jsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // AuthContext import
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");
  const { mode, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate('/')
  }

  return (
    <div
      className={`flex h-screen ${mode === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
    >
      {/* Sidebar */}
      <aside
        className={`w-64 flex flex-col ${mode === "dark" ? "bg-gray-800 text-white" : "bg-blue-700 text-white"
          }`}
      >
        <div className="p-6 text-2xl font-bold border-b border-blue-500">
          MyApp
        </div>
        <nav className="flex-1 p-4 space-y-3">
          {["Dashboard", "Profile", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${active === item
                ? mode === "dark"
                  ? "bg-gray-700"
                  : "bg-blue-500"
                : mode === "dark"
                  ? "hover:bg-gray-700"
                  : "hover:bg-blue-600"
                }`}
            >
              {item}
            </button>
          ))}
          <button onClick={handleLogout}
            className={`block w-full text-left px-4 py-2 rounded-lg mt-6 ${mode === "dark" ? "hover:bg-red-700" : "hover:bg-red-600"
              }`}
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header
          className={`shadow p-4 flex justify-between items-center ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
        >
          <h1 className="text-xl font-bold">{active}</h1>
          <div className="flex items-center space-x-3">
            {/* Toggle Button */}
            {/* <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                mode === "dark"
                  ? "bg-yellow-400 text-black hover:bg-yellow-500"
                  : "bg-gray-800 text-white hover:bg-gray-900"
              }`}
            >
              {mode === "dark" ? "Light Mode" : "Dark Mode"}
            </button> */}
            <span className="font-medium">Hello, User</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Content Area */}
        <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 overflow-y-auto">
          {/* Card 1 */}
          <div
            className={`p-6 rounded-xl shadow ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
          >
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-3xl font-bold text-blue-500">1,245</p>
            <p className="text-sm">Active this month</p>
          </div>

          {/* Card 2 */}
          <div
            className={`p-6 rounded-xl shadow ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
          >
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold text-green-500">$12,540</p>
            <p className="text-sm">This month</p>
          </div>

          {/* Card 3 */}
          <div
            className={`p-6 rounded-xl shadow ${mode === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
          >
            <h2 className="text-lg font-semibold mb-2">Orders</h2>
            <p className="text-3xl font-bold text-purple-500">350</p>
            <p className="text-sm">Pending</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
