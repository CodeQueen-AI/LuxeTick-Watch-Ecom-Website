// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import { FaRegHeart, FaHeart } from "react-icons/fa";
// import { AiOutlineCheckCircle } from "react-icons/ai";

// import { useCart } from "@/app/(site)/context/cartcontext";
// import { useWishlist } from "@/app/(site)/context/wishlistcontext";

// export default function ProductDetailPage() {
//   const { id } = useParams();

//   const [product, setProduct] = useState<any>(null);
//   const [loading, setLoading] = useState(true);

//   const [quantity, setQuantity] = useState(1);
//   const [toastMessage, setToastMessage] = useState<string | null>(null);
//   const [openSection, setOpenSection] = useState<string | null>(null);

//   const { addToCart } = useCart();
//   const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

//   useEffect(() => {
//     if (!id) return;

//     fetch(`http://localhost:5000/api/products/${id}`)
//       .then(res => res.json())
//       .then(data => {
//         setProduct(data.product || data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [id]);

//   const toggleSection = (section: string) => {
//     setOpenSection(openSection === section ? null : section);
//   };

//   const handleAddToCart = () => {
//     addToCart({
//       id: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       quantity,
//     });

//     setToastMessage(`${product.name} Added To Cart!`);
//     setTimeout(() => setToastMessage(null), 2500);
//   };

//   const handleWishlistClick = () => {
//     const exists = wishlistItems.find((item: any) => item.id === product._id);

//     if (exists) {
//       removeFromWishlist(product._id);
//       setToastMessage(`${product.name} Removed From Wishlist!`);
//     } else {
//       addToWishlist({
//         id: product._id,
//         name: product.name,
//         price: product.price,
//         image: product.image,
//       });
//       setToastMessage(`${product.name} Added To Wishlist!`);
//     }

//     setTimeout(() => setToastMessage(null), 2500);
//   };

//   if (loading) return <p className="text-center mt-20">Loading...</p>;
//   if (!product) return <p className="text-center mt-20">Product not found</p>;

//   return (
//     <section className="poppins overflow-hidden">
//       <div className="container px-4 md:px-5 py-12 mx-auto">
//         <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto items-start">

//           {/* 🖼 Image */}
//           <div className="lg:w-1/2 w-full relative mb-6 lg:mb-0 h-80 sm:h-96 lg:h-[500px]">
//             <Image
//               src={product?.image}
//               alt={product?.name}
//               fill
//               className="object-contain"
//             />
//           </div>

//           {/* 📦 Info */}
//           <div className="lg:w-1/2 w-full lg:pl-10 flex flex-col justify-between">
//             <div>

//               <h1 className="text-6xl font-extralight mb-4 text-blue-950 allura text-center lg:text-left">
//                 {product?.name}
//               </h1>

//               {/* Description */}
//               <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
//                 <legend className="text-lg font-serif px-1">DESCRIPTION</legend>
//                 <p className="text-sm">{product?.description}</p>
//               </fieldset>

//               {/* Price */}
//               <fieldset className="border border-gray-300 rounded-lg px-3 py-2 mb-4 shadow-sm">
//                 <legend className="text-lg font-serif px-1">PRICE</legend>
//                 <p className="text-2xl font-serif">${product?.price}</p>
//               </fieldset>

//               {/* Accordion */}
//               <div className="w-full max-w-md mt-2 space-y-1">

//                 {/* Details */}
//                 <div className="border-b py-2">
//                   <button
//                     onClick={() => toggleSection("details")}
//                     className="flex justify-between w-full text-lg font-serif transition-colors duration-300 cursor-pointer"
//                   >
//                     Product Details
//                     <span
//                       className={`transition-transform duration-300 inline-block ${openSection === "details" ? "rotate-45" : ""}`}
//                     >
//                       +
//                     </span>
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-[max-height,margin] duration-500 ${
//                       openSection === "details" ? "max-h-40 mt-2" : "max-h-0 mt-0"
//                     }`}
//                   >
//                     <p className="text-sm">
//                       {product?.color} {product?.name} by{" "}
//                       <span className="font-medium">{product?.brand}</span> in{" "}
//                       <span className="font-medium">{product?.category}</span> for{" "}
//                       <span className="font-medium">{product?.gender}</span>.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Specs */}
//                 <div className="border-b py-2">
//                   <button
//                     onClick={() => toggleSection("spec")}
//                     className="flex justify-between w-full text-lg font-serif transition-colors duration-30 cursor-pointer"
//                   >
//                     Specifications
//                     <span
//                       className={`transition-transform duration-300 inline-block ${openSection === "spec" ? "rotate-45" : ""}`}
//                     >
//                       +
//                     </span>
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-[max-height,margin] duration-500 ${
//                       openSection === "spec" ? "max-h-40 mt-2" : "max-h-0 mt-0"
//                     }`}
//                   >
//                     <p className="text-sm">
//                       This watch comes in a stylish{" "}
//                       <span className="font-medium text-black">{product?.color}</span> color
//                       and features a{" "}
//                       <span className="font-medium text-black">{product?.strap}</span> strap
//                       offering both comfort and elegance for everyday wear
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//             {/* 🛒 Bottom - Centered Layout */}
//             <div className="mt-6 flex flex-col items-center gap-4">

//               {/* Quantity + Wishlist */}
//               <div className="flex items-center gap-4">
//                 {/* Quantity */}
//                 <div className="flex items-center gap-2 border px-4 py-2">
//                   <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
//                   <input
//                     value={quantity}
//                     onChange={(e) => setQuantity(Number(e.target.value))}
//                     className="w-12 text-center"
//                   />
//                   <button onClick={() => setQuantity(q => q + 1)}>+</button>
//                 </div>

//                 {/* Wishlist */}
//                 <button
//                   onClick={handleWishlistClick}
//                   className="text-3xl text-pink-500 transition-transform duration-300 hover:scale-110 hover:text-pink-700"
//                 >
//                   {wishlistItems.find((i: any) => i.id === product._id) ? <FaHeart /> : <FaRegHeart />}
//                 </button>
//               </div>

//               {/* Add to Cart */}
//               <button
//                 onClick={handleAddToCart}
//                 className="px-16 py-4 bg-black text-white border border-black transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 cursor-pointer"
//               >
//                 Add To Cart
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toast */}
//       {toastMessage && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white shadow-xl px-5 py-3">
//           <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           <p>{toastMessage}</p>
//         </div>
//       )}
//     </section>
//   );
// }







"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Order = {
  _id: string;
  productName: string;
  image?: string;
  price: number;
  quantity: number;
  status: string;
  date: string;
};

export default function OrderHistory() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Function to generate image URL
  const getImageUrl = (img?: string) => {
    if (!img) return "/placeholder.png"; // fallback image if no image
    return `/watch/${img}`; // public/watch folder
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login first.");
        router.push("/login"); // redirect to login page if no token
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/orders/my-orders", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        // Handle expired or invalid token
        if (res.status === 401) {
          localStorage.removeItem("token");
          setError("Session expired. Please login again.");
          router.push("/login");
          return;
        }

        if (data.success && Array.isArray(data.orders)) {
          setOrders(data.orders);
        } else {
          setError(data.message || "Failed to fetch orders.");
        }
      } catch (err) {
        console.error(err);
        setError("Server error.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [router]);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (orders.length === 0)
    return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

  // Format date as "16 Feb, 2026"
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h1>

      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 w-28">Order ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Product</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Quantity</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100 text-sm">
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50 transition">
                {/* Order ID */}
                <td className="px-4 py-2 text-gray-700 font-mono truncate max-w-[100px]">
                  {order._id.slice(-8).toUpperCase()}
                </td>

                {/* Product Name + Image */}
                <td className="px-4 py-2 flex items-center gap-3">
                  <Image
                    src={getImageUrl(order.image)}
                    alt={order.productName}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <span className="text-gray-700 font-medium">{order.productName}</span>
                </td>

                {/* Date */}
                <td className="px-4 py-2 text-gray-600">{formatDate(order.date)}</td>

                {/* Quantity */}
                <td className="px-4 py-2 text-gray-600">{order.quantity}</td>

                {/* Price */}
                <td className="px-4 py-2 text-gray-600">${order.price.toLocaleString()}</td>

                {/* Status */}
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status.toLowerCase() === "shipped"
                        ? "bg-green-100 text-green-700"
                        : order.status.toLowerCase() === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}