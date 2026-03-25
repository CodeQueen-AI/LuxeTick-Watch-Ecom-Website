// "use client";
// import { FaTrash } from "react-icons/fa";
// import { GoPlus } from "react-icons/go";
// import { FiMinus } from "react-icons/fi";
// import { useCart } from "../context/cartcontext";
// import Image from "next/image";
// import { LiaShoppingCartSolid } from "react-icons/lia";
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";

// const Cart = () => {
//   const { cartItems, removeFromCart, updateItemQuantity } = useCart();
//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   const [toast, setToast] = useState("");
//   const [type, setType] = useState("");

//   const searchParams = useSearchParams();

//   useEffect(() => {

//     if (searchParams.get("success")) {
//       setToast("Payment Successful!");
//       setType("success");
//     }

//     if (searchParams.get("reject")) {
//       setToast("Payment Rejected!");
//       setType("reject");
//     }

//     if (searchParams.get("success") || searchParams.get("reject")) {
//       setTimeout(() => {
//         setToast("");
//       }, 3000);
//     }

//   }, [searchParams]);

//   const handleCheckout = async () => {
//     try {
//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ cartItems }),
//       });

//       const data = await res.json();

//       if (data.url) {
//         window.location.href = data.url;
//       }

//     } catch (err) {
//       console.error("Checkout error:", err);
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-10 poppins">
//       {/* Toast Notification */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 z-50">
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
//           <LiaShoppingCartSolid size={60}/>
//           <p className="text-xl text-center">Your Cart is Empty!</p>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-6xl font-extralight allura text-center mb-10">
//             Your Cart
//           </h1>
//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT SIDE */}
//             <div className="lg:col-span-2">
//               <table className="w-full border-collapse">
//                 <thead className="border-b border-gray-300">
//                   <tr className="text-left text-sm uppercase">
//                     <th className="pb-4">Product</th>
//                     <th className="pb-4">Price</th>
//                     <th className="pb-4">Quantity</th>
//                     <th className="pb-4">Subtotal</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map(item => (
//                     <tr key={item.id} className="border-b border-gray-300">
//                       <td className="py-6 flex items-center gap-4">
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           width={70}
//                           height={70}/>
//                         <span className="font-medium">
//                           {item.name}
//                         </span>
//                       </td>
//                       <td className="text-gray-700">
//                         ${item.price}
//                       </td>
//                       <td>
//                         <div className="flex items-center border w-fit px-3 py-2 gap-4">
//                           <button onClick={() => updateItemQuantity(item.id,item.quantity - 1)}className="cursor-pointer">
//                             <FiMinus/>
//                           </button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="cursor-pointer">
//                             <GoPlus/>
//                           </button>
//                         </div>
//                       </td>
//                       <td className="font-medium">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </td>
//                       <td>
//                         <button onClick={() =>removeFromCart(item.id)}
//                           className="text-red-500 cursor-pointer">
//                           <FaTrash/>
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             {/* RIGHT SIDE */}
//             <div className="bg-[#09162c] text-white p-8 h-fit shadow-sm">
//               <h2 className="text-3xl font-extralight font-serif mb-6 text-center">
//                 Cart Totals
//               </h2>
//               <div className="space-y-4">
//                 {cartItems.map(item => (
//                   <div key={item.id} className="flex justify-between">
//                     <span>{item.name}</span>
//                     <span>
//                       ${item.price} x {item.quantity}
//                     </span>
//                   </div>))}
//               </div>
//               <div className="border-t my-6"></div>
//               <div className="flex justify-between text-lg font-semibold">
//                 <span>Total</span>
//                 <span className="font-serif">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-center">
//                 <button onClick={handleCheckout} className="mt-6 px-6 py-3 bg-white text-black border
//                  border-white hover:bg-black hover:text-white transition cursor-pointer">
//                   Checkout
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
// import { useSearchParams } from "next/navigation";

// const Cart = () => {
//   const { cartItems, removeFromCart, updateItemQuantity } = useCart();
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   const [toast, setToast] = useState("");
//   const [type, setType] = useState("");

//   const searchParams = useSearchParams();

//   // Toast notifications & order creation after payment
//   useEffect(() => {
//     const createOrders = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const res = await fetch("http://localhost:5000/api/orders/create-multiple", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ cartItems }),
//         });

//         const data = await res.json();
//         console.log("Orders created:", data);
//       } catch (err) {
//         console.error("Error creating orders:", err);
//       }
//     };

//     if (searchParams.get("success")) {
//       setToast("Payment Successful!");
//       setType("success");
//       createOrders(); // ✅ Create orders after successful payment
//     }

//     if (searchParams.get("reject")) {
//       setToast("Payment Rejected!");
//       setType("reject");
//     }

//     if (searchParams.get("success") || searchParams.get("reject")) {
//       setTimeout(() => setToast(""), 3000);
//     }
//   }, [searchParams, cartItems]);

//   // Checkout function
//   const handleCheckout = async () => {
//     try {
//       const res = await fetch("/api/checkout", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ cartItems }),
//       });

//       const data = await res.json();
//       if (data.url) window.location.href = data.url;
//     } catch (err) {
//       console.error("Checkout error:", err);
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-10 poppins">
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border border-gray-200 shadow-xl px-5 py-3 z-50">
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
//           <p className="text-xl text-center">Your Cart is Empty!</p>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-6xl font-extralight allura text-center mb-10">Your Cart</h1>
//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT SIDE */}
//             <div className="lg:col-span-2">
//               <table className="w-full border-collapse">
//                 <thead className="border-b border-gray-300">
//                   <tr className="text-left text-sm uppercase">
//                     <th className="pb-4">Product</th>
//                     <th className="pb-4">Price</th>
//                     <th className="pb-4">Quantity</th>
//                     <th className="pb-4">Subtotal</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id} className="border-b border-gray-300">
//                       <td className="py-6 flex items-center gap-4">
//                         <Image src={item.image} alt={item.name} width={70} height={70} />
//                         <span className="font-medium">{item.name}</span>
//                       </td>
//                       <td className="text-gray-700">${item.price}</td>
//                       <td>
//                         <div className="flex items-center border w-fit px-3 py-2 gap-4">
//                           <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><GoPlus /></button>
//                         </div>
//                       </td>
//                       <td className="font-medium">${(item.price * item.quantity).toFixed(2)}</td>
//                       <td>
//                         <button onClick={() => removeFromCart(item.id)} className="text-red-500 cursor-pointer"><FaTrash /></button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="bg-[#09162c] text-white p-8 h-fit shadow-sm">
//               <h2 className="text-3xl font-extralight font-serif mb-6 text-center">Cart Totals</h2>
//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <span>{item.name}</span>
//                     <span>${item.price} x {item.quantity}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="border-t my-6"></div>
//               <div className="flex justify-between text-lg font-semibold">
//                 <span>Total</span>
//                 <span className="font-serif">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-center">
//                 <button onClick={handleCheckout} className="mt-6 px-6 py-3 bg-white text-black border border-white hover:bg-black hover:text-white transition cursor-pointer">
//                   Checkout
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

import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
// import { useCart } from "../context/cartcontext";
import { useCart } from "../context/cartcontext";
import Image from "next/image";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [toast, setToast] = useState("");
  const [type, setType] = useState("");

  const searchParams = useSearchParams();

  // Create orders after successful payment
  useEffect(() => {
    const createOrders = async () => {
      const token = localStorage.getItem("token");

      const savedCart =
        JSON.parse(localStorage.getItem("checkoutCart")) || [];

      if (!token || savedCart.length === 0) return;

      try {
        const res = await fetch(
          "http://localhost:5000/api/orders/create-multiple",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ cartItems: savedCart }),
          }
        );

        const data = await res.json();

        console.log("Orders created:", data);

        localStorage.removeItem("checkoutCart");
      } catch (err) {
        console.error("Error creating orders:", err);
      }
    };

    if (searchParams.get("success")) {
      setToast("Payment Successful!");
      setType("success");
      createOrders();
    }

    if (searchParams.get("reject")) {
      setToast("Payment Rejected!");
      setType("reject");
    }

    if (searchParams.get("success") || searchParams.get("reject")) {
      setTimeout(() => setToast(""), 3000);
    }
  }, [searchParams]);

  // Checkout
  const handleCheckout = async () => {
    try {
      // save cart before redirect
      localStorage.setItem("checkoutCart", JSON.stringify(cartItems));

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 poppins">
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-40">
          <LiaShoppingCartSolid size={60} />
          <p className="text-xl">Your Cart is Empty!</p>
        </div>
      ) : (
        <>
          <h1 className="text-5xl text-center mb-10">Your Cart</h1>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              <table className="w-full border-collapse">
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
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-6 flex items-center gap-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={70}
                          height={70}
                        />
                        {item.name}
                      </td>

                      <td>${item.price}</td>

                      <td>
                        <div className="flex items-center border w-fit px-3 py-2 gap-4">
                          <button
                            onClick={() =>
                              updateItemQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                          >
                            <FiMinus />
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              updateItemQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                          >
                            <GoPlus />
                          </button>
                        </div>
                      </td>

                      <td>
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>

                      <td>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#09162c] text-white p-8 h-fit">
              <h2 className="text-3xl mb-6 text-center">Cart Totals</h2>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>
                      ${item.price} x {item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t my-6"></div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  className="mt-6 px-6 py-3 bg-white text-black"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;