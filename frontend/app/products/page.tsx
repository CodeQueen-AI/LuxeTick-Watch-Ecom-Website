"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiFilter, FiPlus, FiX } from "react-icons/fi";

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
    <section className="w-full min-h-screen p-10 poppins">

      {/* Filter Button */}
      <div
        onClick={() => setOpenFilter(true)}
        className="flex items-center gap-2 cursor-pointer mb-6"
      >
        <FiFilter size={22} />
        <span className="text-lg font-semibold">Filters</span>
      </div>

      <div className="flex relative">

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-6 transition-all duration-500 ${
            openFilter ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          {/* Top Header */}
          <div className="flex justify-between items-center mb-6">

            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FiFilter /> Filters
            </h2>

            <div className="flex items-center gap-4">

              <button
                onClick={() => setOpenFilter(false)}
                className="text-gray-500 flex items-center gap-1"
              >
                Close <FiX />
              </button>

              <button className="bg-black text-white px-4 py-1 text-sm">
                APPLY
              </button>

            </div>
          </div>

          <p className="text-sm text-gray-400 mb-6 cursor-pointer">
            Clear All Filters
          </p>

          {/* Filter Items */}
          {[
            "BRANDS",
            "PRICE",
            "MOVEMENT",
            "STRAP TYPE",
            "WATER RESISTANCE",
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b"
            >
              <span className="font-medium">{item}</span>
              <FiPlus className="cursor-pointer" />
            </div>
          ))}

          {/* Bottom Apply */}
          <button className="w-full bg-black text-white py-3 mt-10">
            APPLY
          </button>

        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-8 ml-10">

          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>

              <div className="border p-4 cursor-pointer hover:shadow-lg transition">

                <div className="relative h-60 w-full">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl mt-4 font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-600">{product.price}</p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}