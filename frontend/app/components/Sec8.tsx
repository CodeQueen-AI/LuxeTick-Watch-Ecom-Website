"use client";
import Image from "next/image";
import { useCart } from "../(site)/context/cartcontext";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function WatchSection() {

  const { addToCart } = useCart();
  const [toast, setToast] = useState("");

  const products = [
    { id: 5, name: "Tatum", price: 150, img: "/watch/w4.webp" },
    { id: 6, name: "Theo", price: 145, img: "/watch/w5.webp" },
    { id: 7, name: "Xavier", price: 190, img: "/watch/w6.webp" },
    { id: 8, name: "Pro-mariner", price: 188, img: "/watch/w7.webp" },
  ];

  const handleAdd = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.img,
      quantity: 1,
    });

    setToast(item.name);

    setTimeout(() => setToast(""), 2500);
  };

  return (
    <section className="py-12 poppins relative">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm">
            <span className="font-semibold">{toast}</span> Added To Cart!
          </p>
        </div>
      )}
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
              <button
                onClick={() => handleAdd(item)}
                className="mt-2 border border-black px-4 py-1 text-xs hover:bg-black hover:text-white transition cursor-pointer">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}