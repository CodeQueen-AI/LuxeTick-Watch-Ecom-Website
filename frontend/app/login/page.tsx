// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <section className="w-full min-h-screen flex poppins">
//       <div className="w-1/2 flex items-center justify-center bg-white">
//         <div className="w-[70%]">
//           <h1 className="text-4xl mb-10 font-semibold">
//             Welcome Back
//           </h1>
//           <div className="mb-8">
//             <label className="text-sm">Email</label>
//             <input
//               type="email"
//               className="w-full border-b border-black outline-none py-2" />
//           </div>
//           <div className="mb-10 relative">
//             <label className="text-sm">Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               className="w-full border-b border-black outline-none py-2 pr-8"/>
//             <span
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-0 bottom-3 cursor-pointer text-lg">
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </div>
//           <div className="flex justify-center">
//             <button className="w-48 bg-black text-white border border-white py-3 hover:bg-white hover:text-black hover:border-black transition cursor-pointer">
//               Login
//             </button>
//           </div>
//           <p className="text-sm mt-6 text-center">
//             Don't have an account?{" "}
//             <Link href="/signup" className="font-semibold underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//       <div className="w-1/2 relative">
//         <Image
//           src="/watch/w28.jpg"
//           alt="login image"
//           fill
//           className="object-cover"/>
//       </div>
//     </section>
//   );
// }














"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

      if (!res.ok) {
        setError(data.msg || data.error);
      } else {
        console.log("Login successful. Token:", data.token);
        localStorage.setItem("token", data.token); // save token for protected routes
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex poppins">
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[70%]">
          <h1 className="text-4xl mb-10 font-semibold">Welcome Back</h1>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2"
                required
              />
            </div>
            <div className="mb-10 relative">
              <label className="text-sm">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2 pr-8"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 bottom-3 cursor-pointer text-lg"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 bg-black text-white border border-white py-3 hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>

          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div className="w-1/2 relative">
        <Image src="/watch/w28.jpg" alt="login image" fill className="object-cover" />
      </div>
    </section>
  );
}