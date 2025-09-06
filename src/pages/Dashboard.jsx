// src/pages/Dashboard.jsx
import { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-500">
          MyApp
        </div>
        <nav className="flex-1 p-4 space-y-3">
          {["Dashboard", "Profile", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`block w-full text-left px-4 py-2 rounded-lg ${
                active === item ? "bg-blue-500" : "hover:bg-blue-600"
              }`}
            >
              {item}
            </button>
          ))}
          <button className="block w-full text-left px-4 py-2 rounded-lg hover:bg-red-600 mt-6">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">{active}</h1>
          <div className="flex items-center space-x-3">
            <span className="text-gray-700 font-medium">Hello, User</span>
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
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,245</p>
            <p className="text-sm text-gray-500">Active this month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-3xl font-bold text-green-600">$12,540</p>
            <p className="text-sm text-gray-500">This month</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Orders</h2>
            <p className="text-3xl font-bold text-purple-600">350</p>
            <p className="text-sm text-gray-500">Pending</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
