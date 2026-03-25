"use client";
import Image from "next/image";
import { useCart } from "../(site)/context/cartcontext";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SeasonCollection() {

  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const products = [
    {
      id: 1,
      name: "Kenneth Cole New York",
      price: 5000,
      image: "/watch/w8.webp",
    },
    {
      id: 2,
      name: "Lee Cooper",
      price: 4240,
      image: "/watch/w9.webp",
    },
    {
      id: 3,
      name: "Edifice",
      price: 7600,
      image: "/watch/w10.webp",
    },
  ];

  const handleAdd = (item: any) => {

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });

    setToast(item.name);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <section className="w-full py-20 relative poppins">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn">
          <AiOutlineCheckCircle  className="text-green-500" size={22} />
          <p className="text-sm">
            <span className="font-semibold">{toast}</span> Added To Cart!
          </p>
        </div>
      )}
      <div className="max-w-7xl mx-auto poppins px-6">
        <h1 className="text-4xl text-center mb-16">
          <span className="allura text-6xl">Season Collection</span>
        </h1>
        <div className="grid grid-cols-3 gap-12">
          {products.map((item) => (
            <div key={item.id}>
              <div className="relative w-full h-[420px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover cursor-pointer"/>
              </div>
              <h2 className="text-2xl mt-6">
                {item.name}
              </h2>
              <button
                onClick={() => handleAdd(item)}
                className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}