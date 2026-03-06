import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full min-h-screen relative flex">

      {/* Left Side */}
      <div className="w-1/2 bg-[#0b1d3a] flex items-center justify-center">
        <Image
          src="/watch1.png"
          alt="left image"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <Image
          src="/watch2.png"
          alt="right image"
          width={220}
          height={220}
          className="object-contain"
        />
      </div>

      {/* Center Image */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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