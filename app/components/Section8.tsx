"use client";

import Image from "next/image";

export default function SmartWatchSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src="/watch8.jpg" // Replace with your watch image
          alt="Smart Watch"
          width={100}
          height={100}
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-12">
        {/* Smart Watch Title */}
        <h1 className="text-5xl md:text-6xl font-allura mb-6">
          Smart Watch
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-poppins">
          Experience the perfect blend of style and technology with this smart watch. 
          Track your fitness, stay connected, and elevate your everyday look effortlessly. 
          Designed for comfort and performance.
        </p>

        {/* Buy Button */}
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-poppins hover:bg-yellow-600 transition">
          Buy
        </button>
      </div>
    </div>
  );
}