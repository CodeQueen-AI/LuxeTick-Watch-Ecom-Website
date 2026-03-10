"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Classic Watch", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Luxury Gold", price: "$450", img: "/products/p1.jpg" },
  { id: 3, name: "Sporty Chrono", price: "$300", img: "/products/p1.jpg" },
  { id: 4, name: "Elegant Black", price: "$350", img: "/products/p1.jpg" },
];

export default function ProductsPage() {
  return (
    <section className="w-full min-h-screen px-16 py-12 poppins">

      <h1 className="text-4xl font-semibold mb-10 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center bg-white p-4 shadow-md hover:shadow-lg transition">
            
            {/* Image */}
            <div className="w-full h-60 relative mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Name */}
            <h2 className="text-lg font-medium mb-2">{product.name}</h2>

            {/* Price + View */}
            <div className="flex items-center justify-between w-full mt-auto">
              <span className="font-semibold">{product.price}</span>
              <Link
                href={`/products/${product.id}`}
                className="px-4 py-1 border border-black bg-black text-white hover:bg-white hover:text-black transition cursor-pointer text-sm"
              >
                View
              </Link>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}