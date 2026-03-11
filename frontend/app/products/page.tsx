"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiFilter, FiPlus, FiX } from "react-icons/fi"; // added FiX for close icon
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const products = [
  { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg" },
  { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg" },
  { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg" },
  { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg" },
  { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg" },
];

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <section className="w-full min-h-screen px-12 py-12">

      {/* Heading Center */}
      <h1 className="text-4xl font-semibold text-center mb-12">
        Our Products
      </h1>

      {/* Filter Button */}
      <div
        onClick={() => setOpenFilter(!openFilter)}
        className="flex items-center gap-2 cursor-pointer mb-10"
      >
        <FiFilter size={22} />
        <span className="text-lg font-semibold">Filters</span>
      </div>

      <div className="flex gap-10">

        {/* Sidebar */}
<div
  className={`transition-all duration-500 overflow-hidden ${
    openFilter ? "w-72" : "w-0"
  }`}
>
  <div className="border p-6 bg-white">

    {/* Top Row: Clear Filters + Close Icon */}
    <div className="flex justify-between items-center mb-6">
      <p
        className="text-sm text-gray-400 cursor-pointer hover:underline"
        onClick={() => console.log("Clear Filters clicked")}
      >
        Clear All Filters
      </p>
      <button onClick={() => setOpenFilter(false)} className="text-gray-500">
        <FiX size={20} />
      </button>
    </div>

    {/* Filter Items */}
    {["BRANDS", "PRICE", "MOVEMENT", "STRAP TYPE", "WATER RESISTANCE"].map(
      (item, index) => (
        <div key={index} className="flex justify-between items-center py-4">
          <span className="font-medium">{item}</span>
          <FiPlus />
        </div>
      )
    )}

    <button className="w-full bg-black text-white py-3 mt-8">
      APPLY
    </button>

  </div>
</div>

        {/* Products Grid */}
        <div
          className={`grid gap-8 flex-1 transition-all duration-500 ${
            openFilter ? "grid-cols-3" : "grid-cols-4"
          }`}
        >
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="border p-5 hover:shadow-lg transition cursor-pointer">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* Pagination Center */}
      <div className="flex justify-center items-center gap-6 mt-16">
        <button className="border p-3 hover:bg-gray-100 transition">
          <IoIosArrowBack size={20} />
        </button>
        <button className="px-4 py-2 border bg-black text-white">1</button>
        <button className="px-4 py-2 border hover:bg-gray-100">2</button>
        <button className="border p-3 hover:bg-gray-100 transition">
          <IoIosArrowForward size={20} />
        </button>
      </div>

    </section>
  );
}