// "use client";
// import { useParams } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { AiOutlineCheckCircle } from "react-icons/ai";

// import {useCart} from "@/app/(site)/context/cartcontext"
// import { useWishlist } from "@/app/(site)/context/wishlistcontext";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description?: string;
//   brand: string;
//   color: string;
//   strap: string;
//   category: string;
//   gender: string;
// }

// const products: Product[] = [
//   { id: 9, name: "Red Dial Classic", brand: "Seiko", color: "Red", price: 320, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p12.jpg", description: "A sleek red-dial Seiko watch with timeless classic style for men" },
//   { id: 10, name: "Rose Classic", brand: "Fossil", color: "Rose Gold", price: 360, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p18.jpg", new: true, description: "Elegant rose gold Fossil watch perfect for women seeking sophistication" },
//   { id: 11, name: "Blue Mesh", brand: "Fossil", color: "Blue", price: 260, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p26.jpg", description: "A classic blue mesh strap watch combining style and comfort" },
//   { id: 12, name: "Beige Fashion", brand: "Casio", color: "Beige", price: 280, strap: "Fabric", category: "Classic", gender: "Women", image: "/products/p34.jpg", discount: 20, description: "Casio beige fabric watch designed for women with fashion-forward elegance" },
//   { id: 13, name: "Black Gold Mix", brand: "Rolex", color: "Black", price: 610, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p35.jpg", description: "Luxury Rolex watch featuring black and gold accents for a bold statement" },
//   { id: 14, name: "Black Tactical", brand: "Casio", color: "Black", price: 290, strap: "Rubber", category: "Sport", gender: "Men", image: "/products/p23.jpg", outofstock: true, description: "Casio tactical sports watch with durable rubber strap and rugged design" },
//   { id: 15, name: "Diamond Lady", brand: "Tag Heuer", color: "Silver", price: 520, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p20.jpg", new: true, description: "Tag Heuer luxury silver watch with sparkling diamond accents for women" },
//   { id: 16, name: "Black Leather", brand: "Rolex", color: "Black", price: 250, strap: "Leather", category: "Luxury", gender: "Men", image: "/products/p1.jpg", description: "Classic Rolex black leather watch with refined elegance for men" },
//   { id: 17, name: "Rose Gold", brand: "Casio", color: "Rose Gold", price: 350, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p2.jpg", new: true, description: "Casio rose gold watch offering a timeless classic look for women" },
//   { id: 18, name: "White Dial", brand: "Fossil", color: "White", price: 200, strap: "Silicone", category: "Sport", gender: "Men", image: "/products/p3.jpg", description: "Fossil white dial sports watch, lightweight and perfect for everyday wear" },
//   { id: 19, name: "Silver Chrono", brand: "Seiko", color: "Silver", price: 450, strap: "Metal", category: "Smart Watch", gender: "Women", image: "/products/p4.jpg", outofstock: true, description: "Seiko silver chronograph watch with modern smart features for women" },
//   { id: 20, name: "Rose Slim", brand: "Casio", color: "Rose", price: 350, strap: "Leather", category: "Classic", gender: "Women", image: "/products/p5.jpg", description: "Slim rose leather Casio watch designed for elegance and comfort" },
//   { id: 21, name: "Black Steel", brand: "Rolex", color: "Black", price: 450, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p6.jpg", discount: 5, description: "Rolex black steel watch offering luxurious style and durability" },
//   { id: 22, name: "Blue Sport", brand: "Omega", color: "Blue", price: 500, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p9.jpg", description: "Omega blue sports watch combining classic design with active lifestyle" },
//   { id: 23, name: "Pink Elegance", brand: "Tag Heuer", color: "Pink", price: 450, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p10.jpg", discount: 5, description: "Luxury pink Tag Heuer watch with graceful and feminine aesthetics" },
//   { id: 24, name: "Gold Master", brand: "Rolex", color: "Gold", price: 650, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p11.jpg", new: true, description: "Rolex gold master series, a premium statement watch for men" },
//   { id: 25, name: "Silver Minimal", brand: "Casio", color: "Silver", price: 210, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p13.jpg", outofstock: true, description: "Minimalist Casio silver watch, sleek and refined for daily wear" },
//   { id: 26, name: "Gold Shine", brand: "Fossil", color: "Gold", price: 380, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p14.jpg", description: "Fossil gold shine watch adding luxury sparkle to any outfit" },
//   { id: 27, name: "Rose Beauty", brand: "Fossil", color: "Rose Gold", price: 340, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p15.jpg", description: "Fossil rose beauty watch with charming elegance and soft tones" },
//   { id: 28, name: "Black Steel Pro", brand: "Casio", color: "Black", price: 410, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p16.jpg", description: "Casio black steel pro, rugged and perfect for sports enthusiasts" },
//   { id: 29, name: "Green Field", brand: "Seiko", color: "Green", price: 300, strap: "Nylon", category: "Sport", gender: "Men", image: "/products/p17.jpg", discount: 10, description: "Seiko green field watch with durable nylon strap for outdoor use" },
//   { id: 30, name: "Black Diver", brand: "Rolex", color: "Black", price: 700, strap: "Rubber", category: "Sport", gender: "Men", image: "/products/p19.jpg", description: "Rolex black diver watch, built for underwater performance" },
//   { id: 31, name: "Golden Charm", brand: "Rolex", color: "Gold", price: 620, strap: "Metal", category: "Luxury", gender: "Women", image: "/products/p21.jpg", description: "Rolex golden charm, a luxurious watch designed for women" },
//   { id: 32, name: "Steel Chrono", brand: "Seiko", color: "Silver", price: 410, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p22.jpg", description: "Seiko steel chrono watch for sporty men with classic appeal" },
//   { id: 33, name: "Blue Royal", brand: "Omega", color: "Blue", price: 540, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p24.jpg", description: "Omega blue royal watch, premium luxury with bold design" },
//   { id: 34, name: "Golden Chrono", brand: "Rolex", color: "Gold", price: 680, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p25.jpg", discount: 15, description: "Rolex golden chrono combining elegance with precision craftsmanship" },
//   { id: 35, name: "Skeleton Dial", brand: "Tag Heuer", color: "Brown", price: 590, strap: "Leather", category: "Luxury", gender: "Men", image: "/products/p27.jpg", new: true, description: "Tag Heuer skeleton dial watch revealing intricate mechanics inside" },
//   { id: 36, name: "Golden Edge", brand: "Rolex", color: "Gold", price: 640, strap: "Metal", category: "Luxury", gender: "Men", image: "/products/p30.jpg", description: "Rolex golden edge, luxurious timepiece with fine metalwork" },
//   { id: 37, name: "Silver Pro", brand: "Omega", color: "Silver", price: 470, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p31.jpg", outofstock: true, description: "Omega silver pro, built for high performance sports use" },
//   { id: 38, name: "Rose Mini", brand: "Fossil", color: "Rose Gold", price: 310, strap: "Metal", category: "Classic", gender: "Women", image: "/products/p32.jpg", description: "Fossil rose mini, small and elegant classic watch for women" },
//   { id: 39, name: "Steel Classic", brand: "Seiko", color: "Silver", price: 420, strap: "Metal", category: "Classic", gender: "Men", image: "/products/p33.jpg", description: "Seiko steel classic watch with sleek silver finish" },
//   { id: 40, name: "Brown Classic", brand: "Seiko", color: "Brown", price: 370, strap: "Leather", category: "Classic", gender: "Men", image: "/products/p28.jpg", description: "Seiko brown leather classic watch, timeless and stylish" },
//   { id: 41, name: "Sport Racer", brand: "Casio", color: "Blue", price: 330, strap: "Leather", category: "Sport", gender: "Men", image: "/products/p29.jpg", description: "Casio sport racer watch, perfect for active lifestyles" },
//   { id: 42, name: "Minimal Lady", brand: "Fossil", color: "Black", price: 290, strap: "Leather", category: "Classic", gender: "Women", image: "/products/p36.jpg", new: true, description: "Fossil minimal lady watch, elegant and understated" },
//   { id: 43, name: "Black Chronograph", brand: "Tag Heuer", color: "Black", price: 560, strap: "Metal", category: "Sport", gender: "Men", image: "/products/p37.jpg", description: "Tag Heuer black chronograph, sporty and precise for men" }
// ];

// export default function ProductDetailPage() {
//   const params = useParams();
//   const { id } = params as { id: string };
//   const product = products.find((p) => p.id === parseInt(id));

//   const [quantity, setQuantity] = useState(1);
//   const [toastMessage, setToastMessage] = useState<string | null>(null);
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

//   if (!product)
//     return <div className="text-center mt-20 text-3xl">Product not found</div>;

//   const toggleSection = (section: string) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       quantity: quantity,
//     });

//     setToastMessage(`"${product.name}" Added To Cart!`);
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   const handleWishlistClick = () => {
//     if (isInWishlist(product.id)) {
//       removeFromWishlist(product.id);
//       setToastMessage(`"${product.name}" Removed From Wishlist!`);
//     } else {
//       addToWishlist({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//       });
//       setToastMessage(`"${product.name}" Added To Wishlist!`);
//     }
//     setTimeout(() => setToastMessage(null), 3000);
//   };

//   return (
//     <section className="poppins overflow-hidden">
//       <div className="container px-4 md:px-5 py-12 mx-auto">
//         <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-start">

//           {/* Product Image */}
//           <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
//             <Image alt={product.name} src={product.image} fill className="object-contain" />
//           </div>

//           {/* Product Info */}
//           <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-between">
//             <div>
//               <h1 className="text-6xl font-extralight mb-4 text-blue-950 allura text-center lg:text-left">
//                 {product.name}
//               </h1>

//               {/* Description Box */}
//               <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
//                 <legend className="text-lg font-serif px-1">DESCRIPTION</legend>
//                 <p className="text-sm">{product.description}</p>
//               </fieldset>

//               {/* Price Box */}
//               <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
//                 <legend className="text-lg font-serif px-1">PRICE</legend>
//                 <p className="text-2xl font-serif">${product.price}</p>
//               </fieldset>

//               {/* Accordion */}
//               <div className="w-full max-w-md mt-2 space-y-1">
//                 {/* Product Details */}
//                 <div className="border-b py-2">
//                   <button
//                     onClick={() => toggleSection("details")}
//                     className="flex justify-between items-center w-full text-lg font-serif cursor-pointer"
//                   >
//                     Product Details
//                     <span className={`text-xl transition-transform duration-300 ${openSection === "details" ? "rotate-45" : ""}`}>+</span>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-300 ${openSection === "details" ? "max-h-32 mt-2" : "max-h-0"}`}>
//                     <div className="text-sm px-1">
//                       <p>
//                         The {product.color.toLowerCase()} {product.name} brand is <span className="font-medium text-black">{product.brand}</span>, belongs to the <span className="font-medium text-black">{product.category}</span> category, and is designed for <span className="font-medium text-black">{product.gender}</span>.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Specifications */}
//                 <div className="border-b py-2">
//                   <button
//                     onClick={() => toggleSection("spec")}
//                     className="flex justify-between items-center w-full text-lg font-serif cursor-pointer"
//                   >
//                     Specifications
//                     <span className={`text-xl transition-transform duration-300 ${openSection === "spec" ? "rotate-45" : ""}`}>+</span>
//                   </button>
//                   <div className={`overflow-hidden transition-all duration-300 ${openSection === "spec" ? "max-h-32 mt-2" : "max-h-0"}`}>
//                     <div className="text-sm px-1">
//                       <p>
//                         It comes in <span className="font-medium text-black">{product.color}</span> color with a <span className="font-medium text-black">{product.strap}</span> strap.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Controls */}
//             <div className="mt-4">
//               {/* Quantity + Wishlist */}
//               <div className="flex space-x-3 mb-4">
//                 <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
//                   <button
//                     onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
//                     className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded cursor-pointer">-</button>
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
//                     className="w-10 h-6 text-center border-none focus:outline-none text-sm cursor-pointer"
//                   />
//                   <button
//                     onClick={() => setQuantity((prev) => prev + 1)}
//                     className="w-6 h-6 flex items-center justify-center border border-gray-400 rounded cursor-pointer">+</button>
//                 </div>

//                 <button onClick={handleWishlistClick} className="text-4xl text-pink-500 cursor-pointer">
//                   {isInWishlist(product.id) ? <FaHeart /> : <FaRegHeart />}
//                 </button>
//               </div>

//               {/* Add to Cart Button */}
//               <div className="flex justify-center">
//                 <button
//                   onClick={handleAddToCart}
//                   className="px-12 py-4 border border-white text-white bg-black hover:bg-white hover:text-black hover:border-black transition cursor-pointer"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Toast Notification */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 animate-slideIn z-50">
//           <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           <p className="text-sm">{toastMessage}</p>
//         </div>
//       )}
//     </section>
//   );
// }


































"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API RESPONSE:", data);

        // 🔥 Universal fix (handles both cases)
        setProduct(data.product || data);

        setLoading(false);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setLoading(false);
      });
  }, [id]);

  // ⏳ Loading
  if (loading) {
    return <p className="text-center mt-20 text-lg">Loading...</p>;
  }

  // ❌ Not found
  if (!product) {
    return <p className="text-center mt-20 text-lg">Product not found</p>;
  }

  return (
    <section className="min-h-screen px-10 py-16">
      <div className="grid md:grid-cols-2 gap-10">

        {/* 🖼 Image */}
        <div className="w-full h-[400px] relative bg-gray-100">
          {product?.image ? (
            <Image
              src={product.image}
              alt={product?.name || "product"}
              fill
              className="object-contain"
            />
          ) : (
            <p className="flex items-center justify-center h-full text-gray-400">
              No Image
            </p>
          )}
        </div>

        {/* 📦 Details */}
        <div className="flex flex-col gap-4">

          <h1 className="text-3xl font-bold">
            {product?.name || "No Name"}
          </h1>

          <p className="text-gray-500">
            {product?.description || "No description available"}
          </p>

          <p className="text-2xl font-semibold">
            ${product?.price || 0}
          </p>

          <p className="text-sm">
            <span className="font-semibold">Brand:</span>{" "}
            {product?.brand || "N/A"}
          </p>

          <p className="text-sm">
            <span className="font-semibold">Category:</span>{" "}
            {product?.category || "N/A"}
          </p>

          <p className="text-sm">
            <span className="font-semibold">Color:</span>{" "}
            {product?.color || "N/A"}
          </p>

          <p className="text-sm">
            <span className="font-semibold">Stock:</span>{" "}
            {product?.stock > 0 ? "Available" : "Out of Stock"}
          </p>

          {/* Tags */}
          <div className="flex gap-2">
            {product?.newArrival && (
              <span className="bg-green-500 text-white px-3 py-1 text-xs">
                New Arrival
              </span>
            )}

            {product?.discount && (
              <span className="bg-red-500 text-white px-3 py-1 text-xs">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Button */}
          <button className="mt-4 bg-black text-white px-6 py-3 w-fit hover:bg-gray-800">
            Add To Cart
          </button>
        </div>

      </div>
    </section>
  );
}