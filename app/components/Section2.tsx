import Image from "next/image";

export default function RacingSection() {
  return (
    <section className="w-full poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        <div className="flex flex-col justify-center px-12 lg:px-20">
          <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
            INSPIRED BY  <br />
            <span className="allura text-7xl font-normal">Racing's Golden</span> <br/>
            ERA
          </h2>
          <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
            Inspired by motorsports golden era the new American Classic
            Chronograph H brings tactile mechanics and bold color together in
            one dynamic reference
          </p>
          <button className="mt-8 w-40 border border-gray-400 font-semibold py-3 text-sm tracking-wider hover:bg-black hover:text-white transition cursor-pointer">
            DISCOVER
          </button>
        </div>
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src="/Imges/Img5.webp"
            alt="watch"
            fill
            className="object-cover"/>
        </div>
      </div>
    </section>
  );
}