export default function OrdersPage() {
  const orders = [
    { id: "#ORD-7845", customer: "Ahmed Khan", amount: 239.97, status: "Delivered", date: "22 Mar" },
    { id: "#ORD-7844", customer: "Sumbal Fatima", amount: 129.99, status: "Processing", date: "24 Mar" },
    { id: "#ORD-7843", customer: "Bilal Malik", amount: 449.98, status: "Shipped", date: "23 Mar" },
    { id: "#ORD-7842", customer: "Ayesha Noor", amount: 89.99, status: "Delivered", date: "21 Mar" },
  ];

  return (
    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
      <h2 className="text-3xl font-semibold mb-8">Recent Orders</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="text-left py-4">Order ID</th>
            <th className="text-left py-4">Customer</th>
            <th className="text-left py-4">Amount</th>
            <th className="text-left py-4">Status</th>
            <th className="text-left py-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
              <td className="py-5 font-mono">{order.id}</td>
              <td className="py-5">{order.customer}</td>
              <td className="py-5 font-medium">${order.amount}</td>
              <td className="py-5">
                <span className={`px-5 py-1 rounded-full text-xs font-medium ${
                  order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                  order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {order.status}
                </span>
              </td>
              <td className="py-5 text-gray-400">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}