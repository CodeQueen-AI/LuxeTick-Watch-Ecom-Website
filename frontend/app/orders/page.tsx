"use client";

import Image from "next/image";

export default function OrderHistory() {

  const orders = [
    {
      id: "#1024",
      product: "Classic Black Watch",
      image: "/watch1.png",
      date: "12 Mar 2026",
      price: "$120",
      status: "Delivered"
    },
    {
      id: "#1025",
      product: "Silver Luxury Watch",
      image: "/watch2.png",
      date: "10 Mar 2026",
      price: "$220",
      status: "Pending"
    },
    {
      id: "#1026",
      product: "Sport Smart Watch",
      image: "/watch3.png",
      date: "8 Mar 2026",
      price: "$150",
      status: "Cancelled"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">

          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Product</th>
              <th className="p-4">Date</th>
              <th className="p-4">Price</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order, index) => (
              <tr key={index} className="border-t">

                <td className="p-4">{order.id}</td>

                <td className="p-4 flex items-center gap-3">
                  <Image
                    src={order.image}
                    alt={order.product}
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  {order.product}
                </td>

                <td className="p-4">{order.date}</td>

                <td className="p-4">{order.price}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 text-sm rounded
                    ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
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

