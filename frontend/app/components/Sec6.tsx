"use client";
import Image from "next/image";
import { useCart } from "../(site)/context/cartcontext";
import { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SmartWatchSection() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const product = {
    id: 4,
    name: "Smart Watch",
    price: 15000,
    image: "/watch/w11.jpg",
    quantity: 1,
  };

  const handleAdd = () => {
    addToCart(product);
    setToast(product.name);
    setTimeout(() => {
      setToast("");
    }, 2500);
  };
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#09162c] poppins relative">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm">
            <span className="font-semibold">{toast}</span> Added To Cart!
          </p>
        </div>
      )}
      <div className="w-full md:w-1/2 h-80 md:h-auto relative">
        <Image
          src={product.image} 
          alt={product.name}
          width={900}
          height={900}
          className="object-cover"/>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-16 py-12 text-white text-center">
        <h1 className="text-7xl mb-6 allura">{product.name}</h1>
        <p className="text-lg font-extralight mb-8">
          Experience the perfect blend of style and technology with this smart watch. Track your fitness, stay connected, and elevate your everyday look effortlessly. Designed for comfort and performance.
        </p>
        <button
          onClick={handleAdd}
          className="bg-white text-[#09162c] border border-[#09162c] px-10 py-4 text-lg hover:bg-[#09162c]
          hover:text-white hover:border-white transition cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
}