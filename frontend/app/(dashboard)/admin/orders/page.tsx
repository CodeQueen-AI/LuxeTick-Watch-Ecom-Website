// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";
// import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

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

//   // Toast state
//   const [toast, setToast] = useState<string | null>(null);
//   const [type, setType] = useState<"success" | "error">("success");

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
//     if (s === "success" || s === "delivered") return "bg-green-100 text-green-800 border border-green-200";
//     if (s === "reject" || s === "cancelled") return "bg-red-100 text-red-800 border border-red-200";
//     return "bg-gray-100 text-gray-800 border border-gray-200";
//   };

//   // ---------------- Update Status ----------------
//   const handleStatusChange = async (orderId: string, newStatus: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem("token"),
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });
//       if (!res.ok) throw new Error("Failed to update status");
//       const updatedOrder = await res.json();
//       setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status: updatedOrder.status } : o)));
//       setType("success");
//       setToast("Order status updated successfully");
//       setTimeout(() => setToast(null), 3000);
//     } catch (err: any) {
//       console.error("Status update failed:", err);
//       setType("error");
//       setToast(err.message || "Failed to update order status");
//       setTimeout(() => setToast(null), 3000);
//     }
//   };

//   // ---------------- Delete Order ----------------
//   const handleDelete = async (orderId: string, name: string) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer " + localStorage.getItem("token"),
//         },
//       });
//       if (!res.ok) throw new Error("Failed to delete order");
//       setOrders((prev) => prev.filter((o) => o._id !== orderId));

//       // Show toast
//       setType("success");
//       setToast(`Order "${name}" Deleted Successfully`);
//       setTimeout(() => setToast(null), 3000);
//     } catch (err: any) {
//       console.error(err);
//       setType("error");
//       setToast(err.message || "Failed to delete order");
//       setTimeout(() => setToast(null), 3000);
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
//     <div className="p-4 md:p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//         <h2 className="text-2xl md:text-3xl font-serif font-extralight">All Orders</h2>
//         <p className="mt-2 md:mt-0 text-sm md:text-base">Total Orders : {orders.length}</p>
//       </div>

//       {/* Mobile View - Card Layout */}
//       <div className="md:hidden space-y-4">
//         {orders.length > 0 ? (
//           orders.map((order) => {
//             const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
//             const name = order.user?.name || "Unknown";
//             const orderDate = new Date(order.createdAt || order.date || Date.now());
//             return (
//               <div key={order._id} className="border border-gray-200 rounded-lg p-4 space-y-3">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <p className="text-xs text-gray-500">Order ID</p>
//                     <p className="font-mono text-sm">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</p>
//                   </div>
//                   <button
//                     onClick={() => handleDelete(order._id, name)}
//                     className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition"
//                   >
//                     <FiTrash2 className="text-red-600" />
//                   </button>
//                 </div>
                
//                 <div>
//                   <p className="text-xs text-gray-500">Customer</p>
//                   <p className="capitalize text-sm font-medium">{name}</p>
//                   <p className="text-xs text-gray-600">{order.user?.email || "N/A"}</p>
//                 </div>
                
//                 <div className="flex justify-between">
//                   <div>
//                     <p className="text-xs text-gray-500">Amount</p>
//                     <p className="text-lg font-semibold">$ {amount.toLocaleString("en-PK")}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500">Status</p>
//                     <select
//                       value={order.status}
//                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                       className={`px-2 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
//                     >
//                       <option value="pending">Processing</option>
//                       <option value="success">Delivered</option>
//                       <option value="reject">Cancelled</option>
//                     </select>
//                   </div>
//                 </div>
                
//                 <div>
//                   <p className="text-xs text-gray-500">Order Date</p>
//                   <p className="text-xs">
//                     {`${orderDate.getDate()} ${orderDate.toLocaleString("en-US", { month: "short" })} ${orderDate.getFullYear()}`}
//                     <br />
//                     {orderDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
//                   </p>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="text-center py-10 text-gray-500 font-medium">
//             No orders found
//           </div>
//         )}
//       </div>

//       {/* Desktop View - Table Layout */}
//       <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Order ID</th>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
//               <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Order Date</th>
//               <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-300 text-sm">
//             {orders.length > 0 ? (
//               orders.map((order) => {
//                 const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
//                 const name = order.user?.name || "Unknown";
//                 const orderDate = new Date(order.createdAt || order.date || Date.now());
//                 return (
//                   <tr key={order._id} className="hover:bg-gray-50">
//                     <td className="px-4 py-3 font-mono text-xs">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</td>
//                     <td className="px-4 py-3 capitalize text-sm">{name}</td>
//                     <td className="px-4 py-3 text-xs">{order.user?.email || "N/A"}</td>
//                     <td className="px-4 py-3 text-sm">$ {amount.toLocaleString("en-PK")}</td>
//                     <td className="px-4 py-3">
//                       <select
//                         value={order.status}
//                         onChange={(e) => handleStatusChange(order._id, e.target.value)}
//                         className={`px-2 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
//                       >
//                         <option value="pending">Processing</option>
//                         <option value="success">Delivered</option>
//                         <option value="reject">Cancelled</option>
//                       </select>
//                     </td>
//                     <td className="px-4 py-3 text-xs whitespace-nowrap">
//                       {`${orderDate.getDate()} ${orderDate.toLocaleString("en-US", { month: "short" })} ${orderDate.getFullYear()}`}
//                       <br />
//                       {orderDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
//                     </td>
//                     <td className="px-4 py-3 text-center">
//                       <button
//                         onClick={() => handleDelete(order._id, name)}
//                         className="p-2 bg-red-100  hover:bg-red-200 transition cursor-pointer"
//                       >
//                         <FiTrash2 className="text-red-600 text-sm" />
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

//       {/* ---------------- Toast Notification ---------------- */}
//       {toast && (
//         <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white shadow-xl px-5 py-3 z-50 rounded-lg">
//           {type === "success" ? (
//             <AiOutlineCheckCircle className="text-green-500 text-2xl" />
//           ) : (
//             <AiOutlineCloseCircle className="text-red-500 text-2xl" />
//           )}
//           <p className="text-sm">{toast}</p>
//         </div>
//       )}
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
    if (s === "success" || s === "delivered") return "bg-green-100 text-green-800 border border-green-200";
    if (s === "reject" || s === "cancelled") return "bg-red-100 text-red-800 border border-red-200";
    return "bg-gray-100 text-gray-800 border border-gray-200";
  };

  // ---------------- Update Status ----------------
  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      const updatedOrder = await res.json();
      setOrders((prev) => prev.map((o) => (o._id === orderId ? { ...o, status: updatedOrder.status } : o)));
      setType("success");
      setToast("Order status updated successfully");
      setTimeout(() => setToast(null), 3000);
    } catch (err: any) {
      console.error("Status update failed:", err);
      setType("error");
      setToast(err.message || "Failed to update order status");
      setTimeout(() => setToast(null), 3000);
    }
  };

  // ---------------- Delete Order with Confirmation ----------------
  const handleDelete = async (orderId: string, name: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete the order for "${name}"?`);
    if (!confirmed) return; // If user cancels, stop deletion

    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
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
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-serif font-extralight">All Orders</h2>
        <p className="mt-2 md:mt-0 text-sm md:text-base">Total Orders : {orders.length}</p>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => {
            const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
            const name = order.user?.name || "Unknown";
            const orderDate = new Date(order.createdAt || order.date || Date.now());
            return (
              <div key={order._id} className="border border-gray-200 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-gray-500">Order ID</p>
                    <p className="font-mono text-sm">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(order._id, name)}
                    className="p-2 bg-red-100 rounded-lg hover:bg-red-200 transition"
                  >
                    <FiTrash2 className="text-red-600" />
                  </button>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Customer</p>
                  <p className="capitalize text-sm font-medium">{name}</p>
                  <p className="text-xs text-gray-600">{order.user?.email || "N/A"}</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Amount</p>
                    <p className="text-lg font-semibold">$ {amount.toLocaleString("en-PK")}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className={`px-2 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
                    >
                      <option value="pending">Processing</option>
                      <option value="success">Delivered</option>
                      <option value="reject">Cancelled</option>
                    </select>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500">Order Date</p>
                  <p className="text-xs">
                    {`${orderDate.getDate()} ${orderDate.toLocaleString("en-US", { month: "short" })} ${orderDate.getFullYear()}`}
                    <br />
                    {orderDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 text-gray-500 font-medium">No orders found</div>
        )}
      </div>

      {/* Desktop View - Table Layout */}
      <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Order Date</th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 text-sm">
            {orders.length > 0 ? (
              orders.map((order) => {
                const amount = order.totalAmount || (order.price && order.quantity ? order.price * order.quantity : 0);
                const name = order.user?.name || "Unknown";
                const orderDate = new Date(order.createdAt || order.date || Date.now());
                return (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs">{order.orderId || `#${order._id.slice(-8).toUpperCase()}`}</td>
                    <td className="px-4 py-3 capitalize text-sm">{name}</td>
                    <td className="px-4 py-3 text-xs">{order.user?.email || "N/A"}</td>
                    <td className="px-4 py-3 text-sm">$ {amount.toLocaleString("en-PK")}</td>
                    <td className="px-4 py-3">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className={`px-2 py-1 rounded text-xs font-semibold ${getStatusStyle(order.status)}`}
                      >
                        <option value="pending">Processing</option>
                        <option value="success">Delivered</option>
                        <option value="reject">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 text-xs whitespace-nowrap">
                      {`${orderDate.getDate()} ${orderDate.toLocaleString("en-US", { month: "short" })} ${orderDate.getFullYear()}`}
                      <br />
                      {orderDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(order._id, name)}
                        className="p-2 bg-red-100 hover:bg-red-200 transition cursor-pointer"
                      >
                        <FiTrash2 className="text-red-600 text-sm" />
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
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white shadow-xl px-5 py-3 z-50 rounded-lg">
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