import Image from "next/image";

export default function WatchSection() {
  const products = [
    {
      name: "Tatum",
      price: "Rs.131,596.80",
      img: "/Img5.png",
    },
    {
      name: "Theo",
      price: "Rs.43,078.77",
      img: "/Img6.png",
    },
    {
      name: "Xavier",
      price: "Rs.88,321.32",
      img: "/Img7.png",
    },
    {
      name: "Pro-mariner",
      price: "Rs.302,731.64",
      img: "/Img8.png",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

        {/* Left Image */}
        <div className="relative">
          <Image
            src="/Img4.jpg"
            alt="watch"
            width={700}
            height={600}
            className="w-full object-cover"
          />

          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
            The Aviator Watch
          </button>
        </div>

        {/* Right Products */}
        <div className="grid grid-cols-2 gap-10 text-center">
          {products.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="mx-auto"
              />

              <h3 className="mt-3 text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-600 mt-1">{item.price}</p>

              <button className="mt-2 border border-black px-4 py-1 text-xs hover:bg-black hover:text-white transition">
                Add To Cart
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}