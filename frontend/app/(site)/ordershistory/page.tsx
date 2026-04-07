
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiPackage, FiRefreshCw, FiClock, FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";

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
  const [refreshing, setRefreshing] = useState(false);

  const fetchOrders = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please login first.");
      router.push("/login");
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
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(() => {
      if (localStorage.getItem("token")) {
        fetchOrders();
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [router]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getStatusConfig = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s === "success") {
      return {
        label: "Delivered",
        bgColor: "bg-emerald-100",
        textColor: "text-emerald-700",
        icon: FiCheckCircle,
      };
    }
    if (s === "reject") {
      return {
        label: "Cancelled",
        bgColor: "bg-rose-100",
        textColor: "text-rose-700",
        icon: FiXCircle,
      };
    }
    return {
      label: "Processing",
      bgColor: "bg-amber-100",
      textColor: "text-amber-700",
      icon: FiClock,
    };
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#09162c]"></div>
          <FiPackage className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#09162c] w-6 h-6" />
        </div>
        <p className="mt-4 font-medium">Loading Your Orders History..</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <FiAlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <p className="text-red-800 font-medium mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-12 text-center">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiPackage className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
          <p className="text-gray-500 mb-6">Looks like you haven't placed any orders.</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-8">
          <h1 className="text-7xl tracking-tight allura">
            Order History
          </h1>
        </div>

        {/* Orders List - Simple Table Style */}
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-400 uppercase">
                <tr>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Product</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Order ID</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Quantity</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Price</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Total</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-serif font-extralight">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => {
                  const statusConfig = getStatusConfig(order.status);
                  const StatusIcon = statusConfig.icon;
                  const totalAmount = order.price * order.quantity;

                  return (
                    <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                      {/* Product with Image - Centered */}
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-3">
                          {order.image ? (
                            <div className="relative w-14 h-14 overflow-hidden flex-shrink-0">
                              <Image
                                src={order.image}
                                alt={order.productName}
                                fill
                                className="object-cover"
                                unoptimized
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = "none";
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FiPackage className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                          <span className="font-semibold capitalize text-base">{order.productName}</span>
                        </div>
                      </td>

                      {/* Order ID - Centered */}
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                          #{order._id.slice(-8).toUpperCase()}
                        </span>
                      </td>

                      {/* Quantity - Centered */}
                      <td className="px-6 py-4 text-center font-medium text-base font-serif">{order.quantity}</td>

                      {/* Price - Centered */}
                      <td className="px-6 py-4 text-center text-base font-mono">${order.price.toLocaleString()}</td>

                      {/* Total - Centered */}
                      <td className="px-6 py-4 text-center text-gray-900 text-base">${totalAmount.toLocaleString()}</td>

                      {/* Status - Centered */}
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                      </td>

                      {/* Date - Centered */}
                      <td className="px-6 py-4 text-center text-sm">{formatDate(order.date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 text-center">
          <p className="text-xl font-serif">
            Total Orders: <span className="font-semibold ">{orders.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}