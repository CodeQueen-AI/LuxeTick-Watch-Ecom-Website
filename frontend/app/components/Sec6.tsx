"use client";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SmartWatchSection() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#09162c] poppins relative">
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src="/watch/w11.jpg" 
          alt="Smart Watch"
          width={900}
          height={900}
          className="object-cover"/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-12 text-white text-center">
        <h1 className="text-7xl mb-6 allura">Smart Watch</h1>
        <p className="text-lg font-extralight mb-8 leading-relaxed">
          Experience the perfect blend of style and technology with this smart watch Track your fitness goals 
          with precision monitor your heart rate count your steps and analyze your sleep patterns to ensure 
          you are always performing at your best Elevate your everyday look effortlessly 
          while enjoying the convenience and innovation of modern wearable technology Designed for comfort 
          and performanc, its more than just a watch its your ultimate daily companion
        </p>
      </div>
    </div>
  );
}