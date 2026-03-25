// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(""); // to show errors
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("You are not logged in. Please login to see your orders.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         const data = await res.json();
//         console.log("Fetched orders:", data);

//         if (res.status === 401) {
//           setError("Invalid or expired token. Please login again.");
//           setOrders([]);
//         } else if (!Array.isArray(data)) {
//           setError(data.message || "Failed to fetch orders.");
//           setOrders([]);
//         } else {
//           setOrders(data);
//         }
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError("Server error. Please try again later.");
//       }
//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
//   if (orders.length === 0) return <p className="text-center mt-10">No orders found.</p>;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-2xl font-semibold mb-6">My Orders</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-200">
//           <thead className="bg-gray-100 text-left">
//             <tr>
//               <th className="p-4">Order ID</th>
//               <th className="p-4">Product</th>
//               <th className="p-4">Date</th>
//               <th className="p-4">Price</th>
//               <th className="p-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order._id} className="border-t">
//                 <td className="p-4">{order._id}</td>
//                 <td className="p-4 flex items-center gap-3">
//                   <Image
//                     src={order.image}
//                     alt={order.productName}
//                     width={40}
//                     height={40}
//                     className="rounded"
//                   />
//                   {order.productName}
//                 </td>
//                 <td className="p-4">{new Date(order.date).toLocaleDateString()}</td>
//                 <td className="p-4">${order.price}</td>
//                 <td className="p-4">
//                   <span
//                     className={`px-3 py-1 text-sm rounded ${
//                       order.status === "Delivered"
//                         ? "bg-green-100 text-green-600"
//                         : order.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-600"
//                         : "bg-red-100 text-red-600"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }









// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   // image URL fix
//   const getImageUrl = (img) => {
//     if (!img) return "/placeholder.png";
//     if (img.startsWith("http")) return img;
//     return `http://localhost:5000/${img}`;
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login first.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();

//         if (Array.isArray(data)) {
//           setOrders(data);
//         } else {
//           setError("No orders found.");
//         }
//       } catch (err) {
//         setError("Server error.");
//       }

//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">My Orders</h1>

//       <table className="w-full border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-3">Order ID</th>
//             <th className="p-3">Product</th>
//             <th className="p-3">Date</th>
//             <th className="p-3">Price</th>
//             <th className="p-3">Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id} className="border-t">
//               <td className="p-3">{order._id}</td>

//               <td className="p-3 flex items-center gap-2">
//                 <Image
//                   src={getImageUrl(order.image)}
//                   alt="product"
//                   width={40}
//                   height={40}
//                 />
//                 {order.productName}
//               </td>

//               <td className="p-3">
//                 {new Date(order.date).toLocaleDateString()}
//               </td>

//               <td className="p-3">${order.price}</td>

//               <td className="p-3">{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


















// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login to see your orders.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const res = await fetch(
//           "http://localhost:5000/api/orders/my-orders",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await res.json();

//         console.log("Fetched orders:", data);

//         if (!Array.isArray(data)) {
//           setError("Failed to fetch orders.");
//         } else {
//           setOrders(data);
//         }
//       } catch (err) {
//         setError("Server error.");
//       }

//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;

//   if (error)
//     return (
//       <p className="text-center mt-10 text-red-500">
//         {error}
//       </p>
//     );

//   if (orders.length === 0)
//     return <p className="text-center mt-10">No orders found.</p>;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">
//       <h1 className="text-3xl mb-6">My Orders</h1>

//       <table className="w-full border">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4">Order ID</th>
//             <th className="p-4">Product</th>
//             <th className="p-4">Date</th>
//             <th className="p-4">Price</th>
//             <th className="p-4">Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id} className="border-t">
//               <td className="p-4">{order._id}</td>

//               <td className="p-4 flex items-center gap-3">
//                 <Image
//                   src={order.image || "/placeholder.png"}
//                   alt={order.productName}
//                   width={40}
//                   height={40}
//                 />
//                 {order.productName}
//               </td>

//               <td className="p-4">
//                 {new Date(order.date).toLocaleDateString()}
//               </td>

//               <td className="p-4">${order.price}</td>

//               <td className="p-4">
//                 <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded">
//                   {order.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }















// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {

//     const fetchOrders = async () => {

//       const token = localStorage.getItem("token");

//       console.log("Token:", token);

//       if (!token) {
//         setError("Please login first.");
//         setLoading(false);
//         return;
//       }

//       try {

//         const res = await fetch(
//           "http://localhost:5000/api/orders/my-orders",
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await res.json();

//         console.log("Fetched orders:", data);

//         if (res.status === 401) {
//           setError("Session expired. Please login again.");
//           localStorage.removeItem("token");
//           return;
//         }

//         if (Array.isArray(data)) {
//           setOrders(data);
//         } else {
//           setError(data.message || "Failed to fetch orders.");
//         }

//       } catch (err) {
//         console.error(err);
//         setError("Server error.");
//       }

//       setLoading(false);

//     };

//     fetchOrders();

//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading...</p>;

//   if (error)
//     return (
//       <p className="text-center mt-10 text-red-500">
//         {error}
//       </p>
//     );

//   if (orders.length === 0)
//     return <p className="text-center mt-10">No orders found.</p>;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10">

//       <h1 className="text-3xl mb-6">My Orders</h1>

//       <table className="w-full border">

//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-4">Order ID</th>
//             <th className="p-4">Product</th>
//             <th className="p-4">Date</th>
//             <th className="p-4">Price</th>
//             <th className="p-4">Status</th>
//           </tr>
//         </thead>

//         <tbody>

//           {orders.map((order) => (

//             <tr key={order._id} className="border-t">

//               <td className="p-4">{order._id}</td>

//               <td className="p-4 flex items-center gap-3">

//                 <Image
//                   src={order.image || "/placeholder.png"}
//                   alt={order.productName}
//                   width={40}
//                   height={40}
//                 />

//                 {order.productName}

//               </td>

//               <td className="p-4">
//                 {new Date(order.date).toLocaleDateString()}
//               </td>

//               <td className="p-4">${order.price}</td>

//               <td className="p-4">

//                 <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded">
//                   {order.status}
//                 </span>

//               </td>

//             </tr>

//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }



































































































"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Public folder se image path generate karne ka function
  const getImageUrl = (img: string) => {
    if (!img) return "/placeholder.png"; // fallback image
    return `/watch/${img}`; // frontend public/watch folder
  };

  // Fetch orders from backend
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
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.status === 401) {
          setError("Session expired. Please login again.");
          localStorage.removeItem("token");
          setLoading(false);
          return;
        }

        if (Array.isArray(data)) setOrders(data);
        else setError(data.message || "Failed to fetch orders.");
      } catch (err) {
        console.error(err);
        setError("Server error.");
      }

      setLoading(false);
    };

    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (orders.length === 0) return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

  // Format date as "16 Feb, 2026"
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left text-sm text-gray-600 w-28">Order ID</th>
              <th className="p-3 text-left text-sm text-gray-600">Product</th>
              <th className="p-3 text-left text-sm text-gray-600">Date</th>
              <th className="p-3 text-left text-sm text-gray-600">Quantity</th>
              <th className="p-3 text-left text-sm text-gray-600">Price</th>
              <th className="p-3 text-left text-sm text-gray-600">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order._id} className="bg-white hover:bg-gray-50 transition">
                {/* Order ID */}
                <td className="p-2 text-gray-700 text-xs truncate max-w-[100px]">{order._id}</td>

                {/* Product with image */}
                <td className="p-3 flex items-center gap-3">
                  <Image
                    src={getImageUrl(order.image)}
                    alt={order.productName}
                    width={50}
                    height={50}
                    className="rounded-md object-cover"
                  />
                  <span className="text-gray-700 font-medium">{order.productName}</span>
                </td>

                {/* Date */}
                <td className="p-3 text-gray-600">{formatDate(order.date)}</td>

                {/* Quantity */}
                <td className="p-3 text-gray-600">{order.quantity || 1}</td>

                {/* Price */}
                <td className="p-3 text-gray-600">${order.price}</td>

                {/* Status Badge */}
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Shipped"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
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