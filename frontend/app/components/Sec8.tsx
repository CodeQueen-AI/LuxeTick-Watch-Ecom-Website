"use client";
import Image from "next/image";
import Link from "next/link";

export default function WatchSection() {

  const products = [
    { id: 5, name: "Tatum", price: 150, img: "/watch/w4.webp" },
    { id: 6, name: "Theo", price: 145, img: "/watch/w5.webp" },
    { id: 7, name: "Xavier", price: 190, img: "/watch/w6.webp" },
    { id: 8, name: "Pro-mariner", price: 188, img: "/watch/w7.webp" },
  ];

  return (
    <section className="py-12 poppins relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        <div className="relative">
          <Image
            src="/Imges/Img4.jpg"
            alt="watch"
            width={700}
            height={600}
            className="w-full object-cover"/>
          <button className="absolute bottom-6 left-1/2 -translate-x-1/2 border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition">
            The Aviator Watch
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10 text-center">
          {products.map((item) => (
            <div key={item.id}>
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="mx-auto"/>
              <h3 className="mt-3 text-sm font-medium">{item.name}</h3>
              <p className="text-xs text-gray-600 mt-1">
                ${item.price.toLocaleString()}
              </p>
              <Link href="/products">
              <button
                className="mt-2 border border-black px-4 py-1 text-xs hover:bg-black hover:text-white transition cursor-pointer">
                View
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}