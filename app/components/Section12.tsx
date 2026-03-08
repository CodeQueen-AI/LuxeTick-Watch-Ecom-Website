import Image from "next/image";
export default function WatchBanner() {
  return (
    <section className="relative py-24 overflow-hidden poppins">
      <div
        className="absolute inset-0 bg-[#09162c]"
        style={{clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)"}}></div>
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        <div className="text-white">
          <h1 className="text-6xl font-bextralight mb-6">
            Quartz{" "}
            <span className="allura text-7xl">
              Casio
            </span>
          </h1>
          <p className="mb-3 text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="mb-3 text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
          <p className="mb-6 text-gray-300">
            Voluptate atque soluta illum iste voluptates nam,
            consequatur qui doloremque delectus ullam quaerat
            libero ut, nisi praesentium
          </p>
          <p className="text-2xl font-semibold mb-6">
            $ 3,899
          </p>
          <button className="bg-white px-8 py-4 text-black text-lg hover:bg-[#08121d] transition">
            Order Now
          </button>
        </div>
        <div className="flex justify-center">
          <Image
            src="/watch/w18.png"
            width={420}
            height={420}
            alt="watch"/>
        </div>
      </div>
    </section>
  );
}