import Image from "next/image";
export default function ProductShowcase() {
  const products = [
    "/watch/w12.jpg",
    "/watch/w13.jpg",
    "/watch/w14.jpg",
    "/watch/w15.jpg",
    "/watch/w16.jpg",
  ];
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="p-6 text-center">
        <h1 className="text-5xl md:text-6xl allura">
          Discover the Beauty of Timeless Luxury Watches
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={img}
              alt="product"
              fill
              className="object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}