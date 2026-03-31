'use client';
import { useEffect, useState } from 'react';

type Order = {
  _id: string;
  orderId?: string;
  user?: {
    name: string;
    email: string;
  };
  productName?: string;
  totalAmount?: number;
  price?: number;
  quantity?: number;
  status: string;
  date?: string;
  createdAt?: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/orders/all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await res.json();
        setOrders(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Something went wrong while fetching orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || '';
    if (s === 'delivered') return 'bg-green-100 text-green-700 border border-green-200';
    if (s === 'shipped') return 'bg-blue-100 text-blue-700 border border-blue-200';
    if (s === 'processing') return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
    if (s === 'cancelled') return 'bg-red-100 text-red-700 border border-red-200';
    return 'bg-gray-100 text-gray-700 border border-gray-200';
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center">
        <p className="text-xl text-zinc-600">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-zinc-200 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-800">All Orders</h2>
          <p className="text-zinc-500 mt-1">{orders.length} total orders</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 text-left text-zinc-500 text-sm font-medium">
              <th className="py-5 px-6">Order ID</th>
              <th className="py-5 px-6">Customer Name</th>
              <th className="py-5 px-6">Email</th>
              <th className="py-5 px-6">Amount</th>
              <th className="py-5 px-6">Status</th>
              <th className="py-5 px-6">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
              
              return (
                <tr 
                  key={order._id} 
                  className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors"
                >
                  <td className="py-5 px-6 font-mono text-zinc-700">
                    {order.orderId || `#${order._id.slice(-8).toUpperCase()}`}
                  </td>
                  <td className="py-5 px-6 font-medium text-zinc-800">
                    {order.user?.name || "Unknown User"}
                  </td>
                  <td className="py-5 px-6 text-zinc-600">
                    {order.user?.email || "N/A"}
                  </td>
                  <td className="py-5 px-6 font-semibold text-zinc-800">
                    ₹{amount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-5 px-6">
                    <span className={`px-5 py-2 rounded-full text-xs font-semibold ${getStatusStyle(order.status)}`}>
                      {order.status || "Pending"}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-zinc-500">
                    {new Date(order.createdAt || order.date || Date.now()).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {orders.length === 0 && (
        <div className="text-center py-16 text-zinc-500">
          No orders found yet.
        </div>
      )}
    </div>
  );
}