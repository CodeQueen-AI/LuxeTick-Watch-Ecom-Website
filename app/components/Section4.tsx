import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/watch.png"
          alt="watch"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 bg-gray-100 flex items-center">
        <div className="max-w-md mx-auto">

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            THE WATCH THAT <br /> DEFIED TIME
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore the legend of the Hamilton Murph, an iconic watch whose story
            blends cinematic emotion with timeless craftsmanship.
          </p>

          <button className="mt-8 px-8 py-3 border border-gray-400 text-gray-800 hover:bg-black hover:text-white transition">
            DISCOVER
          </button>

        </div>
      </div>

    </section>
  );
}