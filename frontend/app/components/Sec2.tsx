"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex overflow-hidden">
      <div className="w-1/2 relative">
        <Image
          src="/Imges/Img5.avif"
          alt="watch"
          fill
          className="object-cover"/>
      </div>
      <div className="w-1/2 flex items-center">
        <div className="max-w-md mx-auto poppins">
          <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
            THE <span className="allura text-6xl font-normal">Watch</span> THAT
            <br />
            DEFIED TIME
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Explore the legend of the Hamilton Murph, an iconic watch whose story
            blends cinematic emotion with timeless craftsmanship
          </p>
          <Link href={"/products"}>
          <button className="mt-8 px-8 py-3 border border-gray-400 text-gray-800 hover:bg-black hover:text-white font-semibold transition cursor-pointer">
            DISCOVER
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}