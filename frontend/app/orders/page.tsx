"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getImageUrl = (img) => {
    if (!img) return "/placeholder.png";
    return `/watch/${img}`;
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login first.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/orders/my-orders", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await res.json();
        if (Array.isArray(data)) setOrders(data);
        else setError("No orders found.");
      } catch (err) {
        setError("Server error.");
      }

      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading)
    return <p className="text-center mt-20 text-gray-500 text-lg">Loading orders...</p>;
  if (error)
    return <p className="text-center mt-20 text-red-600 text-lg">{error}</p>;

  // Status colors
  const statusStyles = {
    Success: "bg-green-100 text-green-800",
    Pending: "bg-blue-100 text-blue-800",
    Reject: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-6xl mx-auto p-6 poppins">
      <h1 className="text-3xl font-bold mb-8 text-center">Orders History</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse">
          <thead className="text-sm uppercase text-gray-600 bg-gray-50">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Date</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="border-t hover:bg-gray-50 transition">
                <td className="p-3 text-sm">{order._id.slice(-6)}</td>

                <td className="p-3 flex justify-center">
                  <Image
                    src={getImageUrl(order.image)}
                    alt={order.productName}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </td>

                <td className="p-3 font-medium">{order.productName}</td>
                <td className="p-3">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-3 font-semibold">${order.price}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      statusStyles[order.status] || "bg-gray-100 text-gray-700"
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