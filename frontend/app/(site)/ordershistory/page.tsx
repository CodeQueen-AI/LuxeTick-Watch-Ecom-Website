// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function OrderHistory() {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   // Public folder se image path generate karne ka function
//   const getImageUrl = (img: string) => {
//     if (!img) return "/placeholder.png"; // fallback image
//     return `/watch/${img}`; // frontend public/watch folder
//   };

//   // Fetch orders from backend
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
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();
//         console.log(data)
//         if (res.status === 401) {
//           setError("Session expired. Please login again.");
//           localStorage.removeItem("token");
//           setLoading(false);
//           return;
//         }

//         if (Array.isArray(data)) setOrders(data);
//         else setError(data.message || "Failed to fetch orders.");
//       } catch (err) {
//         console.error(err);
//         setError("Server error.");
//       }

//       setLoading(false);
//     };

//     fetchOrders();
//   }, []);

//   if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
//   if (orders.length === 0) return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

//   // Format date as "16 Feb, 2026"
//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border border-gray-200 rounded-lg">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="p-2 text-left text-sm text-gray-600 w-28">Order ID</th>
//               <th className="p-3 text-left text-sm text-gray-600">Product</th>
//               <th className="p-3 text-left text-sm text-gray-600">Date</th>
//               <th className="p-3 text-left text-sm text-gray-600">Quantity</th>
//               <th className="p-3 text-left text-sm text-gray-600">Price</th>
//               <th className="p-3 text-left text-sm text-gray-600">Status</th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-100">
//             {orders.map((order) => (
//               <tr key={order._id} className="bg-white hover:bg-gray-50 transition">
//                 {/* Order ID */}
//                 <td className="p-2 text-gray-700 text-xs truncate max-w-[100px]">{order._id}</td>

//                 {/* Product with image */}
//                 <td className="p-3 flex items-center gap-3">
//                   <Image
//                     src={getImageUrl(order.image)}
//                     alt={order.productName}
//                     width={50}
//                     height={50}
//                     className="rounded-md object-cover"
//                   />
//                   <span className="text-gray-700 font-medium">{order.productName}</span>
//                 </td>

//                 {/* Date */}
//                 <td className="p-3 text-gray-600">{formatDate(order.date)}</td>

//                 {/* Quantity */}
//                 <td className="p-3 text-gray-600">{order.quantity || 1}</td>

//                 {/* Price */}
//                 <td className="p-3 text-gray-600">${order.price}</td>

//                 {/* Status Badge */}
//                 <td className="p-3">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       order.status === "Shipped"
//                         ? "bg-green-100 text-green-700"
//                         : order.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-gray-100 text-gray-600"
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
// import { useRouter } from "next/navigation";

// type Order = {
//   _id: string;
//   productName: string;
//   image?: string;
//   price: number;
//   quantity: number;
//   status: string;
//   date: string;
// };

// export default function OrderHistory() {
//   const router = useRouter();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   const getImageUrl = (img?: string) => {
//     if (!img) return "/placeholder.png";
//     return `/watch/${img}`;
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");
//       console.log("Token exists:", !!token);

//       if (!token) {
//         setError("Please login first.");
//         router.push("/login");
//         return;
//       }

//       try {
//         console.log("Fetching orders from API...");
        
//         const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("Response status:", res.status);
        
//         const data = await res.json();
//         console.log("Full response data:", data); // 👈 This will show what backend returns

//         if (res.status === 401) {
//           localStorage.removeItem("token");
//           setError("Session expired. Please login again.");
//           router.push("/login");
//           return;
//         }

//         if (res.status === 200 && data.success === true) {
//           if (data.orders && Array.isArray(data.orders)) {
//             console.log(`✅ Found ${data.orders.length} orders`);
//             setOrders(data.orders);
//           } else {
//             console.log("❌ data.orders is not an array:", data.orders);
//             setError("Invalid orders data format");
//           }
//         } else {
//           console.log("❌ Request failed:", data);
//           setError(data.message || "Failed to fetch orders.");
//         }
//       } catch (err) {
//         console.error("❌ Fetch error:", err);
//         setError("Server error. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [router]);

//   if (loading) return <p className="text-center mt-10 text-gray-500">Loading orders...</p>;
//   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
//   if (orders.length === 0) return <p className="text-center mt-10 text-gray-500">No orders found.</p>;

//   const formatDate = (dateString: string) =>
//     new Date(dateString).toLocaleDateString("en-US", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <h1 className="text-2xl font-semibold mb-6 text-gray-800">My Orders</h1>

//       <div className="overflow-x-auto border border-gray-200 rounded-lg">
//         <table className="w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 w-28">Order ID</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Product</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Quantity</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-100 text-sm">
//             {orders.map((order) => (
//               <tr key={order._id} className="hover:bg-gray-50 transition">
//                 <td className="px-4 py-2 text-gray-700 font-mono truncate max-w-[100px]">
//                   {order._id.slice(-8).toUpperCase()}
//                 </td>

//                 <td className="px-4 py-2 flex items-center gap-3">
//                   <Image
//                     src={getImageUrl(order.image)}
//                     alt={order.productName}
//                     width={50}
//                     height={50}
//                     className="rounded-md object-cover"
//                   />
//                   <span className="text-gray-700 font-medium">{order.productName}</span>
//                 </td>

//                 <td className="px-4 py-2 text-gray-600">{formatDate(order.date)}</td>
//                 <td className="px-4 py-2 text-gray-600">{order.quantity}</td>
//                 <td className="px-4 py-2 text-gray-600">${order.price.toLocaleString()}</td>

//                 <td className="px-4 py-2">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${
//                       order.status.toLowerCase() === "shipped"
//                         ? "bg-green-100 text-green-700"
//                         : order.status.toLowerCase() === "pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-gray-100 text-gray-600"
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
// import { useRouter } from "next/navigation";

// type Order = {
//   _id: string;
//   productName: string;
//   image?: string;
//   price: number;
//   quantity: number;
//   status: string;
//   date: string;
// };

// export default function OrderHistory() {
//   const router = useRouter();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");
//   const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

//   // For Cloudinary - direct URL
//   const getImageUrl = (img?: string) => {
//     if (!img) return "/placeholder.png";
//     // Cloudinary URL already has http/https
//     return img;
//   };

//   const handleImageError = (orderId: string) => {
//     setImageErrors(prev => ({ ...prev, [orderId]: true }));
//     console.log(`Image failed to load for order: ${orderId}`);
//   };

//   useEffect(() => {
//     const fetchOrders = async () => {
//       const token = localStorage.getItem("token");

//       if (!token) {
//         setError("Please login first.");
//         router.push("/login");
//         return;
//       }

//       try {
//         const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await res.json();

//         if (res.status === 401) {
//           localStorage.removeItem("token");
//           setError("Session expired. Please login again.");
//           router.push("/login");
//           return;
//         }

//         if (data.success && Array.isArray(data.orders)) {
//           console.log("Orders fetched:", data.orders);
//           // Debug: Check if image URLs are coming
//           data.orders.forEach(order => {
//             console.log(`Product: ${order.productName}, Image: ${order.image}`);
//           });
//           setOrders(data.orders);
//         } else {
//           setError(data.message || "Failed to fetch orders.");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Server error. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, [router]);

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "shipped":
//         return "bg-green-100 text-green-700";
//       case "pending":
//         return "bg-yellow-100 text-yellow-700";
//       case "delivered":
//         return "bg-blue-100 text-blue-700";
//       case "cancelled":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-600";
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[400px]">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//           <p className="mt-2 text-gray-500">Loading orders...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
//           <p className="text-red-600">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//             />
//           </svg>
//           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
//           <p className="mt-1 text-sm text-gray-500">
//             You haven't placed any orders yet.
//           </p>
//           <div className="mt-6">
//             <button
//               onClick={() => router.push("/")}
//               className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h1 className="text-2xl font-bold text-gray-900 mb-6">My Orders</h1>

//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           {orders.map((order) => (
//             <li key={order._id} className="hover:bg-gray-50 transition-colors">
//               <div className="px-4 py-4 sm:px-6">
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div className="flex items-center gap-4">
//                     {/* Product Image */}
//                     <div className="flex-shrink-0">
//                       {!imageErrors[order._id] ? (
//                         <Image
//                           src={getImageUrl(order.image)}
//                           alt={order.productName}
//                           width={64}
//                           height={64}
//                           className="rounded-lg object-cover"
//                           onError={() => handleImageError(order._id)}
//                           unoptimized // Add this for external URLs like Cloudinary
//                         />
//                       ) : (
//                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                           <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                           </svg>
//                         </div>
//                       )}
//                     </div>

//                     {/* Product Info */}
//                     <div>
//                       <p className="text-sm font-medium text-indigo-600 truncate">
//                         Order #{order._id.slice(-8).toUpperCase()}
//                       </p>
//                       <p className="mt-1 text-lg font-semibold text-gray-900">
//                         {order.productName}
//                       </p>
//                       <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
//                         <span>Quantity: {order.quantity}</span>
//                         <span>•</span>
//                         <span>Price: ${order.price.toLocaleString()}</span>
//                         <span>•</span>
//                         <span>Total: ${(order.price * order.quantity).toLocaleString()}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Status and Date */}
//                   <div className="text-right">
//                     <span
//                       className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
//                         order.status
//                       )}`}
//                     >
//                       {order.status}
//                     </span>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {formatDate(order.date)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }










// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// type Order = {
//   _id: string;
//   productName: string;
//   image?: string;
//   price: number;
//   quantity: number;
//   status: string;
//   date: string;
// };

// export default function OrderHistory() {
//   const router = useRouter();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");

//   // Fetch orders function (can be called again for refresh)
//   const fetchOrders = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("Please login first.");
//       router.push("/login");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (res.status === 401) {
//         localStorage.removeItem("token");
//         setError("Session expired. Please login again.");
//         router.push("/login");
//         return;
//       }

//       if (data.success && Array.isArray(data.orders)) {
//         setOrders(data.orders);
//       } else {
//         setError(data.message || "Failed to fetch orders.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();

//     // Optional: Auto-refresh every 30 seconds to get latest status
//     const interval = setInterval(() => {
//       if (localStorage.getItem("token")) {
//         fetchOrders();
//       }
//     }, 30000);

//     return () => clearInterval(interval);
//   }, [router]);

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//     });
//   };

//   // Status style matching admin panel
//   const getStatusStyle = (status: string) => {
//     const s = status?.toLowerCase() || "";
//     if (s === "success") return "bg-green-100 text-green-800 border border-green-200";
//     if (s === "reject") return "bg-red-100 text-red-800 border border-red-200";
//     return "bg-yellow-100 text-yellow-800 border border-yellow-200";
//   };

//   // Status display text
//   const getStatusText = (status: string) => {
//     const s = status?.toLowerCase() || "";
//     if (s === "success") return "✅ Success";
//     if (s === "reject") return "❌ Rejected";
//     return "⏳ Pending";
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-[400px]">
//         <div className="text-center">
//           <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//           <p className="mt-2 text-gray-500">Loading orders...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
//           <p className="text-red-600">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-3 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
//           <svg
//             className="mx-auto h-12 w-12 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
//             />
//           </svg>
//           <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
//           <p className="mt-1 text-sm text-gray-500">
//             You haven't placed any orders yet.
//           </p>
//           <div className="mt-6">
//             <button
//               onClick={() => router.push("/")}
//               className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
//         <button
//           onClick={fetchOrders}
//           className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
//         >
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//           </svg>
//           Refresh Status
//         </button>
//       </div>

//       <div className="bg-white shadow overflow-hidden sm:rounded-md">
//         <ul className="divide-y divide-gray-200">
//           {orders.map((order) => (
//             <li key={order._id} className="hover:bg-gray-50 transition-colors">
//               <div className="px-4 py-4 sm:px-6">
//                 <div className="flex items-center justify-between flex-wrap gap-4">
//                   <div className="flex items-center gap-4">
//                     {/* Product Image */}
//                     <div className="flex-shrink-0">
//                       {order.image ? (
//                         <div className="relative w-16 h-16">
//                           <Image
//                             src={order.image}
//                             alt={order.productName}
//                             fill
//                             className="rounded-lg object-cover"
//                             unoptimized
//                             onError={(e) => {
//                               const target = e.target as HTMLImageElement;
//                               target.style.display = 'none';
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                           <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                           </svg>
//                         </div>
//                       )}
//                     </div>

//                     {/* Product Info */}
//                     <div>
//                       <p className="text-sm font-medium text-indigo-600 truncate">
//                         Order #{order._id.slice(-8).toUpperCase()}
//                       </p>
//                       <p className="mt-1 text-lg font-semibold text-gray-900">
//                         {order.productName}
//                       </p>
//                       <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
//                         <span>Quantity: {order.quantity}</span>
//                         <span>•</span>
//                         <span>Price: ${order.price.toLocaleString()}</span>
//                         <span>•</span>
//                         <span>Total: ${(order.price * order.quantity).toLocaleString()}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Status and Date */}
//                   <div className="text-right">
//                     <span
//                       className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle(order.status)}`}
//                     >
//                       {getStatusText(order.status)}
//                     </span>
//                     <p className="mt-1 text-sm text-gray-500">
//                       {formatDate(order.date)}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }








// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { FiPackage, FiRefreshCw, FiClock, FiCheckCircle, FiXCircle, FiAlertCircle } from "react-icons/fi";

// type Order = {
//   _id: string;
//   productName: string;
//   image?: string;
//   price: number;
//   quantity: number;
//   status: string;
//   date: string;
// };

// export default function OrderHistory() {
//   const router = useRouter();
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");
//   const [refreshing, setRefreshing] = useState(false);

//   const fetchOrders = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       setError("Please login first.");
//       router.push("/login");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:5000/api/orders/my-orders", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       if (res.status === 401) {
//         localStorage.removeItem("token");
//         setError("Session expired. Please login again.");
//         router.push("/login");
//         return;
//       }

//       if (data.success && Array.isArray(data.orders)) {
//         setOrders(data.orders);
//       } else {
//         setError(data.message || "Failed to fetch orders.");
//       }
//     } catch (err) {
//       console.error(err);
//       setError("Server error. Please try again.");
//     } finally {
//       setLoading(false);
//       setRefreshing(false);
//     }
//   };

//   const handleRefresh = async () => {
//     setRefreshing(true);
//     await fetchOrders();
//   };

//   useEffect(() => {
//     fetchOrders();
//     const interval = setInterval(() => {
//       if (localStorage.getItem("token")) {
//         fetchOrders();
//       }
//     }, 30000);
//     return () => clearInterval(interval);
//   }, [router]);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const getStatusConfig = (status: string) => {
//     const s = status?.toLowerCase() || "";
//     if (s === "success") {
//       return {
//         label: "Delivered",
//         color: "bg-emerald-50 text-emerald-700 border-emerald-200",
//         icon: FiCheckCircle,
//       };
//     }
//     if (s === "reject") {
//       return {
//         label: "Cancelled",
//         color: "bg-rose-50 text-rose-700 border-rose-200",
//         icon: FiXCircle,
//       };
//     }
//     return {
//       label: "Processing",
//       color: "bg-amber-50 text-amber-700 border-amber-200",
//       icon: FiClock,
//     };
//   };

//   if (loading) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center">
//         <div className="relative">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#09162c]"></div>
//           <FiPackage className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#09162c] w-6 h-6" />
//         </div>
//         <p className="mt-4 font-medium">Loading Your Orders History..</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-2xl mx-auto px-4 py-16">
//         <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
//           <FiAlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
//           <p className="text-red-800 font-medium mb-4">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 font-medium"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (orders.length === 0) {
//     return (
//       <div className="max-w-2xl mx-auto px-4 py-16">
//         <div className="bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-12 text-center">
//           <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//             <FiPackage className="w-12 h-12 text-gray-400" />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
//           <p className="text-gray-500 mb-6">Looks like you haven't placed any orders.</p>
//           <button
//             onClick={() => router.push("/")}
//             className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
//           >
//             Start Shopping
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
//             Order History
//           </h1>
//           <p className="text-gray-500 mt-1">View and track all your orders</p>
//         </div>
//         <button
//           onClick={handleRefresh}
//           disabled={refreshing}
//           className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
//         >
//           <FiRefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
//           {refreshing ? "Refreshing..." : "Refresh"}
//         </button>
//       </div>

//       {/* Orders List */}
//       <div className="space-y-4">
//         {orders.map((order) => {
//           const statusConfig = getStatusConfig(order.status);
//           const StatusIcon = statusConfig.icon;
//           const totalAmount = order.price * order.quantity;

//           return (
//             <div
//               key={order._id}
//               className="bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
//                   {/* Left Section - Order ID & Image */}
//                   <div className="flex items-center gap-5 min-w-[200px]">
//                     <div className="flex-shrink-0">
//                       {order.image ? (
//                         <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
//                           <Image
//                             src={order.image}
//                             alt={order.productName}
//                             fill
//                             className="object-cover"
//                             unoptimized
//                             onError={(e) => {
//                               const target = e.target as HTMLImageElement;
//                               target.style.display = "none";
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
//                           <FiPackage className="w-8 h-8 text-gray-400" />
//                         </div>
//                       )}
//                     </div>
//                     <div>
//                       <p className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded-md inline-block">
//                         #{order._id.slice(-8).toUpperCase()}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Middle Section - Product Info */}
//                   <div className="flex-1">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                       {order.productName}
//                     </h3>
//                     <div className="flex flex-wrap items-center gap-3 text-sm">
//                       <span className="text-gray-600">Qty: {order.quantity}</span>
//                       <span className="text-gray-300">•</span>
//                       <span className="text-gray-600">
//                         ${order.price.toLocaleString()} each
//                       </span>
//                       <span className="text-gray-300">•</span>
//                       <span className="font-medium text-gray-900">
//                         Total: ${totalAmount.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Right Section - Status & Date */}
//                   <div className="flex flex-col items-end gap-2 min-w-[160px]">
//                     <span
//                       className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-full border ${statusConfig.color}`}
//                     >
//                       <StatusIcon className="w-4 h-4" />
//                       {statusConfig.label}
//                     </span>
//                     <div className="flex items-center gap-1 text-sm text-gray-500">
//                       <FiClock className="w-3.5 h-3.5" />
//                       <span>{formatDate(order.date)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Footer Stats */}
//       <div className="mt-8 pt-6 border-t border-gray-200">
//         <p className="text-sm text-gray-500 text-center">
//           Total Orders: <span className="font-semibold text-gray-700">{orders.length}</span>
//         </p>
//       </div>
//     </div>
//   );
// }
















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
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Order History
          </h1>
          <p className="text-gray-500 mt-1">View and track all your orders</p>
          
          {/* Refresh Button - Centered below heading */}
          <div className="mt-4">
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <FiRefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {/* Orders List - Simple Table Style */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Order ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Quantity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Total</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => {
                  const statusConfig = getStatusConfig(order.status);
                  const StatusIcon = statusConfig.icon;
                  const totalAmount = order.price * order.quantity;

                  return (
                    <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                      {/* Product with Image */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {order.image ? (
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
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
                          <span className="font-semibold text-gray-900 text-base">{order.productName}</span>
                        </div>
                       </td>

                      {/* Order ID */}
                      <td className="px-6 py-4">
                        <span className="text-sm font-mono text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
                          #{order._id.slice(-8).toUpperCase()}
                        </span>
                       </td>

                      {/* Quantity */}
                      <td className="px-6 py-4 text-gray-700 font-medium text-base">{order.quantity}</td>

                      {/* Price */}
                      <td className="px-6 py-4 text-gray-700 text-base">${order.price.toLocaleString()}</td>

                      {/* Total */}
                      <td className="px-6 py-4 font-bold text-gray-900 text-base">${totalAmount.toLocaleString()}</td>

                      {/* Status - Larger Badge */}
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full ${statusConfig.bgColor} ${statusConfig.textColor}`}>
                          <StatusIcon className="w-4 h-4" />
                          {statusConfig.label}
                        </span>
                       </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-gray-500 text-sm">{formatDate(order.date)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Total Orders: <span className="font-semibold text-gray-700">{orders.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}