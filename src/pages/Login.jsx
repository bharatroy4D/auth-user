import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, mode,sendOptContex } = useAuth(); // 👈 mode import

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form); // AuthContext → loginUser API call হবে
      sendOptContex({email:form.email})
      navigate("/otp"); 
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition ${
        mode === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`p-8 rounded-2xl shadow-lg w-full max-w-sm transition ${
          mode === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 outline-none transition
                ${
                  mode === "light"
                    ? "text-black border-gray-400 focus:border-blue-600 focus:ring-blue-400"
                    : "text-white border-gray-600 bg-gray-700 focus:border-yellow-400 focus:ring-yellow-500"
                }`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className={`w-full px-4 py-2 border-2 rounded-lg focus:ring-2 outline-none transition
                ${
                  mode === "light"
                    ? "text-black border-gray-400 focus:border-blue-600 focus:ring-blue-400"
                    : "text-white border-gray-600 bg-gray-700 focus:border-yellow-400 focus:ring-yellow-500"
                }`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition
              ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : mode === "light"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
              }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
