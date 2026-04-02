// 'use client';
// import { useEffect, useState } from 'react';

// type Order = {
//   _id: string;
//   orderId?: string;
//   user?: { name: string; email: string };
//   productName?: string;
//   totalAmount?: number;
//   price?: number;
//   quantity?: number;
//   status: string;
//   date?: string;
//   createdAt?: string;
// };

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/orders/all', {
//           method: 'GET',
//           headers: { 'Content-Type': 'application/json' },
//           cache: 'no-store',
//         });

//         if (!res.ok) throw new Error('Failed to fetch orders');

//         const data = await res.json();
//         console.log('API RESPONSE 👉', data);

//         setOrders(
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.orders)
//             ? data.orders
//             : []
//         );
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message || 'Something went wrong while fetching orders');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   const getStatusStyle = (status: string) => {
//     const s = status?.toLowerCase() || '';
//     if (s === 'delivered') return 'bg-green-100 text-green-800 border border-green-200';
//     if (s === 'shipped') return 'bg-blue-100 text-blue-800 border border-blue-200';
//     if (s === 'processing') return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
//     if (s === 'cancelled') return 'bg-red-100 text-red-800 border border-red-200';
//     return 'bg-gray-100 text-gray-800 border border-gray-200';
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-xl text-gray-500 animate-pulse">Loading orders...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );

//   return (
//     <div className="p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h2 className="text-5xl font-extralight font-serif">All Orders</h2>
//         <p className="mt-2 md:mt-0"> Total Orders : {orders.length}</p>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Customer Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Amount
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order Date
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">
//             {Array.isArray(orders) && orders.length > 0 ? (
//               orders.map((order) => {
//                 const amount =
//                   order.totalAmount ||
//                   (order.price && order.quantity ? order.price * order.quantity : 0);

//                 return (
//                   <tr
//                     key={order._id}
//                     className="hover:bg-gray-50 transition-colors duration-200"
//                   >
//                     <td className="px-6 py-4 font-mono text-gray-700">
//                       {order.orderId || `#${order._id.slice(-8).toUpperCase()}`}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-gray-800">
//                       {order.user?.name || 'Unknown User'}
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">{order.user?.email || 'N/A'}</td>
//                     <td className="px-6 py-4 font-semibold text-gray-800">
//                       Rs {amount.toLocaleString('en-PK')}
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
//                           order.status
//                         )}`}
//                       >
//                         {order.status || 'Pending'}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-gray-500">
//                       {new Date(order.createdAt || order.date || Date.now()).toLocaleDateString(
//                         'en-PK',
//                         {
//                           day: 'numeric',
//                           month: 'short',
//                           year: 'numeric',
//                           hour: '2-digit',
//                           minute: '2-digit',
//                         }
//                       )}
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={6} className="text-center py-10 text-gray-500">
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }













// 'use client';
// import { useEffect, useState } from 'react';

// type Order = {
//   _id: string;
//   orderId?: string;
//   user?: { name: string; email: string };
//   productName?: string;
//   totalAmount?: number;
//   price?: number;
//   quantity?: number;
//   status: string;
//   date?: string;
//   createdAt?: string;
// };

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>('');

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/orders/all', {
//           method: 'GET',
//           headers: { 'Content-Type': 'application/json' },
//           cache: 'no-store',
//         });
//         if (!res.ok) throw new Error('Failed to fetch orders');
//         const data = await res.json();
//         console.log(data)
//         setOrders(Array.isArray(data) ? data : Array.isArray(data.orders) ? data.orders : []);
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message || 'Something went wrong while fetching orders');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   const getStatusStyle = (status: string) => {
//     const s = status?.toLowerCase() || '';
//     if (s === 'delivered') return 'bg-green-100 text-green-800 border border-green-200';
//     if (s === 'shipped') return 'bg-blue-100 text-blue-800 border border-blue-200';
//     if (s === 'processing') return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
//     if (s === 'cancelled') return 'bg-red-100 text-red-800 border border-red-200';
//     if (s === 'success') return 'bg-green-200 text-green-900 border border-green-300';
//     if (s === 'reject') return 'bg-red-200 text-red-900 border border-red-300';
//     return 'bg-gray-100 text-gray-800 border border-gray-200';
//   };

//   const handleStatusChange = async (orderId: string, newStatus: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (!res.ok) throw new Error('Failed to update status');
//       const updatedOrder = await res.json();

//       // Update local state
//       setOrders((prev) =>
//         prev.map((o) => (o._id === orderId ? { ...o, status: updatedOrder.status } : o))
//       );
//     } catch (err: any) {
//       console.error('Status update failed:', err);
//       alert(err.message || 'Failed to update order status');
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-xl text-gray-500 animate-pulse">Loading orders...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );

//   return (
//     <div className="p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h2 className="text-3xl font-semibold text-gray-800">All Orders</h2>
//         <p className="mt-2 md:mt-0">{orders.length} Total Orders</p>
//       </div>

//       <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Customer
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Amount
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order Date
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-100">
//             {Array.isArray(orders) && orders.length > 0 ? (
//               orders.map((order) => {
//                 const amount =
//                   order.totalAmount ||
//                   (order.price && order.quantity ? order.price * order.quantity : 0);

//                 return (
//                   <tr key={order._id} className="hover:bg-gray-50 transition-colors duration-200">
//                     <td className="px-6 py-4 font-mono text-gray-700">
//                       {order.orderId || `#${order._id.slice(-8).toUpperCase()}`}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-gray-800">
//                       {order.user?.name || 'Unknown'}
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">{order.user?.email || 'N/A'}</td>
//                     <td className="px-6 py-4 font-semibold text-gray-800">
//                       Rs {amount.toLocaleString('en-PK')}
//                     </td>
//                     <td className="px-6 py-4">
//                       <select
//                         value={order.status}
//                         onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                         className={`px-3 py-1 rounded text-xs font-semibold ${getStatusStyle(
//                           order.status
//                         )}`}
//                       >
//                         <option value="pending">Pending</option>
//                         <option value="success">Success</option>
//                         <option value="reject">Reject</option>
//                         <option value="shipped">Shipped</option>
//                         <option value="delivered">Delivered</option>
//                         <option value="cancelled">Cancelled</option>
//                       </select>
//                     </td>
//                     <td className="px-6 py-4 text-gray-500">
//                       {new Date(order.createdAt || order.date || Date.now()).toLocaleDateString(
//                         'en-PK',
//                         {
//                           day: 'numeric',
//                           month: 'short',
//                           year: 'numeric',
//                           hour: '2-digit',
//                           minute: '2-digit',
//                         }
//                       )}
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={6} className="text-center py-10 text-gray-500">
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }














// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";

// type Order = {
//   _id: string;
//   orderId?: string;
//   user?: { name: string; email: string };
//   productName?: string;
//   totalAmount?: number;
//   price?: number;
//   quantity?: number;
//   status: string;
//   date?: string;
//   createdAt?: string;
// };

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/orders/all", {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//           cache: "no-store",
//         });
//         if (!res.ok) throw new Error("Failed to fetch orders");
//         const data = await res.json();
//         setOrders(
//           Array.isArray(data)
//             ? data
//             : Array.isArray(data.orders)
//             ? data.orders
//             : []
//         );
//       } catch (err: any) {
//         console.error(err);
//         setError(
//           err.message || "Something went wrong while fetching orders"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   const getStatusStyle = (status: string) => {
//     const s = status?.toLowerCase() || "";
//     if (s === "delivered")
//       return "bg-green-100 text-green-800 border border-green-200";
//     if (s === "shipped")
//       return "bg-blue-100 text-blue-800 border border-blue-200";
//     if (s === "processing")
//       return "bg-yellow-100 text-yellow-800 border border-yellow-200";
//     if (s === "cancelled")
//       return "bg-red-100 text-red-800 border border-red-200";
//     if (s === "success")
//       return "bg-green-200 text-green-900 border border-green-300";
//     if (s === "reject")
//       return "bg-red-200 text-red-900 border border-red-300";
//     return "bg-gray-100 text-gray-800 border border-gray-200";
//   };

//   const handleStatusChange = async (orderId: string, newStatus: string) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/orders/${orderId}/status`,
//         {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ status: newStatus }),
//         }
//       );
//       if (!res.ok) throw new Error("Failed to update status");
//       const updatedOrder = await res.json();
//       setOrders((prev) =>
//         prev.map((o) =>
//           o._id === orderId ? { ...o, status: updatedOrder.status } : o
//         )
//       );
//     } catch (err: any) {
//       console.error("Status update failed:", err);
//       alert(err.message || "Failed to update order status");
//     }
//   };

//   const handleDelete = async (orderId: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/orders/${orderId}`,
//         { method: "DELETE" }
//       );
//       if (!res.ok) throw new Error("Failed to delete order");
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message || "Failed to delete order");
//     }
//   };

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-xl text-gray-500 animate-pulse">
//           Loading orders...
//         </p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );

//   return (
//     <div className="p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h2 className="text-3xl font-semibold text-gray-800">All Orders</h2>
//         <p className="mt-2 md:mt-0">{orders.length} Total Orders</p>
//       </div>

//       <div className="overflow-x-auto rounded-xl shadow border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Customer
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Amount
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
//                 Order Date
//               </th>
//               <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-100">
//             {orders.length > 0 ? (
//               orders.map((order) => {
//                 const amount =
//                   order.totalAmount ||
//                   (order.price && order.quantity
//                     ? order.price * order.quantity
//                     : 0);

//                 return (
//                   <tr
//                     key={order._id}
//                     className="hover:bg-gray-50 transition-colors duration-200"
//                   >
//                     <td className="px-6 py-4 font-mono text-gray-700">
//                       {order.orderId ||
//                         `#${order._id.slice(-8).toUpperCase()}`}
//                     </td>
//                     <td className="px-6 py-4 font-medium text-gray-800">
//                       {order.user?.name || "Unknown"}
//                     </td>
//                     <td className="px-6 py-4 text-gray-600">
//                       {order.user?.email || "N/A"}
//                     </td>
//                     <td className="px-6 py-4 font-semibold text-gray-800">
//                       Rs {amount.toLocaleString("en-PK")}
//                     </td>
//                     <td className="px-6 py-4">
//                       <select
//                         value={order.status}
//                         onChange={(e) =>
//                           handleStatusChange(order._id, e.target.value)
//                         }
//                         className={`px-3 py-1 rounded text-xs font-semibold ${getStatusStyle(
//                           order.status
//                         )}`}
//                       >
//                         <option value="pending">Pending</option>
//                         <option value="success">Success</option>
//                         <option value="reject">Reject</option>
//                         <option value="shipped">Shipped</option>
//                         <option value="delivered">Delivered</option>
//                         <option value="cancelled">Cancelled</option>
//                       </select>
//                     </td>
//                     <td className="px-6 py-4 text-gray-500">
//                       {new Date(
//                         order.createdAt || order.date || Date.now()
//                       ).toLocaleDateString("en-PK", {
//                         day: "numeric",
//                         month: "short",
//                         year: "numeric",
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <button
//                         onClick={() => handleDelete(order._id)}
//                         className="p-2 bg-red-100 rounded hover:bg-red-200 transition"
//                       >
//                         <FiTrash2 className="text-red-600" />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td
//                   colSpan={7}
//                   className="text-center py-10 text-gray-500 font-medium"
//                 >
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





























// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";

// type Order = {
//   _id: string;
//   orderId?: string;
//   user?: { name: string; email: string };
//   productName?: string;
//   totalAmount?: number;
//   price?: number;
//   quantity?: number;
//   status: string;
//   date?: string;
//   createdAt?: string;
// };

// export default function OrdersPage() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   // ---------------- Fetch Orders ----------------
//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/orders/all", {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//           cache: "no-store",
//         });
//         if (!res.ok) throw new Error("Failed to fetch orders");
//         const data = await res.json();
//         setOrders(Array.isArray(data) ? data : Array.isArray(data.orders) ? data.orders : []);
//       } catch (err: any) {
//         console.error(err);
//         setError(err.message || "Something went wrong while fetching orders");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, []);

//   // ---------------- Status Styling ----------------
//   const getStatusStyle = (status: string) => {
//     const s = status?.toLowerCase() || "";
//     if (s === "success") return "bg-green-100 text-green-800 border border-green-200";
//     if (s === "reject") return "bg-red-100 text-red-800 border border-red-200";
//     return "bg-gray-100 text-gray-800 border border-gray-200";
//   };

//   // ---------------- Update Status ----------------
//   const handleStatusChange = async (orderId: string, newStatus: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem("token") // token required
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (!res.ok) throw new Error("Failed to update status");
//       const updatedOrder = await res.json();
//       setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status: updatedOrder.status } : o)));
//     } catch (err: any) {
//       console.error("Status update failed:", err);
//       alert(err.message || "Failed to update order status");
//     }
//   };

//   // ---------------- Delete Order ----------------
//   const handleDelete = async (orderId: string) => {
//     if (!confirm("Are you sure you want to delete this order?")) return;
//     try {
//       const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem("token") // token required
//         },
//       });
//       if (!res.ok) throw new Error("Failed to delete order");
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));
//     } catch (err: any) {
//       console.error(err);
//       alert(err.message || "Failed to delete order");
//     }
//   };

//   // ---------------- Loading / Error ----------------
//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-xl text-gray-500 animate-pulse">Loading orders...</p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-96">
//         <p className="text-red-500 text-lg">{error}</p>
//       </div>
//     );

//   // ---------------- Render Orders Table ----------------
//   return (
//     <div className="p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h2 className="text-3xl font-serif font-extralight">All Orders</h2>
//         <p className="mt-2 md:mt-0">Total Orders : {orders.length} </p>
//       </div>

//       <div className="overflow-x-auto border border-gray-200">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order ID</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order Date Time</th>
//               <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>

//           <tbody className=" divide-y divide-gray-300 text-sm">
//             {orders.length > 0 ? (
//               orders.map((order) => {
//                 const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
//                 return (
//                   <tr key={order._id}>
//                     <td className="px-6 py-4 font-mono">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</td>
//                     <td className="px-6 py-4 capitalize text-sm">{order.user?.name || "Unknown"}</td>
//                     <td className="px-6 py-4 text-xs">{order.user?.email || "N/A"}</td>
//                     <td className="px-6 py-4">$ {amount.toLocaleString("en-PK")}</td>
//                     <td className="px-6 py-4">
//                       <select
//                         value={order.status}
//                         onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                         className={`px-3 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
//                       >
//                         <option value="pending">Pending</option>
//                         <option value="success">Success</option>
//                         <option value="reject">Reject</option>
//                       </select>
//                     </td>
//                     <td className="px-6 py-4 text-xs">{new Date(order.createdAt || order.date || Date.now()).toLocaleDateString("en-PK", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
                    
//                     <td className="px-6 py-4 text-center">
//                       <button
//                         onClick={() => handleDelete(order._id)}
//                         className="p-2 bg-red-100 cursor-pointer hover:bg-red-200 transition"
//                       >
//                         <FiTrash2 className="text-red-600" />
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan={7} className="text-center py-10 text-gray-500 font-medium">
//                   No orders found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }














"use client";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

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
  const [error, setError] = useState<string>("");
  
  // Toast state
  const [toast, setToast] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error">("success");

  // ---------------- Fetch Orders ----------------
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/all", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(Array.isArray(data) ? data : Array.isArray(data.orders) ? data.orders : []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong while fetching orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // ---------------- Status Styling ----------------
  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s === "success") return "bg-green-100 text-green-800 border border-green-200";
    if (s === "reject") return "bg-red-100 text-red-800 border border-red-200";
    return "bg-gray-100 text-gray-800 border border-gray-200";
  };

  // ---------------- Update Status ----------------
  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      const updatedOrder = await res.json();
      setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status: updatedOrder.status } : o)));
    } catch (err: any) {
      console.error("Status update failed:", err);
      setType("error");
      setToast(err.message || "Failed to update order status");
      setTimeout(() => setToast(null), 3000);
    }
  };

  // ---------------- Delete Order ----------------
  const handleDelete = async (orderId: string, name: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      if (!res.ok) throw new Error("Failed to delete order");
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
      
      // Show toast
      setType("success");
      setToast(`Order "${name}" Deleted Successfully`);
      setTimeout(() => setToast(null), 3000);
    } catch (err: any) {
      console.error(err);
      setType("error");
      setToast(err.message || "Failed to delete order");
      setTimeout(() => setToast(null), 3000);
    }
  };

  // ---------------- Loading / Error ----------------
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

  // ---------------- Render Orders Table ----------------
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-3xl font-serif font-extralight">All Orders</h2>
        <p className="mt-2 md:mt-0">Total Orders : {orders.length}</p>
      </div>

      <div className="overflow-x-auto border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Order Date Time</th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 text-sm">
            {orders.length > 0 ? (
              orders.map((order) => {
                const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
                const name = order.user?.name || "Unknown";
                const orderDate = new Date(order.createdAt || order.date || Date.now());
                return (
                  <tr key={order._id}>
                    <td className="px-6 py-4 font-mono">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</td>
                    <td className="px-6 py-4 capitalize text-sm">{name}</td>
                    <td className="px-6 py-4 text-xs">{order.user?.email || "N/A"}</td>
                    <td className="px-6 py-4">$ {amount.toLocaleString("en-PK")}</td>
                    <td className="px-6 py-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className={`px-3 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="success">Success</option>
                        <option value="reject">Reject</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      {`${orderDate.getDate()} ${orderDate.toLocaleString("en-US", { month: "short" })} ${orderDate.getFullYear()}`}
                      <br />
                      {orderDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleDelete(order._id, name)}
                        className="p-2 bg-red-100 cursor-pointer hover:bg-red-200 transition"
                      >
                        <FiTrash2 className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-10 text-gray-500 font-medium">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ---------------- Toast Notification ---------------- */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white shadow-xl px-5 py-3 z-50">
          {type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-2xl" />
          ) : (
            <AiOutlineCloseCircle className="text-red-500 text-2xl" />
          )}
          <p className="text-sm">{toast}</p>
        </div>
      )}
    </div>
  );
}