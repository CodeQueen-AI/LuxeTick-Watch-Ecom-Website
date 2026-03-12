"use client";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { useCart } from "../Context/cartcontext";
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
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* cart panel */}
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white shadow-xl flex flex-col p-8 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center poppins">
          <h2 className="text-3xl font-semibold ">Shopping Cart</h2>

          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-1 text-lg font-medium hover:text-gray-600"
          >
            <AiOutlineCloseCircle size={22} />
          </button>
        </div>

        <hr className="my-6" />

        {/* Products */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center"
            >
              {/* Image + Text */}
              <div className="flex items-center gap-5 ml-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={85}
                  height={85}
                  className="rounded-xl object-cover"
                />

                <div className="flex flex-col justify-center">
                  <p className="text-lg font-medium">{item.name}</p>

                  <p className="text-gray-600 text-sm">
                    {item.quantity} ×{" "}
                    <span className="text-yellow-600 font-semibold">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>

              {/* remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-500 hover:text-black"
              >
                <AiOutlineCloseCircle size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="mt-6">

          <div className="flex justify-between text-lg font-medium">
            <span>Subtotal</span>

            <span className="text-yellow-600 font-semibold">
              ${subtotal}
            </span>
          </div>

          <hr className="my-6" />

          
          <div className="flex gap-3">
            <Link href="/Cart">
  <button className="flex-1 border rounded-full py-3 px-2 text-sm font-semibold hover:bg-black hover:text-white transition">
    Cart
  </button>
  </Link>

  <button className="flex-1 border rounded-full py-2 text-sm font-semibold hover:bg-black hover:text-white transition">
    Checkout
  </button>
</div>
        </div>
      </div>
    </div>
    </div>
  );
}