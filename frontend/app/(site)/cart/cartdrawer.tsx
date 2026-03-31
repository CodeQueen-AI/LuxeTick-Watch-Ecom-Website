"use client";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useCart } from "../context/cartcontext";
import Link from "next/link";

export default function CartDrawer({ isOpen, setIsOpen }) {
  const { cartItems, removeFromCart } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="poppins">
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setIsOpen(false)}/>
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col p-8 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center poppins">
          <h2 className="text-3xl font-serif">Shopping Cart</h2>
          <button onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-lg cursor-pointer">
            <IoClose size={22} />
          </button>
        </div>
        <hr className="my-6 text-gray-300" />
        <div className="flex-1 overflow-y-auto space-y-6">
          {cartItems.map((item) => (
            <div key={item.id}
              className="flex justify-between items-center">
              <div className="flex items-center gap-5 ml-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={85}
                  height={85}
                  className="object-cover"/>
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-serif">{item.name}</p>
                  <p className="text-gray-600 text-sm">
                    {item.quantity} ×{" "}
                    <span className="text-blue-950">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer">
                <IoClose size={20} />
              </button>
            </div>
          ))}
        </div>
        {/* Subtotal */}
        <div className="mt-6">
          <div className="flex justify-between text-lg font-extrabold">
            <span>Subtotal</span>
            <span className="text-blue-950 font-serif text-2xl">
              ${subtotal}
            </span>
          </div>
          <hr className="my-6 text-gray-300" />
        <div className="flex gap-4 justify-center">
          <Link href="/cart" className="flex-1">
            <button onClick={() => {setIsOpen(false);}} className="w-full py-4 text-sm font-semibold border
             border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100 transition-all cursor-pointer">Cart
            </button>
          </Link>
          <button onClick={() => {setIsOpen(false); setTimeout(() => {
                console.log("Checkout triggered");}, 300); }} className="flex-1 w-full py-4 text-sm font-semibold 
                border border-gray-300 bg-white text-gray-800 shadow-sm hover:bg-gray-100 transition-all 
                cursor-pointer">
            Checkout
          </button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
