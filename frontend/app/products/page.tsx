"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Classic Watch", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Luxury Gold", price: "$450", img: "/products/p2.jpg" },
  { id: 3, name: "Sporty Chrono", price: "$300", img: "/products/p3.jpg" },
  { id: 4, name: "Elegant Black", price: "$350", img: "/products/p4.jpg" },
  { id: 5, name: "Classic Watch", price: "$250", img: "/products/p5.jpg" },
  { id: 6, name: "Luxury Gold", price: "$450", img: "/products/p6.jpg" },
  { id: 7, name: "Sporty Chrono", price: "$300", img: "/products/p7.jpg" },
  { id: 8, name: "Elegant Black", price: "$350", img: "/products/p8.jpg" },
];
export default function ProductsPage() {
  return (
    <section className="w-full min-h-screen px-16 py-12 poppins">
      <h1 className="text-7xl font-extralight mb-10 text-center allura">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-start border border-gray-300 p-4 transition">
            
            {/* Image */}
            <div className="w-full h-60 relative mb-4">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-contain"/>
            </div>

            {/* Name */}
            <h2 className="text-xl font-medium mb-2">{product.name}</h2>

            {/* Button + Price */}
            <div className="flex items-center justify-between w-full mt-auto">
              <Link
                href={`/products/${product.id}`}
                className="px-4 py-1 border border-black bg-black text-white hover:bg-white hover:text-black transition cursor-pointer text-sm"
              >
                View
              </Link>
              <span className="font-medium font-serif text-3xl">{product.price}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
