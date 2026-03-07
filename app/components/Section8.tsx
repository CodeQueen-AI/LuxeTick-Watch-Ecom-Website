"use client";

import Image from "next/image";

export default function FullImagePage() {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Full Image */}
      <div className="w-full relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <Image
          src="/about.webp" 
          alt="Full Image"
          fill
          className="object-cover"
        />
      </div>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-6">About This Image</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Yeh section image ke baad aata hai aur yahan aap pura about text likh
          sakti hain. Aap chahein to paragraph multiple lines mei bhi likh sakti
          hain. Yeh responsive hai, yani chhote screens par bhi acha lagega. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </section>
    </div>
  );
}