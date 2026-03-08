"use client";
import Image from "next/image";

export default function SmartWatchSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#09162c] poppins">
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src="/watch/w11.jpg" 
          alt="Smart Watch"
          width={900}
          height={900}/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-12 text-white">
      <h1 className="text-7xl mb-6 allura">
        Smart Watch
      </h1>
      <p className="text-lg font-extralight mb-8 text-center">
        Experience the perfect blend of style and technology with this smart watch
        Track your fitness stay connected and elevate your everyday look effortlessly
        Designed for comfort and performance
      </p>
      <button
        className="bg-white text-[#09162c] border border-[#09162c] px-10 py-4 text-lg hover:bg-[#09162c]
         hover:text-white hover:border-white transition cursor-pointer">
        Add To Cart
      </button>
    </div>
    </div>
  );
}