"use client";

export default function Collection() {
  return (
    <section className="py-20">
      <h1 className="text-center text-7xl font-extralight mb-12 allura">
        Collection
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-3 gap-5 cursor-pointer">
        <div className="relative h-[450px] bg-[url('/watch/w20.jpg')] bg-cover bg-center group">
          <Overlay name="Rado" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative h-[215px] bg-[url('/watch/w21.jpg')] bg-cover bg-center group">
            <Overlay name="Tissot" />
          </div>
          <div className="relative h-[215px] bg-[url('/watch/w22.jpg')] bg-cover bg-center group">
            <Overlay name="Cartier" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative h-[140px] bg-[url('/watch/w23.jpg')] bg-cover bg-center group">
            <Overlay name="Geneve" />
          </div>
          <div className="relative h-[140px] bg-[url('/watch/w24.jpg')] bg-cover bg-center group">
            <Overlay name="Omega" />
          </div>
          <div className="relative h-[140px] bg-[url('/watch/w25.jpg')] bg-cover bg-center group">
            <Overlay name="Fitron" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Overlay({ name }: { name: string }) {
  return (
    <>
      <div className="absolute inset-0 bg-black/50 scale-x-0 origin-right transition-transform duration-700 group-hover:scale-x-100 group-hover:origin-left"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
        <span className="bg-[#e8cfa8] px-6 py-3 uppercase text-sm text-white">
          {name}
        </span>
      </div>
    </>
  );
}