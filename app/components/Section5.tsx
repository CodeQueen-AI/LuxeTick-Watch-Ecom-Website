"use client";
import Image from "next/image";

export default function WatchSection() {
  return (
    <section className="w-full flex h-screen">

      {/* LEFT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/watch-left.jpg"
          alt="Casio Watch"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT IMAGE WITH TEXT */}
      <div className="w-1/2 relative">

        <Image
          src="/watch-right.jpg"
          alt="Edifice Watch"
          fill
          className="object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

          <p className="text-lg font-medium">
            New collection
          </p>

          <h1 className="text-6xl font-semibold mt-2">
            Edifice
          </h1>

          <div className="mt-10 border-t border-white w-80"></div>

          <p className="mt-4 text-lg">
            Shop new collection
          </p>

        </div>

      </div>

    </section>
  );
}