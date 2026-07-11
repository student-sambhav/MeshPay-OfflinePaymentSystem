import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Smartphone, User } from "lucide-react";
import { toast } from "sonner";

import authService from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    password: "",
  });

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

      await authService.register(formData);

      toast.success("Registration Successful");

      navigate("/login");
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Registration Failed"
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
          Create your MeshPay account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <InputField
          icon={User}
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <InputField
          icon={Smartphone}
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />

        <InputField
          icon={Lock}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

      <p className="mt-8 text-center text-slate-400">
        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-blue-400"
        >
          Login
        </Link>
      </p>
    </motion.div>
  );
}

function InputField({
  icon: Icon,
  type = "text",
  ...props
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 px-4">
      <Icon
        size={20}
        className="text-blue-400"
      />

      <input
        type={type}
        className="w-full bg-transparent py-4 text-white outline-none"
        {...props}
      />
    </div>
  );
}