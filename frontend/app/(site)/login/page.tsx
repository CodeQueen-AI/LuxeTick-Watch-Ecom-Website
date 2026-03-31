"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) setError(data.msg || data.error);
      else {
        // Save user and token to localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        // Redirect to home page
        router.push("/");
      }
    } catch {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex poppins">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-5xl mb-8 font-semibold text-center">Welcome Back</h1>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
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
                Login
              </button>
            </div>
          </form>

          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 relative hidden md:block">
        <Image src="/watch/w28.jpg" alt="login image" fill className="object-cover" />
      </div>
    </section>
  );
}









