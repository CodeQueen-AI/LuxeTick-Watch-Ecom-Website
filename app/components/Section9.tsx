import Image from "next/image";

export default function ProductShowcase() {
  const products = [
    "/watch10.jpg",
    "/watch7.jpg",
    "/watch9.jpg",
    "/Img4.jpg.jpg",
    "/Img1.avif",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">

      {/* Top Banner */}
      <div className="p-6">



        {/* Center Text */}
          <h1 className="text-5xl font-semibold tracking-widest">
            Discover the Beauty of Timeless Luxury Watches
          </h1>



      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

        {products.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/3] overflow-hidden"
          >
            <Image
              src={img}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
        ))}

      </div>

    </div>
  );
}