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

  // ❗ Error state
  const [error, setError] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Empty fields
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    // Wrong credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      setError("Invalid email or password");
      return;
    }

    // Success
    setError("");
    localStorage.setItem("admin", "true");
    router.push("/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      
      <form
        onSubmit={handleLogin}
        className="bg-white/80 backdrop-blur-md p-10 shadow-xl w-[380px] border border-gray-200"
      >
        {/* Title */}
        <h2 className="text-3xl font-extralight font-serif text-center mb-8">
          Admin Login
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="w-full mt-2 px-2 py-2 bg-transparent border-b-2 border-gray-300 focus:border-[#09162c] outline-none transition"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="text-sm">Password</label>
          <input
            type={show ? "text" : "password"}
            className="w-full mt-2 px-2 py-2 bg-transparent border-b-2 border-gray-300 focus:border-[#09162c] outline-none transition pr-10"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Eye Icon */}
          <span
            onClick={() => setShow(!show)}
            className="absolute right-2 top-9 cursor-pointer text-gray-500 hover:text-[#09162c]"
          >
            {show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>

        {/* ❗ ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 bg-[#09162c] text-white font-semibold hover:bg-[#0b1f3f] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
        >
          Login to Dashboard
        </button>
      </form>
    </div>
  );
}