"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "@/app/(dashboard)/lib/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl w-[380px] border border-gray-200"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Dashboard Access
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="text-gray-600 text-sm">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 px-2 py-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-8 relative">
          <label className="text-gray-600 text-sm">Password</label>
          <input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full mt-2 px-2 py-2 bg-transparent border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition pr-10"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Eye Icon */}
          <span
            onClick={() => setShow(!show)}
            className="absolute right-2 top-9 cursor-pointer text-gray-500 hover:text-indigo-600"
          >
            {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Login to Dashboard
        </button>
      </form>
    </div>
  );
}