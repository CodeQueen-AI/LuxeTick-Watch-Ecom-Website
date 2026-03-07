"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function SmartWatchSection() {
  // Import fonts dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Allura&family=Poppins:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#09162c]">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src="/watch9.jpg" // Replace with your watch image
          alt="Smart Watch"
          width={900}
          height={900}
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-12 text-white">
        {/* Smart Watch Title */}
        <h1 className="text-7xl mb-6" style={{ fontFamily: "Allura, cursive" }}>
          Smart Watch
        </h1>

        {/* Paragraph */}
        <p className="text-lg font-extralight mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
          Experience the perfect blend of style and technology with this smart watch 
          Track your fitness stay connected and elevate your everyday look effortlessly.
          Designed for comfort and performance
        </p>

        {/* Buy Button */}
        <button
          className="bg-white text-[#09162c] border border-[#09162c] px-10 py-4 text-lg hover:bg-[#09162c] hover:text-white hover:border-white transition cursor-pointer"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}