"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useCart } from "../../Context/cartcontext";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description?: string;
  brand: string;
  color: string;
  strap: string;
  category: string;
  gender: string;
}

const products: Product[] = [
  {
    id: 9,
    name: "Black Leather",
    brand: "Rolex",
    color: "Black",
    price: 250,
    strap: "Leather",
    category: "Luxury",
    gender: "Men",
    img: "/products/p1.jpg",
    description: "Classic black leather watch with a timeless design.",
  },
  {
    id: 10,
    name: "Rose Gold",
    brand: "Casio",
    color: "Rose Gold",
    price: 350,
    strap: "Metal",
    category: "Classic",
    gender: "Women",
    img: "/products/p2.jpg",
    description: "Elegant rose gold watch perfect for formal occasions.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params as { id: string };
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const { addToCart } = useCart();

  if (!product)
    return <div className="text-center mt-20 text-3xl">Product not found</div>;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      quantity: quantity,
    });

    setToastMessage(`"${product.name}" added to cart`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section className="poppins overflow-hidden">
      <div className="container px-4 md:px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-start">

          {/* Product Image */}
          <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
            <Image
              alt={product.name}
              src={product.img}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-between">

            <div>
              {/* Product Name */}
              <h1 className="text-4xl font-extralight mb-4 text-blue-950 allura text-center lg:text-left">
                {product.name}
              </h1>

              {/* Description Box */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-xs font-semibold px-1">DESCRIPTION</legend>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </fieldset>

              {/* Price Box */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-xs font-semibold px-1">PRICE</legend>
                <p className="text-xl font-serif">${product.price}</p>
              </fieldset>

              {/* Accordion */}
              <div className="w-full max-w-md mt-2 space-y-1">

                {/* Product Details */}
                <div className="border-b py-2">
                  <button
                    onClick={() => toggleSection("details")}
                    className="flex justify-between items-center w-full text-sm font-semibold"
                  >
                    Product Details
                    <span className={`text-lg transition-transform duration-300 ${openSection === "details" ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSection === "details" ? "max-h-32 mt-2" : "max-h-0"}`}>
                    <div className="text-gray-600 text-sm space-y-1 px-1">
                      <p><span className="font-medium text-black">Brand:</span> {product.brand}</p>
                      <p><span className="font-medium text-black">Category:</span> {product.category}</p>
                      <p><span className="font-medium text-black">Gender:</span> {product.gender}</p>
                    </div>
                  </div>
                </div>

                {/* Specifications */}
                <div className="border-b py-2">
                  <button
                    onClick={() => toggleSection("spec")}
                    className="flex justify-between items-center w-full text-sm font-semibold"
                  >
                    Specifications
                    <span className={`text-lg transition-transform duration-300 ${openSection === "spec" ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openSection === "spec" ? "max-h-32 mt-2" : "max-h-0"}`}>
                    <div className="text-gray-600 text-sm space-y-1 px-1">
                      <p><span className="font-medium text-black">Color:</span> {product.color}</p>
                      <p><span className="font-medium text-black">Strap:</span> {product.strap}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-4">

              {/* Quantity + Favorite */}
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-3 py-1">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-10 h-6 text-center border-none focus:outline-none text-sm"
                  />
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="text-2xl text-pink-500 cursor-pointer"
                >
                  {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleAddToCart}
                  className="px-10 py-3 border border-white text-white bg-black font-bold hover:bg-white hover:text-black hover:border-black transition"
                >
                  Add to Cart
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Simplified Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50 rounded-lg">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm text-gray-800">{toastMessage}</p>
        </div>
      )}

    </section>
  );
}