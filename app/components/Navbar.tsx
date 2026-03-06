"use client";
import { BsCart3 } from "react-icons/bs";

export default function Page() {
  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        .nav-link{
          position: relative;
        }

        .nav-link::after{
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: black;
          transition: width 0.35s ease;
        }

        .nav-link:hover::after{
          width: 100%;
        }
        `}
      </style>

      <nav className="w-full flex items-center justify-between px-10 py-6 relative">

        {/* Background split */}
        <div className="absolute inset-0 flex -z-10">
          {/* <div className="w-1/2 bg-[#0b1d3a]"></div> */}
            <div className="w-1/2 bg-[#09162c]"></div>
          <div className="w-1/2 bg-white"></div>
        </div>

        {/* Logo */}
        <h1
          className="text-5xl text-white tracking-tight"
          style={{ fontFamily: "'Allura', cursive" }}
        >
          Omega
        </h1>

        {/* Menu */}
        <div
          className="flex items-center gap-8 text-black font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a href="#" className="nav-link">HOME</a>
          <a href="#" className="nav-link">COLLECTIONS</a>
          <a href="#" className="nav-link">SERVICES</a>
          <a href="#" className="nav-link mr-10">CONTACT</a>

          <BsCart3 size={24} className="cursor-pointer" />
        </div>

      </nav>
    </>
  );
}