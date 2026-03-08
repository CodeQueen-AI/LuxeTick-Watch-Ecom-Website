import Image from "next/image";

export default function Collections() {
  const watches = [
    {
      title: "ANATOM",
      img: "/Img1.avif",
    },
    {
      title: "CENTRIX",
      img: "/Img2.avif",
    },
    {
      title: "TRUE SQUARE",
      img: "/Img3.avif",
    },
  ];
  return (
    <section className="py-20 px-10 poppins">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl">
          Explore Our <span  className="text-5xl tracking-wide alura">Collections</span>
        </h2>
        <p className="text-gray-700 mt-5 text-sm leading-relaxed">
          Our watch collection showcases a perfect blend of timeless design and modern craftsmanship
         Each piece is carefully created to deliver elegance precision and durability From classic styles to 
         contemporary designs our watches are made to complement every moment and elevate your everyday look
        </p>
      </div>
      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {watches.map((watch, index) => (
          <div key={index} className="group">
            <div className="overflow-hidden">
              <Image
                src={watch.img}
                width={600}
                height={400}
                alt={watch.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500 
                cursor-pointer"/>
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-wide">
              {watch.title}
            </h3>
            <div className="mt-3 flex items-center gap-3 text-sm uppercase tracking-widest">
              <span>Discover</span>
              <div className="w-8 h-[1px] bg-black"></div>
            </div>

          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <button className="border border-black px-8 py-3 text-sm uppercase tracking-widest bg-white
         text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer">
          Discover More
        </button>
      </div>
    </section>
  );
}