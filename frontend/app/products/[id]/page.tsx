"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useCart } from '../../Context/cartcontext'

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  description?: string;
  brand: string
  color: string
  strap : string
  category: string
  gender : string
  discount : number
  new : boolean
  outofstock : boolean
}

const products: Product[] = [
  { id: 9, name: "Black Leather", brand: "Rolex", color: "Black", price: 250, strap: "Leather", category: "Luxury", gender: "Men", img: "/products/p1.jpg" },
  { id: 10, name: "Rose Gold", brand: "Casio", color: "Rose Gold", price: 350, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p2.jpg" , new: true},
  { id: 11, name: "White Dial", brand: "Fossil", color: "White", price: 200, strap: "Silicone", category: "Sport", gender: "Men", img: "/products/p3.jpg" },
  { id: 12, name: "Silver Chrono", brand: "Seiko", color: "Silver", price: 450, strap: "Metal", category: "Smart Watch", gender: "Women", img: "/products/p4.jpg" , outofstock: true },
  { id: 13, name: "Rose Slim", brand: "Casio", color: "Rose", price: 350, strap: "Leather", category: "Classic", gender: "Women", img: "/products/p5.jpg" },
  { id: 14, name: "Black Steel", brand: "Rolex", color: "Black", price: 450, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p6.jpg" , discount : 5},
  { id: 15, name: "Blue Sport", brand: "Omega", color: "Blue", price: 500, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p9.jpg" },
  { id: 16, name: "Pink Elegance", brand: "Tag Heuer", color: "Pink", price: 450, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p10.jpg" , discount : 5},
  { id: 17, name: "Gold Master", brand: "Rolex", color: "Gold", price: 650, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p11.jpg" , new: true},
  { id: 18, name: "Red Dial Classic", brand: "Seiko", color: "Red", price: 320, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p12.jpg" },
  { id: 19, name: "Silver Minimal", brand: "Casio", color: "Silver", price: 210, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p13.jpg", outofstock: true  },
  { id: 20, name: "Gold Shine", brand: "Fossil", color: "Gold", price: 380, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p14.jpg" },
  { id: 21, name: "Rose Beauty", brand: "Fossil", color: "Rose Gold", price: 340, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p15.jpg"},
  { id: 22, name: "Black Steel Pro", brand: "Casio", color: "Black", price: 410, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p16.jpg" },
  { id: 23, name: "Green Field", brand: "Seiko", color: "Green", price: 300, strap: "Nylon", category: "Sport", gender: "Men", img: "/products/p17.jpg" , discount : 10},
  { id: 24, name: "Rose Classic", brand: "Fossil", color: "Rose Gold", price: 360, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p18.jpg", new: true },
  { id: 25, name: "Black Diver", brand: "Rolex", color: "Black", price: 700, strap: "Rubber", category: "Sport", gender: "Men", img: "/products/p19.jpg" },
  { id: 26, name: "Diamond Lady", brand: "Tag Heuer", color: "Silver", price: 520, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p20.jpg", new: true  },
  { id: 27, name: "Golden Charm", brand: "Rolex", color: "Gold", price: 620, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p21.jpg" },
  { id: 28, name: "Steel Chrono", brand: "Seiko", color: "Silver", price: 410, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p22.jpg" },
  { id: 29, name: "Black Tactical", brand: "Casio", color: "Black", price: 290, strap: "Rubber", category: "Sport", gender: "Men", img: "/products/p23.jpg", outofstock: true  },
  { id: 30, name: "Blue Royal", brand: "Omega", color: "Blue", price: 540, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p24.jpg" },
  { id: 31, name: "Golden Chrono", brand: "Rolex", color: "Gold", price: 680, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p25.jpg" , discount : 15 },
  { id: 32, name: "Blue Mesh", brand: "Fossil", color: "Blue", price: 260, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p26.jpg" },
  { id: 33, name: "Skeleton Dial", brand: "Tag Heuer", color: "Brown", price: 590, strap: "Leather", category: "Luxury", gender: "Men", img: "/products/p27.jpg" , new: true},
  { id: 34, name: "Brown Classic", brand: "Seiko", color: "Brown", price: 370, strap: "Leather", category: "Classic", gender: "Men", img: "/products/p28.jpg" },
  { id: 35, name: "Sport Racer", brand: "Casio", color: "Blue", price: 330, strap: "Leather", category: "Sport", gender: "Men", img: "/products/p29.jpg"},
  { id: 36, name: "Golden Edge", brand: "Rolex", color: "Gold", price: 640, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p30.jpg" },
  { id: 37, name: "Silver Pro", brand: "Omega", color: "Silver", price: 470, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p31.jpg", outofstock: true   },
  { id: 38, name: "Rose Mini", brand: "Fossil", color: "Rose Gold", price: 310, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p32.jpg"},
  { id: 39, name: "Steel Classic", brand: "Seiko", color: "Silver", price: 420, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p33.jpg" },
  { id: 40, name: "Beige Fashion", brand: "Casio", color: "Beige", price: 280, strap: "Fabric", category: "Classic", gender: "Women", img: "/products/p34.jpg", discount : 20 },
  { id: 41, name: "Black Gold Mix", brand: "Rolex", color: "Black", price: 610, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p35.jpg" },
  { id: 42, name: "Minimal Lady", brand: "Fossil", color: "Black", price: 290, strap: "Leather", category: "Classic", gender: "Women", img: "/products/p36.jpg", new: true },
  { id: 43, name: "Black Chronograph", brand: "Tag Heuer", color: "Black", price: 560, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p37.jpg" }
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

  // const handleAddToCart = () => {
  //   addToCart({ ...product, quantity });
  //   setShowPopup(true);
  //   setTimeout(() => setShowPopup(false), 3000);
  // };

  const handleAddToCart = () => {
  addToCart({
    id: product.id,
    name: product.name,
    price: parseInt(product.price.replace("$","")),
    image: product.img,
    quantity: quantity
  });

  setShowPopup(true);
  setTimeout(() => setShowPopup(false), 3000);
};

  return (
    <section className="poppins overflow-hidden">
      <div className="container px-4 md:px-5 py-12 mx-auto">
        <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto">
          {/* Image */}
          <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
            <Image
              alt={product.name}
              src={product.img}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-7xl font-extralight mb-4 text-blue-950 allura">
              {product.name}
            </h1>

            {/* Description */}
            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold">DESCRIPTION</legend>
              <p className="text-base sm:text-lg md:text-xl font-bold text-black font-serif">{product.description}</p>
            </fieldset>

            {/* Price */}
            <fieldset className="border border-gray-300 rounded-xl px-4 py-3 shadow-sm mb-4">
              <legend className="text-sm px-2 font-semibold ">PRICE</legend>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif">{product.price}</p>
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
              <button onClick={handleAddToCart} className="px-12 py-4 border border-white text-white bg-black font-bold hover:bg-white hover:text-black hover:border-black cursor-pointer transition">
                Add to Cart
              </button>
            </div>

            {/* Popup */}
            {showPopup && (
              <div className="fixed inset-x-0 top-4 z-[9999] flex justify-center">
                <div className="relative w-3/4 max-w-md p-4 bg-white/20 backdrop-blur-md border-2 border-black shadow-lg flex items-center justify-center">
                  <span className="absolute top-0 left-0 w-full h-1 bg-black rounded-t-xl"></span>
                  <span className="text-black font-semibold text-lg z-10">
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



