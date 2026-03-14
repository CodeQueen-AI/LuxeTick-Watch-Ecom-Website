"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiFillHeart } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useWishlist } from "../context/wishlistcontext";
import { useCart } from "../context/cartcontext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [toast, setToast] = useState("");
  const [type, setType] = useState("success");

  const handleAddCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setToast(`${product.name} Added To Cart!`);
    setType("success");
    setTimeout(() => setToast(""), 2500);
  };

  const handleRemove = (product) => {
    removeFromWishlist(product.id);
    setToast(`${product.name} Removed From Wishlist`);
    setType("reject");
    setTimeout(() => setToast(""), 2500);
  };

  return (
    <div className="container mx-auto px-6 py-10 poppins">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 z-50">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-40">
          <AiOutlineCloseCircle size={60} className="text-gray-300" />
          <p className="text-xl text-center">Your Wishlist is Empty!</p>
        </div>
      ) : (
        <>
          {/* Heading */}
          <h1 className="text-6xl font-extralight allura text-center mb-10 flex items-center justify-center gap-3">
            <AiFillHeart className="text-pink-500 text-4xl" />
            My Wishlist
          </h1>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="border-b border-gray-300 text-left text-sm uppercase">
                <tr>
                  <th className="pb-4">Image</th>
                  <th className="pb-4">Name</th>
                  <th className="pb-4">Price</th>
                  <th className="pb-4 pl-4">Actions</th>
                  <th className="pb-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-300 hover:shadow-sm transition">
                    {/* Image */}
                    <td className="py-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="object-contain"/>
                    </td>
                    <td className="py-4 font-medium">{item.name}</td>
                    <td className="py-4">${item.price}</td>
                    <td className="py-4 pl-4">
                      <button
                        onClick={() => handleAddCart(item)}
                        className="px-3 py-1 bg-black text-white text-sm  hover:bg-white hover:text-black border border-black transition cursor-pointer">
                        Add to Cart
                      </button>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleRemove(item)}
                        className="text-red-500 hover:text-red-600 transition cursor-pointer">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}