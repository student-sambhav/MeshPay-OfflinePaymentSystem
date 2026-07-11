import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Smartphone } from "lucide-react";
import { toast } from "sonner";

import authService from "../services/authService";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await authService.login(formData);

      login(response.token, response.user);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-10 backdrop-blur-xl"
    >
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-bold">
          <span className="text-blue-500">Mesh</span>
          <span className="text-white">Pay</span>
        </h1>

        <p className="mt-3 text-slate-400">
          Offline Payment Mesh Network
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Phone Number
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-4">
            <Smartphone
              className="text-blue-400"
              size={20}
            />

            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full bg-transparent py-4 text-white outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-400">
            Password
          </label>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-4">
            <Lock
              className="text-blue-400"
              size={20}
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full bg-transparent py-4 text-white outline-none"
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Signing In..." : "Login"}
        </button>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Don't have an account?

        <Link
          to="/register"
          className="ml-2 text-blue-400 hover:text-blue-300"
        >
          Register
        </Link>
      </p>
    </motion.div>
  );
}