"use client";

import Image from "next/image";

export default function HeroWatch() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans">

      {/* LEFT BG */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-[#dbdce0]" />

      {/* RIGHT BG */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#232637]" />

      {/* NAVBAR */}
      <nav className="relative z-10 max-w-7xl mx-auto flex justify-between pt-10 px-6">

        <ul className="flex gap-8 text-[#232637] font-medium">
          <li className="font-extrabold text-xl">Diesel</li>
          <li>Store</li>
          <li>Shop</li>
          <li>Collection</li>
        </ul>

        <ul className="flex gap-8 text-white font-medium">
          <li>Cart</li>
          <li>Login/Register</li>
          <li>Profile</li>
        </ul>

      </nav>

      {/* BIG LETTER */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[35rem] font-black text-[#8263a3] leading-none">
        S
      </span>

      {/* WATCH IMAGE */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/main watch.png"
          alt="watch"
          width={220}
          height={220}
          className="drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* TEXT LEFT */}
      <h1 className="absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 -translate-x-[380px]">
        POR
      </h1>

      {/* TEXT RIGHT */}
      <h1 className="absolute left-1/2 top-1/2 text-[5rem] tracking-[25px] text-white -translate-y-1/2 translate-x-[160px]">
        CHE
      </h1>

      {/* EXPLORE BUTTON */}
      <button className="absolute left-1/2 top-1/2 translate-y-[230px] -translate-x-1/2 bg-white px-8 py-4 font-semibold shadow-xl">
        EXPLORE MORE
      </button>

      {/* PRINT BUTTON */}
      <button className="absolute right-0 top-1/2 rotate-90 border border-white text-white px-8 py-3">
        PRINT
      </button>

      {/* CATALOG BUTTON */}
      <button className="absolute left-0 top-[25%] -rotate-90 border border-[#232637] text-[#232637] px-8 py-3">
        CATALOG
      </button>

      {/* FEATURES */}
      <h4 className="absolute left-[18%] top-[32%] text-[#232637]">
        Diesel
      </h4>

      <h4 className="absolute right-[18%] top-[32%] text-white">
        Watches
      </h4>

      <h4 className="absolute left-[18%] bottom-[32%] text-[#232637]">
        Tough
      </h4>

      <h4 className="absolute right-[18%] bottom-[32%] text-white">
        Modern
      </h4>

      {/* FOOTER */}
      <footer className="absolute bottom-6 w-full flex justify-between px-8">

        <p className="text-[#232637] text-sm">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </p>

        <div className="flex gap-8 text-white text-sm">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
        </div>

      </footer>

    </div>
  );
}