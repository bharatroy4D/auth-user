// src/pages/Home.jsx
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { mode } = useAuth();

  return (
    <div
      className={`min-h-screen ${
        mode === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-100"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`h-[80vh] flex flex-col justify-center items-center text-center px-6 transition ${
          mode === "light"
            ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
            : "bg-gradient-to-r from-gray-800 to-gray-950 text-yellow-200"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to{" "}
          <span
            className={`${
              mode === "light" ? "text-yellow-300" : "text-yellow-400"
            }`}
          >
            Home page
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          A modern web application template with authentication, dashboard, and
          clean design – ready to customize for your project.
        </p>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            mode === "light"
              ? "bg-yellow-400 text-black hover:bg-yellow-500"
              : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
          }`}
        >
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
