"use client";
import Image from "next/image";

export default function SeasonCollection() {
  return (
    <section className="w-full bg-gray-100 py-20">

      {/* Google Fonts */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Allura&display=swap');

        .poppins{
          font-family:'Poppins', sans-serif;
        }

        .allura{
          font-family:'Allura', cursive;
        }
        `}
      </style>

      <div className="max-w-7xl mx-auto poppins px-6">

        {/* Heading */}
        <h1 className="text-4xl text-center mb-16">
          <span className="allura text-5xl">Season Collection</span>
        </h1>

        {/* Watches Grid */}
        <div className="grid grid-cols-3 gap-12">

          {/* Watch 1 */}
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch4.webp"
                alt="Kenneth Cole"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl mt-6">
              Kenneth Cole New York
            </h2>

            <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
              Shop Now
            </button>
          </div>

          {/* Watch 2 */}
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch5.webp"
                alt="Lee Cooper"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl mt-6">
              Lee Cooper
            </h2>

            <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
              Shop Now
            </button>
          </div>

          {/* Watch 3 */}
          <div>
            <div className="relative w-full h-[420px]">
              <Image
                src="/watch6.webp"
                alt="Edifice"
                fill
                className="object-cover"
              />
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