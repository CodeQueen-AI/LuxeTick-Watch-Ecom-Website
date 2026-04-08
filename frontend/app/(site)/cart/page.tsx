// "use client";
// import { FaTrash } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { FiMinus } from "react-icons/fi";
// import { useCart } from "../context/cartcontext";
// import Image from "next/image";
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// const Cart = () => {
//   const { cartItems, removeFromCart, updateItemQuantity } = useCart();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const [toast, setToast] = useState("");
//   const [type, setType] = useState("");
//   const searchParams = useSearchParams();

//   // Create orders after successful payment
//   useEffect(() => {
//     const createOrders = async () => {
//       const token = localStorage.getItem("token");
//       const savedCart = JSON.parse(localStorage.getItem("checkoutCart")) || [];
//       if (!token || savedCart.length === 0) return;

//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/orders/create-from-cart",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ cartItems: savedCart }),
//           }
//         );

//         const data = await res.json();
//         console.log("Orders created:", data);

//         if (data.success) {
//           localStorage.removeItem("cart");
//           cartItems.forEach((item) => removeFromCart(item.id));
//           setToast("Order placed successfully!");
//           setType("success");
//           setTimeout(() => setToast(""), 3000);
//         } else {
//           setToast(data.message || "Failed to create orders");
//           setType("reject");
//           setTimeout(() => setToast(""), 3000);
//         }

//         localStorage.removeItem("checkoutCart");
//       } catch (err) {
//         console.error("Error creating orders:", err);
//         setToast("Error creating orders");
//         setType("reject");
//         setTimeout(() => setToast(""), 3000);
//       }
//     };

//     if (searchParams.get("success")) {
//       setToast("Payment Successful! Creating orders...");
//       setType("success");
//       createOrders();
//     }

//     if (searchParams.get("reject")) {
//       setToast("Payment Rejected!");
//       setType("reject");
//     }

//     if (searchParams.get("success") || searchParams.get("reject")) {
//       setTimeout(() => setToast(""), 3000);
//     }
//   }, [searchParams, router]);

//   // Checkout
//   const handleCheckout = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setToast("Please login first!");
//       setType("reject");
//       setTimeout(() => setToast(""), 3000);
//       router.push("/login");
//       return;
//     }

//     setLoading(true);

//     try {
//       const stockCheck = await fetch(
//         "http://localhost:5000/api/orders/check-stock",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ cartItems }),
//         }
//       );

//       const stockData = await stockCheck.json();

//       if (!stockData.success) {
//         setToast(stockData.message || "Some items are out of stock!");
//         setType("reject");
//         setTimeout(() => setToast(""), 3000);
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem("checkoutCart", JSON.stringify(cartItems));

//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ cartItems }),
//       });

//       const data = await res.json();

//       if (data.url) {
//         window.location.href = data.url;
//       }
//     } catch (err) {
//       console.error("Checkout error:", err);
//       setToast("Checkout failed. Please try again.");
//       setType("reject");
//       setTimeout(() => setToast(""), 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 py-10 poppins min-h-screen">
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50 rounded-lg">
//           {type === "success" ? (
//             <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           ) : (
//             <AiOutlineCloseCircle className="text-red-500 text-2xl" />
//           )}
//           <p className="text-sm">{toast}</p>
//         </div>
//       )}

//       {cartItems.length === 0 ? (
//         <div className="flex flex-col items-center gap-4 py-40">
//           <LiaShoppingCartSolid size={60} />
//           <p className="text-xl font-serif">Your Cart is Empty!</p>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-7xl text-center mb-10 allura">Your Cart</h1>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
//             {/* LEFT SIDE */}
//             <div className="lg:col-span-2">
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse min-w-[600px] lg:min-w-full">
//                   <thead className="border-b">
//                     <tr className="text-left">
//                       <th className="pb-4">Product</th>
//                       <th className="pb-4">Price</th>
//                       <th className="pb-4">Quantity</th>
//                       <th className="pb-4">Subtotal</th>
//                       <th></th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {cartItems.map((item) => (
//                       <tr key={item.id} className="border-b">
//                         <td className="py-6">
//                           <div className="flex items-center gap-4">
//                             <Image
//                               src={item.image}
//                               alt={item.name}
//                               width={50}
//                               height={50}
//                               className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
//                               unoptimized
//                             />
//                             <span className="font-medium">{item.name}</span>
//                           </div>
//                         </td>

//                         <td className="py-6">${item.price}</td>

//                         <td className="py-6">
//                           <div className="flex items-center border w-fit px-3 py-2 gap-4">
//                             <button
//                               onClick={() =>
//                                 updateItemQuantity(item.id, item.quantity - 1)
//                               }
//                               className="hover:text-gray-600 cursor-pointer"
//                             >
//                               <FiMinus />
//                             </button>
//                             <span className="font-medium cursor-pointer">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 updateItemQuantity(item.id, item.quantity + 1)
//                               }
//                               className="hover:text-gray-600 cursor-pointer"
//                             >
//                               <GoPlus />
//                             </button>
//                           </div>
//                         </td>

//                         <td className="py-6 font-semibold">
//                           ${(item.price * item.quantity).toFixed(2)}
//                         </td>

//                         <td className="py-6">
//                           <button
//                             onClick={() => removeFromCart(item.id)}
//                             className="text-red-500 hover:text-red-700 transition cursor-pointer">
//                             <FaTrash />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="bg-[#09162c] text-white p-6 sm:p-8 h-fit">
//               <h2 className="text-3xl mb-6 text-center font-serif">
//                 Cart Totals
//               </h2>

//               <div className="space-y-3 max-h-60 overflow-y-auto">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span>{item.name}</span>
//                     <span>
//                       ${item.price} x {item.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-gray-600 my-6"></div>

//               <div className="flex justify-between text-lg font-semibold">
//                 <span className="font-serif">Total</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   onClick={handleCheckout}
//                   disabled={loading}
//                   className={`mt-6 px-6 py-3 bg-white text-black hover:bg-gray-100 transition font-medium cursor-pointer w-full sm:w-auto ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""}`}>
//                   {loading ? "Processing..." : "Checkout"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;














// "use client";
// import { FaTrash } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { FiMinus } from "react-icons/fi";
// import { useCart } from "../context/cartcontext";
// import Image from "next/image";
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";

// const Cart = () => {
//   const { cartItems, removeFromCart, updateItemQuantity, clearCart } = useCart();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const [toast, setToast] = useState("");
//   const [type, setType] = useState("");
//   const searchParams = useSearchParams();

//   // Handle order creation after payment
//   useEffect(() => {
//     const createOrders = async () => {
//       const token = localStorage.getItem("token");
//       const savedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
//       if (!token || savedCart.length === 0) return;

//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/orders/create-from-cart",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify({ cartItems: savedCart }),
//           }
//         );
//         const data = await res.json();
//         if (data.success) {
//           localStorage.removeItem("cart");
//           localStorage.removeItem("checkoutCart");
//           clearCart();
//           setToast("Order placed successfully!");
//           setType("success");
//         } else {
//           setToast(data.message || "Failed to create orders");
//           setType("reject");
//         }
//         setTimeout(() => setToast(""), 3000);
//       } catch (err) {
//         console.error("Error creating orders:", err);
//         setToast("Error creating orders");
//         setType("reject");
//         setTimeout(() => setToast(""), 3000);
//       }
//     };

//     if (searchParams.get("success")) {
//       setToast("Payment Successful! Creating orders...");
//       setType("success");
//       createOrders();
//     }

//     if (searchParams.get("reject")) {
//       setToast("Payment Rejected!");
//       setType("reject");
//       setTimeout(() => setToast(""), 3000);
//     }
//   }, [searchParams, clearCart]);

//   // Checkout
//   const handleCheckout = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setToast("Please login first!");
//       setType("reject");
//       setTimeout(() => setToast(""), 3000);
//       router.push("/login");
//       return;
//     }

//     setLoading(true);

//     try {
//       const stockCheck = await fetch(
//         "http://localhost:5000/api/orders/check-stock",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ cartItems }),
//         }
//       );
//       const stockData = await stockCheck.json();

//       if (!stockData.success) {
//         setToast(stockData.message || "Some items are out of stock!");
//         setType("reject");
//         setTimeout(() => setToast(""), 3000);
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem("checkoutCart", JSON.stringify(cartItems));

//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cartItems }),
//       });
//       const data = await res.json();
//       if (data.url) window.location.href = data.url;
//     } catch (err) {
//       console.error("Checkout error:", err);
//       setToast("Checkout failed. Please try again.");
//       setType("reject");
//       setTimeout(() => setToast(""), 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 py-10 poppins min-h-screen">
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50 rounded-lg">
//           {type === "success" ? (
//             <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           ) : (
//             <AiOutlineCloseCircle className="text-red-500 text-2xl" />
//           )}
//           <p className="text-sm">{toast}</p>
//         </div>
//       )}

//       {cartItems.length === 0 ? (
//         <div className="flex flex-col items-center gap-4 py-40">
//           <LiaShoppingCartSolid size={60} />
//           <p className="text-xl font-serif">Your Cart is Empty!</p>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-7xl text-center mb-10 allura">Your Cart</h1>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
//             {/* LEFT SIDE */}
//             <div className="lg:col-span-2">
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse min-w-[600px] lg:min-w-full">
//                   <thead className="border-b">
//                     <tr className="text-left">
//                       <th className="pb-4">Product</th>
//                       <th className="pb-4">Price</th>
//                       <th className="pb-4">Quantity</th>
//                       <th className="pb-4">Subtotal</th>
//                       <th></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item) => (
//                       <tr key={item.id} className="border-b">
//                         <td className="py-6">
//                           <div className="flex items-center gap-4">
//                             <Image
//                               src={item.image}
//                               alt={item.name}
//                               width={50}
//                               height={50}
//                               className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
//                               unoptimized
//                             />
//                             <span className="font-medium">{item.name}</span>
//                           </div>
//                         </td>
//                         <td className="py-6">${item.price}</td>
//                         <td className="py-6">
//                           <div className="flex items-center border w-fit px-3 py-2 gap-4">
//                             <button
//                               onClick={() =>
//                                 updateItemQuantity(item.id, item.quantity - 1)
//                               }
//                               className="hover:text-gray-600 cursor-pointer"
//                             >
//                               <FiMinus />
//                             </button>
//                             <span className="font-medium cursor-pointer">
//                               {item.quantity}
//                             </span>
//                             <button
//                               onClick={() =>
//                                 updateItemQuantity(item.id, item.quantity + 1)
//                               }
//                               className="hover:text-gray-600 cursor-pointer"
//                             >
//                               <GoPlus />
//                             </button>
//                           </div>
//                         </td>
//                         <td className="py-6 font-semibold">
//                           ${(item.price * item.quantity).toFixed(2)}
//                         </td>
//                         <td className="py-6">
//                           <button
//                             onClick={() => removeFromCart(item.id)}
//                             className="text-red-500 hover:text-red-700 transition cursor-pointer"
//                           >
//                             <FaTrash />
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="bg-[#09162c] text-white p-6 sm:p-8 h-fit">
//               <h2 className="text-3xl mb-6 text-center font-serif">
//                 Cart Totals
//               </h2>

//               <div className="space-y-3 max-h-60 overflow-y-auto">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between text-sm">
//                     <span>{item.name}</span>
//                     <span>
//                       ${item.price} x {item.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t border-gray-600 my-6"></div>

//               <div className="flex justify-between text-lg font-semibold">
//                 <span className="font-serif">Total</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   onClick={handleCheckout}
//                   disabled={loading}
//                   className={`mt-6 px-6 py-3 bg-white text-black hover:bg-gray-100 transition font-medium cursor-pointer w-full sm:w-auto ${
//                     loading ? "opacity-50 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {loading ? "Processing..." : "Checkout"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;



"use client";
import { useCart } from "../context/cartcontext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

// Handle token expiry
const handleAuthError = async (res: Response, router: any) => {
  if (res.status === 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("checkoutCart");
    alert("Session expired. Please login again.");
    router.push("/login");
    return true;
  }
  return false;
};

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity, clearCart, isLoaded } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [type, setType] = useState("");

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Handle orders after payment
  useEffect(() => {
    const createOrders = async () => {
      const token = localStorage.getItem("token");
      const savedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
      if (!token || savedCart.length === 0) return;

      try {
        const res = await fetch("http://localhost:5000/api/orders/create-from-cart", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ cartItems: savedCart }),
        });

        if (await handleAuthError(res, router)) return;

        const data = await res.json();
        if (data.success) {
          localStorage.removeItem("cart");
          localStorage.removeItem("checkoutCart");
          clearCart();
          setToast("Order placed successfully!");
          setType("success");
        } else {
          setToast(data.message || "Failed to create orders");
          setType("reject");
        }
        setTimeout(() => setToast(""), 3000);
      } catch (err) {
        console.error("Error creating orders:", err);
        setToast("Error creating orders");
        setType("reject");
        setTimeout(() => setToast(""), 3000);
      }
    };

    if (searchParams.get("success")) {
      setToast("Payment Successful! Creating orders...");
      setType("success");
      createOrders();
    }
    if (searchParams.get("reject")) {
      setToast("Payment Rejected!");
      setType("reject");
      setTimeout(() => setToast(""), 3000);
    }
  }, [searchParams, clearCart, router]);

  // Handle checkout
  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setToast("Please login first!");
      setType("reject");
      setTimeout(() => setToast(""), 3000);
      router.push("/login");
      return;
    }

    setLoading(true);

    try {
      const stockCheck = await fetch("http://localhost:5000/api/orders/check-stock", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ cartItems }),
      });

      if (await handleAuthError(stockCheck, router)) { setLoading(false); return; }

      const stockData = await stockCheck.json();
      if (!stockData.success) {
        setToast(stockData.message || "Some items are out of stock!");
        setType("reject");
        setTimeout(() => setToast(""), 3000);
        setLoading(false);
        return;
      }

      localStorage.setItem("checkoutCart", JSON.stringify(cartItems));

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
      setToast("Checkout failed. Please try again.");
      setType("reject");
      setTimeout(() => setToast(""), 3000);
    } finally { setLoading(false); }
  };

  // Wait until cart is loaded from localStorage
  if (!isLoaded) return <p className="text-center py-20">Loading cart...</p>;

  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 poppins min-h-screen">
      {/* Toast notifications */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50 rounded-lg">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}

      {/* Empty cart */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-40">
          <LiaShoppingCartSolid size={60} />
          <p className="text-xl font-serif">Your Cart is Empty!</p>
        </div>
      ) : (
        <>
          <h1 className="text-7xl text-center mb-10 allura">Your Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            {/* Cart Items Table */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px] lg:min-w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="pb-4">Product</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Quantity</th>
                      <th className="pb-4">Subtotal</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-b">
                        <td className="py-6">
                          <div className="flex items-center gap-4">
                            <Image src={item.image} alt={item.name} width={50} height={50} className="w-12 h-12 sm:w-16 sm:h-16 object-cover" unoptimized />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-6">${item.price}</td>
                        <td className="py-6">
                          <div className="flex items-center border w-fit px-3 py-2 gap-4">
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><GoPlus /></button>
                          </div>
                        </td>
                        <td className="py-6 font-semibold">${(item.price * item.quantity).toFixed(2)}</td>
                        <td className="py-6">
                          <button onClick={() => removeFromCart(item.id)} className="text-red-500"><FaTrash /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="bg-[#09162c] text-white p-6 sm:p-8 h-fit">
              <h2 className="text-3xl mb-6 text-center font-serif">Cart Totals</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>${item.price} x {item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-600 my-6"></div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} disabled={loading} className="mt-6 px-6 py-3 bg-white text-black w-full">
                {loading ? "Processing..." : "Checkout"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;