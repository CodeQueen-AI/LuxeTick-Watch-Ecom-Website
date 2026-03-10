"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!"); // placeholder
  };

  return (
    <section className="w-full min-h-screen flex poppins">

      {/* Left Side Form */}
      <div className="w-1/2 flex items-center justify-center bg-white px-16">
        <div className="w-full max-w-md">

          <h1 className="text-4xl font-semibold mb-10">
            Get in Touch
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Name */}
            <div>
              <label className="text-sm mb-1 block">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm mb-1 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-black outline-none py-2 resize-none"
                rows={4}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="w-48 bg-black text-white border border-white py-3 hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-1/2 relative">
        <Image
          src="/watch/w29.jpg" // replace with your premium watch image
          alt="contact image"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}