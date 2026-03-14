"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // token from login
        const res = await fetch("http://localhost:5000/api/orders/my-orders", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;

  if (!orders || orders.length === 0)
    return <p className="text-center mt-10 text-gray-500">You have no orders yet.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Orders</h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-gray-700">Order ID</th>
              <th className="p-4 text-left text-gray-700">Product</th>
              <th className="p-4 text-left text-gray-700">Date</th>
              <th className="p-4 text-left text-gray-700">Price</th>
              <th className="p-4 text-left text-gray-700">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="p-4 font-medium text-gray-800">{order._id}</td>

                <td className="p-4 flex items-center gap-3">
                  <Image
                    src={order.image || "/placeholder.png"}
                    alt={order.productName}
                    width={50}
                    height={50}
                    className="rounded-lg object-cover border"
                  />
                  <span className="text-gray-900">{order.productName}</span>
                </td>

                <td className="p-4 text-gray-700">
                  {new Date(order.date).toLocaleDateString("en-GB")}
                </td>

                <td className="p-4 text-gray-700">${order.price}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
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