import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full h-[85vh] relative flex">

      {/* Left Side */}
      <div className="w-1/2 bg-[#09162c] flex flex-col items-center justify-start pt-8 gap-4">
        <Image
          src="/watch1.png"
          alt="left image"
          width={220}
          height={220}
          className="object-contain"
        />
        {/* Sell Button */}
        <button className="border border-white text-white px-10 py-3 mt-6 hover:bg-white hover:text-[#09162c] transition-colors duration-300 cursor-pointer">
          Sell
        </button>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-start pt-8 gap-4">
        <Image
          src="/watch2.png"
          alt="right image"
          width={220}
          height={220}
          className="object-contain"
        />
        {/* Buy Button */}
        <button className="border border-black text-black px-10 py-3 mt-6 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
          Buy
        </button>
      </div>

      {/* Center Image */}
      <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/watch3.png"
          alt="center image"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

    </section>
  );
}