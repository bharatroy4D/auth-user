// src/pages/Home.jsx
const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Home page</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          A modern web application template with authentication, dashboard, and
          clean design – ready to customize for your project.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Home;
