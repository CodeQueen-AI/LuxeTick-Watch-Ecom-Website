"use client";
import Image from "next/image";

export default function SeasonCollection() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto poppins px-6">
        <h1 className="text-4xl text-center mb-16">
          <span className="allura text-5xl">Season Collection</span>
        </h1>
        <div className="grid grid-cols-3 gap-12">
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch/w8.webp"
                alt="Kenneth Cole"
                fill
                className="object-cover"/>
            </div>
            <h2 className="text-2xl mt-6">
              Kenneth Cole New York
            </h2>
            <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
              Shop Now
            </button>
          </div>
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch/w9.webp"
                alt="Lee Cooper"
                fill
                className="object-cover"/>
            </div>
            <h2 className="text-2xl mt-6">
              Lee Cooper
            </h2>
            <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
              Shop Now
            </button>
          </div>
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch/w10.webp"
                alt="Edifice"
                fill
                className="object-cover"/>
            </div>
            <h2 className="text-2xl mt-6">
              Edifice
            </h2>
            <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}