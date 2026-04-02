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

//   // Create orders after successful payment
//   useEffect(() => {
//     const createOrders = async () => {
//       const token = localStorage.getItem("token");

//       const savedCart =
//         JSON.parse(localStorage.getItem("checkoutCart")) || [];

//       if (!token || savedCart.length === 0) return;

//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/orders/create-multiple",
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

//         localStorage.removeItem("checkoutCart");
//       } catch (err) {
//         console.error("Error creating orders:", err);
//       }
//     };

//     if (searchParams.get("success")) {
//       setToast("Payment Successful!");
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
//   }, [searchParams]);

//   // Checkout
//   const handleCheckout = async () => {
//     try {
//       // save cart before redirect
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
//     }
//   };

//   return (
//     <div className="container mx-auto px-6 py-10 poppins">
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border shadow-xl px-5 py-3 z-50">
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
//           <p className="text-xl">Your Cart is Empty!</p>
//         </div>
//       ) : (
//         <>
//           <h1 className="text-5xl text-center mb-10">Your Cart</h1>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* LEFT SIDE */}
//             <div className="lg:col-span-2">
//               <table className="w-full border-collapse">
//                 <thead className="border-b">
//                   <tr className="text-left">
//                     <th className="pb-4">Product</th>
//                     <th className="pb-4">Price</th>
//                     <th className="pb-4">Quantity</th>
//                     <th className="pb-4">Subtotal</th>
//                     <th></th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {cartItems.map((item) => (
//                     <tr key={item.id} className="border-b">
//                       <td className="py-6 flex items-center gap-4">
//                         <Image
//                           src={item.image}
//                           alt={item.name}
//                           width={70}
//                           height={70}
//                         />
//                         {item.name}
//                       </td>

//                       <td>${item.price}</td>

//                       <td>
//                         <div className="flex items-center border w-fit px-3 py-2 gap-4">
//                           <button
//                             onClick={() =>
//                               updateItemQuantity(
//                                 item.id,
//                                 item.quantity - 1
//                               )
//                             }
//                           >
//                             <FiMinus />
//                           </button>

//                           <span>{item.quantity}</span>

//                           <button
//                             onClick={() =>
//                               updateItemQuantity(
//                                 item.id,
//                                 item.quantity + 1
//                               )
//                             }
//                           >
//                             <GoPlus />
//                           </button>
//                         </div>
//                       </td>

//                       <td>
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </td>

//                       <td>
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="text-red-500"
//                         >
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* RIGHT SIDE */}
//             <div className="bg-[#09162c] text-white p-8 h-fit">
//               <h2 className="text-3xl mb-6 text-center">Cart Totals</h2>

//               <div className="space-y-4">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <span>{item.name}</span>
//                     <span>
//                       ${item.price} x {item.quantity}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               <div className="border-t my-6"></div>

//               <div className="flex justify-between text-lg font-semibold">
//                 <span>Total</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>

//               <div className="flex justify-center">
//                 <button
//                   onClick={handleCheckout}
//                   className="mt-6 px-6 py-3 bg-white text-black"
//                 >
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
import { useCart } from "../context/cartcontext";
import Image from "next/image";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
          "http://localhost:5000/api/orders/create-from-cart",
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

        if (data.success) {
          // Clear cart after successful order
          localStorage.removeItem("cart");
          // Also clear cart context
          cartItems.forEach(item => removeFromCart(item.id));
          setToast("Order placed successfully!");
          setType("success");
          setTimeout(() => setToast(""), 3000);
        } else {
          setToast(data.message || "Failed to create orders");
          setType("reject");
          setTimeout(() => setToast(""), 3000);
        }

        localStorage.removeItem("checkoutCart");
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
    }

    if (searchParams.get("success") || searchParams.get("reject")) {
      setTimeout(() => setToast(""), 3000);
    }
  }, [searchParams, router]);

  // Checkout
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
      // Check stock before proceeding to payment
      const stockCheck = await fetch("http://localhost:5000/api/orders/check-stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cartItems }),
      });

      const stockData = await stockCheck.json();

      if (!stockData.success) {
        setToast(stockData.message || "Some items are out of stock!");
        setType("reject");
        setTimeout(() => setToast(""), 3000);
        setLoading(false);
        return;
      }

      // Save cart before redirect
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
      setToast("Checkout failed. Please try again.");
      setType("reject");
      setTimeout(() => setToast(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 poppins min-h-screen">
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

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-40">
          <LiaShoppingCartSolid size={60} />
          <p className="text-xl">Your Cart is Empty!</p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-6 py-2 bg-[#09162c] text-white rounded-lg hover:bg-[#1a2a4a] transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-5xl text-center mb-10">Your Cart</h1>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT SIDE */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
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
                        <td className="py-6">
                          <div className="flex items-center gap-4">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={70}
                              height={70}
                              className="rounded-lg object-cover"
                              unoptimized
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </td>

                        <td className="py-6">${item.price}</td>

                        <td className="py-6">
                          <div className="flex items-center border rounded-lg w-fit px-3 py-2 gap-4">
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                              className="hover:text-gray-600"
                            >
                              <FiMinus />
                            </button>
                            <span className="font-medium">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                              className="hover:text-gray-600"
                            >
                              <GoPlus />
                            </button>
                          </div>
                        </td>

                        <td className="py-6 font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>

                        <td className="py-6">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-[#09162c] text-white p-8 h-fit rounded-xl">
              <h2 className="text-3xl mb-6 text-center">Cart Totals</h2>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>
                      ${item.price} x {item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-600 my-6"></div>

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className={`mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition font-medium ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Processing..." : "Checkout"}
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