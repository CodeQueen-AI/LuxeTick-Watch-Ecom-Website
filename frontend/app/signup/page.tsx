"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) setError(data.msg || data.error);
      else setSuccess("Signup successful!");
    } catch {
      setError("Something went wrong Try again!");
    }
  };

  return (
    <section className="w-full min-h-screen flex poppins">
      <div className="w-1/2 flex flex-col justify-center bg-white px-16">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl mb-8 font-semibold text-center">Create Your Account</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border-b border-gray-400 outline-none py-1 px-2"
                required
              />
            </div>

            <div>
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-gray-400 outline-none py-1 px-2"
                required
              />
            </div>

            <div className="relative">
              <label className="text-sm block mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-gray-400 outline-none py-1 px-2 pr-8"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-36 bg-black text-white border border-white py-2 hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <Image src="/watch/w27.jpg" alt="signup image" fill className="object-cover" />
      </div>
    </section>
  );
}