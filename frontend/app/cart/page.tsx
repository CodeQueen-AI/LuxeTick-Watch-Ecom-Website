"use client";
import { FaTrash } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useCart } from '../Context/cartcontext'
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Cart = () => {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      const data = await res.json();

      if (data.id) {
        const stripe = await stripePromise;
        await stripe!.redirectToCheckout({ sessionId: data.id });
      } else {
        console.error("Stripe session not created", data.error);
      }
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <div className="font-sans container mx-auto p-6">
      <div className="p-10 text-left">
        <div className="flex items-center">
          <div className="w-2 h-12 bg-black rounded-full mr-4"></div>
          <h1 className="text-6xl font-extralight allura" >Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600 mt-4">Your cart is empty</p>
        ) : (
          <div className="mt-8">
            {/* Desktop Table */}
            <div className="overflow-x-auto hidden sm:block">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">ITEM</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">PRICE</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">QUANTITY</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">SUBTOTAL</th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase">REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="py-2 px-4 border-b border-gray-300">
                        <div className="flex items-center cursor-pointer">
                          <Image src={item.image} alt={item.name} width={64} height={64} className="mr-4" />
                          <div>
                            <div className="text-sm">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">{item.price}</td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <div className="flex items-center">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                            className="text-gray-500 focus:outline-none cursor-pointer"
                          >
                            <FiMinus />
                          </button>
                          <span className="mx-2 text-gray-700">{item.quantity}</span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 focus:outline-none cursor-pointer"
                          >
                            <GoPlus />
                          </button>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="py-2 px-4 border-b border-gray-300 text-sm">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 focus:outline-none cursor-pointer"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleCheckout}
                className="px-8 py-2 bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-600 hover:text-white hover:border-white transition-colors duration-300 w-40 cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;