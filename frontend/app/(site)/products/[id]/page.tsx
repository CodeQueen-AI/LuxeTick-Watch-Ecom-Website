"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";

import { useCart } from "@/app/(site)/context/cartcontext";
import { useWishlist } from "@/app/(site)/context/wishlistcontext";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product || data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });

    setToastMessage(`${product.name} Added To Cart!`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleWishlistClick = () => {
    const exists = wishlistItems.find((item: any) => item.id === product._id);

    if (exists) {
      removeFromWishlist(product._id);
      setToastMessage(`${product.name} Removed From Wishlist!`);
    } else {
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
      setToastMessage(`${product.name} Added To Wishlist!`);
    }

    setTimeout(() => setToastMessage(null), 2500);
  };

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!product) return <p className="text-center mt-20">Product not found</p>;

  return (
    <section className="poppins overflow-hidden">
      <div className="container px-4 md:px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-start">

          {/* 🖼 Image */}
          <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
            <Image
              src={product?.image}
              alt={product?.name}
              fill
              className="object-contain"
            />
          </div>

          {/* 📦 Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-between">
            <div>

              <h1 className="text-6xl font-extralight mb-4 text-blue-950 allura text-center lg:text-left capitalize">
                {product?.name}
              </h1>

              {/* Description */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-lg font-serif px-1">DESCRIPTION</legend>
                <p className="text-sm">{product?.description}</p>
              </fieldset>

              {/* Price */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-lg font-serif px-1">PRICE</legend>
                <p className="text-2xl font-serif">${product?.price}</p>
              </fieldset>

              {/* Accordion */}
              <div className="w-full max-w-md mt-2 space-y-1">

                {/* Details */}
                <div className="border-b py-2">
                  <button
                    onClick={() => toggleSection("details")}
                    className="flex justify-between w-full text-lg font-serif transition-colors duration-300 cursor-pointer"
                  >
                    Product Details
                    <span
                      className={`transition-transform duration-300 inline-block ${openSection === "details" ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,margin] duration-500 ${
                      openSection === "details" ? "max-h-40 mt-2" : "max-h-0 mt-0"
                    }`}
                  >
                    <p className="text-sm">
                      {product?.color} {product?.name} by{" "}
                      <span className="font-medium">{product?.brand}</span> in{" "}
                      <span className="font-medium">{product?.category}</span> for{" "}
                      <span className="font-medium">{product?.gender}</span>.
                    </p>
                  </div>
                </div>

                {/* Specs */}
                <div className="border-b py-2">
                  <button
                    onClick={() => toggleSection("spec")}
                    className="flex justify-between w-full text-lg font-serif transition-colors duration-30 cursor-pointer"
                  >
                    Specifications
                    <span
                      className={`transition-transform duration-300 inline-block ${openSection === "spec" ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height,margin] duration-500 ${
                      openSection === "spec" ? "max-h-40 mt-2" : "max-h-0 mt-0"
                    }`}
                  >
                    <p className="text-sm">
                      This watch comes in a stylish{" "}
                      <span className="font-medium text-black">{product?.color}</span> color
                      and features a{" "}
                      <span className="font-medium text-black">{product?.strap}</span> strap
                      offering both comfort and elegance for everyday wear
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 🛒 Bottom - Centered Layout */}
            <div className="mt-6 flex flex-col items-center gap-4">

              {/* Quantity + Wishlist */}
              <div className="flex items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center gap-2 border px-4 py-2">
                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-12 text-center"
                  />
                  <button onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>

                {/* Wishlist */}
                <button
                  onClick={handleWishlistClick}
                  className="text-3xl text-pink-500 transition-transform duration-300 hover:scale-110 hover:text-pink-700"
                >
                  {wishlistItems.find((i: any) => i.id === product._id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="px-16 py-4 bg-black text-white border border-black transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer"
              >
                Add To Cart
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white shadow-xl px-5 py-3">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p>{toastMessage}</p>
        </div>
      )}
    </section>
  );
}






