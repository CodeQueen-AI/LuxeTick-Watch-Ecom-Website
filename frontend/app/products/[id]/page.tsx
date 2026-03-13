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
  image: string;
  description?: string;
  brand: string;
  color: string;
  strap: string;
  category: string;
  gender: string;
}

const products: Product[] = [
  { id: 9, name: "Black Leather", brand: "Rolex", color: "Black", price: 250, strap: "Leather", category: "Luxury", gender: "Men", image: "/products/p1.jpg", description: "Classic black leather watch with a timeless design." },
  { id: 10, name: "Rose Gold", brand: "Casio", color: "Rose Gold", price: 350, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p2.jpg", description: "Elegant rose gold watch perfect for formal occasions.", new: true },
  { id: 11, name: "White Dial", brand: "Fossil", color: "White", price: 200, strap: "Silicone", category: "Sport", gender: "Men", image: "/products/p3.jpg", description: "Sporty white dial watch with comfortable silicone strap." },
  { id: 12, name: "Silver Chrono", brand: "Seiko", color: "Silver", price: 450, strap: "Metal", category: "Smart Watch", gender: "Women", image: "/products/p4.jpg", description: "Modern silver chronograph with smart features.", outofstock: true },
  { id: 13, name: "Rose Slim", brand: "Casio", color: "Rose", price: 350, strap: "Leather", category: "Classic", gender: "Women", image: "/products/p5.jpg", description: "Slim and stylish rose-colored leather watch." },
  { id: 14, name: "Black Steel", brand: "Rolex", color: "Black", price: 450, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p6.jpg", description: "Luxury black steel watch with a bold design.", discount: 5 },
  { id: 15, name: "Blue Sport", brand: "Omega", color: "Blue", price: 500, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p9.jpg", description: "Durable blue sports watch with metal strap." },
  { id: 16, name: "Pink Elegance", brand: "Tag Heuer", color: "Pink", price: 450, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p10.jpg", description: "Elegant pink watch for women with a luxury feel.", discount: 5 },
  { id: 17, name: "Gold Master", brand: "Rolex", color: "Gold", price: 650, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p11.jpg", description: "Golden masterpiece for the ultimate luxury lover.", new: true },
  { id: 18, name: "Red Dial Classic", brand: "Seiko", color: "Red", price: 320, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p12.jpg", description: "Classic red dial watch for men." },
  { id: 19, name: "Silver Minimal", brand: "Casio", color: "Silver", price: 210, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p13.jpg", description: "Minimalistic silver watch with elegant design.", outofstock: true },
  { id: 20, name: "Gold Shine", brand: "Fossil", color: "Gold", price: 380, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p14.jpg", description: "Shining gold watch to add glamour to any outfit." },
  { id: 21, name: "Rose Beauty", brand: "Fossil", color: "Rose Gold", price: 340, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p15.jpg", description: "Beautiful rose gold watch for everyday elegance." },
  { id: 22, name: "Black Steel Pro", brand: "Casio", color: "Black", price: 410, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p16.jpg", description: "Professional black steel sports watch." },
  { id: 23, name: "Green Field", brand: "Seiko", color: "Green", price: 300, strap: "Nylon", category: "Sport", gender: "Men", image: "/products/p17.jpg", description: "Green nylon strap watch designed for outdoor activities.", discount: 10 },
  { id: 24, name: "Rose Classic", brand: "Fossil", color: "Rose Gold", price: 360, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p18.jpg", description: "Timeless rose gold classic watch.", new: true },
  { id: 25, name: "Black Diver", brand: "Rolex", color: "Black", price: 700, strap: "Rubber", category: "Sport", gender: "Men", image: "/products/p19.jpg", description: "High-end black diver watch for water sports." },
  { id: 26, name: "Diamond Lady", brand: "Tag Heuer", color: "Silver", price: 520, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p20.jpg", description: "Silver luxury watch with diamond accents.", new: true },
  { id: 27, name: "Golden Charm", brand: "Rolex", color: "Gold", price: 620, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p21.jpg", description: "Charming golden watch perfect for gifting." },
  { id: 28, name: "Steel Chrono", brand: "Seiko", color: "Silver", price: 410, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p22.jpg", description: "Silver steel chronograph for sports enthusiasts." },
  { id: 29, name: "Black Tactical", brand: "Casio", color: "Black", price: 290, strap: "Rubber", category: "Sport", gender: "Men", image: "/products/p23.jpg", description: "Tactical black watch built for tough conditions.", outofstock: true },
  { id: 30, name: "Blue Royal", brand: "Omega", color: "Blue", price: 540, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p24.jpg", description: "Royal blue luxury watch with metal strap." },
  { id: 31, name: "Golden Chrono", brand: "Rolex", color: "Gold", price: 680, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p25.jpg", description: "Golden chronograph for precision and style.", discount: 15 },
  { id: 32, name: "Blue Mesh", brand: "Fossil", color: "Blue", price: 260, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p26.jpg", description: "Blue mesh watch for a modern classic look." },
  { id: 33, name: "Skeleton Dial", brand: "Tag Heuer", color: "Brown", price: 590, strap: "Leather", category: "Luxury", gender: "Men", image: "/products/p27.jpg", description: "Luxury skeleton dial watch showcasing inner mechanics.", new: true },
  { id: 34, name: "Brown Classic", brand: "Seiko", color: "Brown", price: 370, strap: "Leather", category: "Classic", gender: "Men", image: "/products/p28.jpg", description: "Classic brown leather watch for daily wear." },
  { id: 35, name: "Sport Racer", brand: "Casio", color: "Blue", price: 330, strap: "Leather", category: "Sport", gender: "Men", image: "/products/p29.jpg", description: "Blue leather strap watch designed for racing." },
  { id: 36, name: "Golden Edge", brand: "Rolex", color: "Gold", price: 640, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p30.jpg", description: "Golden edge luxury watch with elegant finish." },
  { id: 37, name: "Silver Pro", brand: "Omega", color: "Silver", price: 470, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p31.jpg", description: "Professional silver watch for sports.", outofstock: true },
  { id: 38, name: "Rose Mini", brand: "Fossil", color: "Rose Gold", price: 310, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p32.jpg", description: "Mini rose gold watch for women." },
  { id: 39, name: "Steel Classic", brand: "Seiko", color: "Silver", price: 420, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p33.jpg", description: "Classic steel watch for everyday wear." },
  { id: 40, name: "Beige Fashion", brand: "Casio", color: "Beige", price: 280, strap: "Fabric", category: "Classic", gender: "Women", image: "/products/p34.jpg", description: "Fashionable beige watch with fabric strap.", discount: 20 },
  { id: 41, name: "Black Gold Mix", brand: "Rolex", color: "Black", price: 610, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p35.jpg", description: "Black and gold mix watch for luxurious style." },
  { id: 42, name: "Minimal Lady", brand: "Fossil", color: "Black", price: 290, strap: "Leather", category: "Classic", gender: "Women", image: "/products/p36.jpg", description: "Minimalist black leather watch for women.", new: true },
  { id: 43, name: "Black Chronograph", brand: "Tag Heuer", color: "Black", price: 560, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p37.jpg", description: "Black chronograph watch for sporty men." }
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
      image: product.image,
      quantity: quantity,
    });

    setToastMessage(`"${product.name}" Added To Cart!`);
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
              src={product.image}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-between">

            <div>
              {/* Product Name */}
              <h1 className="text-6xl font-extralight mb-4 text-blue-950 allura text-center lg:text-left">
                {product.name}
              </h1>

              {/* Description Box */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-lg font-serif px-1">DESCRIPTION</legend>
                <p className="text-sm">{product.description}</p>
              </fieldset>

              {/* Price Box */}
              <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
                <legend className="text-lg font-serif px-1">PRICE</legend>
                <p className="text-2xl font-serif">${product.price}</p>
              </fieldset>

              {/* Accordion */}
              <div className="w-full max-w-md mt-2 space-y-1">

              
{/* Product Details */}
<div className="border-b py-2">
  <button
    onClick={() => toggleSection("details")}
    className="flex justify-between items-center w-full text-lg font-serif cursor-pointer"
  >
    Product Details
    <span className={`text-xl transition-transform duration-300 ${openSection === "details" ? "rotate-45" : ""}`}>+</span>
  </button>

  <div className={`overflow-hidden transition-all duration-300 ${openSection === "details" ? "max-h-32 mt-2" : "max-h-0"}`}>
    <div className="text-sm px-1">
      <p>
        The {product.color.toLowerCase()} {product.name} brand is <span className="font-medium text-black">{product.brand}</span> belongs to the <span className="font-medium text-black">{product.category}</span> category and is designed for <span className="font-medium text-black">{product.gender}</span>
      </p>
    </div>
  </div>
</div>

{/* Specifications */}
<div className="border-b py-2">
  <button
    onClick={() => toggleSection("spec")}
    className="flex justify-between items-center w-full text-lg font-serif cursor-pointer"
  >
    Specifications
    <span className={`text-xl transition-transform duration-300 ${openSection === "spec" ? "rotate-45" : ""}`}>+</span>
  </button>

  <div className={`overflow-hidden transition-all duration-300 ${openSection === "spec" ? "max-h-32 mt-2" : "max-h-0"}`}>
    <div className="text-sm px-1">
      <p>
        It comes in <span className="font-medium text-black">{product.color}</span> color with a <span className="font-medium text-black">{product.strap}</span> strap
      </p>
    </div>
  </div>
</div>

              </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-4">

              {/* Quantity + Favorite */}
              <div className="flex space-x-3 mb-4">
                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded cursor-pointer">
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-10 h-6 text-center border-none focus:outline-none text-sm cursor-pointer"
                  />
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="text-4xl text-pink-500 cursor-pointer"
                >
                  {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="flex justify-center">
                <button
                  onClick={handleAddToCart}
                  className="px-12 py-4 border border-white text-white bg-black  hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
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
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
          <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          <p className="text-sm ">{toastMessage}</p>
        </div>
      )}

    </section>
  );
}