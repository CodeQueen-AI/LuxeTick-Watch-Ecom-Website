
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
    <section className="py-20 px-10">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold tracking-wide">
          EXPLORE OUR COLLECTIONS
        </h2>

        <p className="text-gray-600 mt-5 text-sm leading-relaxed">
          Rado is known as the Master of Materials: from high-tech ceramic
          to sapphire crystal and diamonds to stainless steel, our
          innovative watches have no boundaries when it comes to design.
          Feel and discover the Rado difference!
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {watches.map((watch, index) => (
          <div key={index} className="group">

            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={watch.img}
                width={600}
                height={400}
                alt={watch.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500 cursor-pointer"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold tracking-wide">
              {watch.title}
            </h3>

            {/* Discover */}
            <div className="mt-3 flex items-center gap-3 text-sm uppercase tracking-widest">
              <span>Discover</span>
              <div className="w-8 h-[1px] bg-black"></div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}