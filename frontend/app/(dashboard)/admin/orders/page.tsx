'use client';
import { useEffect, useState } from 'react';

type Order = {
  _id: string;
  orderId?: string;
  user?: { name: string; email: string };
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
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
        });

        if (!res.ok) throw new Error('Failed to fetch orders');

        const data = await res.json();
        console.log('API RESPONSE 👉', data);

        setOrders(
          Array.isArray(data)
            ? data
            : Array.isArray(data.orders)
            ? data.orders
            : []
        );
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
    if (s === 'delivered') return 'bg-green-100 text-green-800 border border-green-200';
    if (s === 'shipped') return 'bg-blue-100 text-blue-800 border border-blue-200';
    if (s === 'processing') return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    if (s === 'cancelled') return 'bg-red-100 text-red-800 border border-red-200';
    return 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-xl text-gray-500 animate-pulse">Loading orders...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-5xl font-extralight font-serif">All Orders</h2>
        <p className="mt-2 md:mt-0"> Total Orders : {orders.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Order Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {Array.isArray(orders) && orders.length > 0 ? (
              orders.map((order) => {
                const amount =
                  order.totalAmount ||
                  (order.price && order.quantity ? order.price * order.quantity : 0);

                return (
                  <tr
                    key={order._id}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 font-mono text-gray-700">
                      {order.orderId || `#${order._id.slice(-8).toUpperCase()}`}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {order.user?.name || 'Unknown User'}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{order.user?.email || 'N/A'}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      Rs {amount.toLocaleString('en-PK')}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(order.createdAt || order.date || Date.now()).toLocaleDateString(
                        'en-PK',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        }
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-500">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}