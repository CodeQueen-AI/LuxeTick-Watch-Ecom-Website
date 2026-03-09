"use client";
import { BsCart3 } from "react-icons/bs";

export default function Page() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6 relative">
      
      <div className="absolute inset-0 flex -z-10">
        <div className="w-1/2 bg-[#09162c]"></div>
        <div className="w-1/2 bg-white"></div>
      </div>

      <h1 className="text-5xl text-white tracking-tight allura">
        LuxeTick
      </h1>

      <div className="flex items-center gap-8 text-black font-medium poppins">
        
        <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          HOME
        </a>

        <a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          PRODUCTS
        </a>

        <a className="relative mr-6 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
          CONTACT
        </a>

        <BsCart3 size={24} className="cursor-pointer" />

        {/* Signup Button */}
        <button className="border border-black bg-black text-white px-6 py-2 hover:bg-white hover:text-black transition cursor-pointer">
          SIGN UP
        </button>

      </div>
    </nav>
  );
}