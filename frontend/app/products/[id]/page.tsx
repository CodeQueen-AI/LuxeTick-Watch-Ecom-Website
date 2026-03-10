"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from '../../Context/cartcontext'

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  description?: string;
}

const products: Product[] = [
  { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg", description: "Classic black leather strap with elegant dial." },
  { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg", description: "Stylish rose gold watch that blends modern and timeless design." },
  { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg", description: "Simple and clean white dial watch with a minimalistic design." },
  { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg", description: "Sophisticated silver chrono with precise movement." },
  { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg", description: "Slim rose gold watch with elegant curves." },
  { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg", description: "Durable black steel watch for a modern look." },
  { id: 7, name: "Gold Bracelet", price: "$380", img: "/products/p7.jpg", description: "Luxurious gold bracelet watch perfect for formal wear." },
  { id: 8, name: "Brown Leather", price: "$220", img: "/products/p8.jpg", description: "Classic brown leather strap with elegant dial." },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { addToCart } = useCart();

  if (!product) return <div className="text-center mt-20 text-3xl">Product not found</div>;

  const handleHeartClick = () => setIsFavorite(!isFavorite);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-4 md:px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto">
          {/* Image */}
          <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
            <Image
              alt={product.name}
              src={product.img}
              fill
              className="object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-purple-900 font-serif" style={{ fontFamily: "'Dancing Script', cursive" }}>
              {product.name}
            </h1>

            {/* Description */}
            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold">DESCRIPTION</legend>
              <p className="text-base sm:text-lg md:text-xl font-bold text-black font-serif">{product.description}</p>
            </fieldset>

            {/* Price */}
            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold text-gray-500">PRICE</legend>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{product.price}</p>
            </fieldset>

            {/* Quantity + Heart */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-4 space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2 border border-gray-300 rounded-xl px-3 py-2 w-fit">
                <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">-</button>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-12 h-6 text-center border-none focus:outline-none" min="1" />
                <button onClick={() => setQuantity((prev) => prev + 1)} className="w-6 h-6 flex items-center justify-center border border-gray-400 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer">+</button>
              </div>

              <button onClick={handleHeartClick} className={`text-3xl focus:outline-none cursor-pointer ${isFavorite ? "text-pink-500 scale-110" : "text-pink-500"}`}>
                {isFavorite ? <FaHeart className="w-9 h-9" /> : <FaRegHeart className="w-9 h-9" />}
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="w-full flex justify-center">
              <button onClick={handleAddToCart} className="px-12 py-4 border border-white text-white bg-black font-bold hover:bg-white hover:text-black transition rounded">
                Add to Cart
              </button>
            </div>

            {/* Popup */}
            {showPopup && (
              <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center">
                <div className="relative w-3/4 max-w-md p-4 bg-white/20 backdrop-blur-md border-2 border-purple-600 shadow-lg flex items-center justify-center">
                  <span className="absolute top-0 left-0 w-full h-1 bg-purple-600 rounded-t-xl"></span>
                  <span className="text-purple-600 font-semibold text-lg z-10">
                    Added to Cart!
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}