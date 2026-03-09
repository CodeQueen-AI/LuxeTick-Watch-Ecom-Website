"use client";
import Image from "next/image";
export default function WatchSection() {
  return (
    <section className="w-full flex h-screen overflow-hidden">
      <div className="w-1/2 relative">
        <Image
          src="/Imges/Img6.webp"
          alt="watch"
          fill
          className="object-cover"/>
      </div>
      <div className="w-1/2 relative">
        <Image
          src="/Imges/Img7.webp"
          alt="watch"
          fill
          className="object-cover"/>
        <div className="absolute inset-0 flex flex-col justify-between text-white poppins">
          <div className="text-center pt-5">
            <p className="text-lg">New collection</p>
            <h1 className="text-4xl font-extralight mt-2">
              Edifice
            </h1>
          </div>
        <div className="pb-10 pt-20">
          <div className="border-t border-white w-[90%] ml-10 mb-4"></div>
        <p className="text-lg ml-10">
          Shop new collection
        </p>
    </div>
        </div>
      </div>
    </section>
  );
}