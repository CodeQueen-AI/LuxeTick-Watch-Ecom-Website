"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cartcontext";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";

export default function OrderSuccessPage() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const createOrders = async () => {
      const token = localStorage.getItem("token");
      const savedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");

      // If no token or cart, redirect home (direct URL access)
      if (!token || savedCart.length === 0) {
        router.replace("/");
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/orders/create-from-cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ cartItems: savedCart }),
        });

        if (res.status === 401) {
          localStorage.removeItem("token");
          router.replace("/login");
          return;
        }

        const data = await res.json();

        if (data.success) {
          setOrderCount(savedCart.length);
          localStorage.removeItem("cart");
          localStorage.removeItem("checkoutCart");
          clearCart();
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Error creating orders:", err);
        setStatus("error");
      }
    };

    createOrders();
  }, [router, clearCart]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center poppins">
        <div className="w-12 h-12 border-4 border-[#09162c] border-t-transparent rounded-full animate-spin mb-6" />
        <p className="text-gray-500 text-sm tracking-wide">Confirming your order...</p>
      </div>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center poppins px-4 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-gray-500 mb-8 max-w-sm">
          Your payment was received but we had trouble saving your order. Please contact support.
        </p>
        <Link
          href="/"
          className="px-8 py-3 bg-[#09162c] text-white hover:bg-[#0d2040] transition font-medium"
        >
          Go Home
        </Link>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen flex flex-col items-center justify-center poppins px-4">
      <div className="bg-white max-w-md w-full text-center py-14 px-8 shadow-sm border border-gray-100">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <BsCheckCircleFill className="text-green-500 text-7xl" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold mb-2 tracking-tight">Order Confirmed!</h1>
        <p className="text-gray-400 text-sm mb-8">
          Thank you for your purchase. Your{" "}
          {orderCount > 1 ? `${orderCount} items have` : "item has"} been ordered successfully.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 my-6" />

        {/* Info */}
        <p className="text-xs text-gray-400 mb-8">
          A confirmation has been sent to your email. You can track your orders from your account.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/ordershistory"
            className="px-6 py-3 bg-[#09162c] text-white hover:bg-[#0d2040] transition font-medium text-sm"
          >
            View My Orders
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 border border-[#09162c] text-[#09162c] hover:bg-gray-50 transition font-medium text-sm"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
