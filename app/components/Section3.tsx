import Image from "next/image";

export default function DiscoverSection() {
  const items = [
    { title: "MEN", img: "/Banner/D1.avif" },
    { title: "WOMEN", img: "/Banner/D2.avif" },
    { title: "JAZZMASTER", img: "/Banner/D3.avif" },
    { title: "AUTOMATIC", img: "/Banner/D4.avif" },
    { title: "KHAKKI NAVY", img: "/Banner/D5.webp" },
    { title: "PILOT", img: "/Banner/D6.avif" },
  ];

  return (
    <section className="py-16 poppins">
      <h2 className="text-center text-2xl tracking-[0.3em] mb-12">
        DISCOVER
      </h2>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map((item, index) => (
          <div key={index} className="relative h-[350px] overflow-hidden group cursor-pointer">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"/>
            <div className="absolute inset-0 bg-black/15"></div>
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <h3 className="text-white font-semibold tracking-widest text-lg">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}