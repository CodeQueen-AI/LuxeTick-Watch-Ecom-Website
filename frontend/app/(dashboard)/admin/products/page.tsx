// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";
// import { CiEdit } from "react-icons/ci";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Delete product function
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this product?")) return;

//     try {
//       const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//         method: "DELETE",
//       });

//       if (res.ok) {
//         alert("Product deleted successfully!");
//         setProducts(products.filter((p) => p._id !== id));
//       } else {
//         const data = await res.json();
//         alert(data.message || "Failed to delete product");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-5xl font-extralight font-serif text-center mb-6">All Products</h2>

//       {loading && <p>Loading products...</p>}

//       {!loading && products.length === 0 && (
//         <p className="text-gray-400">No products found</p>
//       )}

//       {!loading && products.length > 0 && (
//         <div className="overflow-x-auto text-sm">
//           <table className="w-full text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-4 px-3">Image</th>
//                 <th className="py-4 px-3">Name</th>
//                 <th className="py-4 px-3">Category</th>
//                 <th className="py-4 px-3">Price</th>
//                 <th className="py-4 px-3">Stock</th>
//                 <th className="py-4 px-3">Discount</th>
//                 <th className="py-4 px-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((p) => (
//                 <tr
//                   key={p._id}
//                   className="border-b border-gray-300">
//                   <td className="py-3 px-3">
//                     <img
//                       src={p.image}
//                       alt={p.name}
//                       className="w-14 h-14 object-cover"/>
//                   </td>
//                   <td className="py-3 px-3 capitalize">{p.name}</td>
//                   <td className="py-3 px-3">{p.category || "—"}</td>
//                   <td className="py-3 px-3">${p.price}</td>
//                   <td className="py-3 px-3">
//                     <span
//                       className={`px-3 py-1 text-xs rounded-full ${
//                         p.stock > 30
//                           ? "bg-red-500/20 text-red-600"
//                           : "bg-green-500/20 text-green-700"}`}>
//                       {p.stock}
//                     </span>
//                   </td>
//                   <td className="py-3 px-3">
//                     <span
//                       className={"px-3 py-1 text-xs rounded-full"}>
//                       {p.discount !== undefined && p.discount !== null
//                         ? `${p.discount}%`
//                         : "—"}
//                     </span>
//                   </td>
//                   {/* <td className="py-3 px-3 flex gap-3 justify-center">
//                     <button
//                       onClick={() => alert("Edit product: " + p._id)}
//                       className="cursor-pointer text-2xl">
//                       <CiEdit className="text-blue-700" />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(p._id)}
//                       className="cursor-pointer text-xl">
//                       <FiTrash2 className="text-red-500" />
//                     </button>
//                   </td> */}
//                   <td className="py-3 px-3">
//   <div className="flex items-center justify-center gap-2">
    
//     {/* EDIT */}
//     <button
//       onClick={() => alert("Edit product: " + p._id)}
//       className="p-2 rounded-md bg-blue-100 transition cursor-pointer"
//     >
//       <CiEdit className="text-blue-600 text-xl" />
//     </button>

//     {/* DELETE */}
//     <button
//       onClick={() => handleDelete(p._id)}
//       className="p-2 rounded-md bg-red-100 transition cursor-pointer"
//     >
//       <FiTrash2 className="text-red-600 text-base" />
//     </button>

//   </div>
// </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }










// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2, FiUpload } from "react-icons/fi";
// import { CiEdit } from "react-icons/ci";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [editProduct, setEditProduct] = useState<any>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // DELETE PRODUCT
//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this product?")) return;

//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       setProducts(products.filter((p) => p._id !== id));
//     }
//   };

//   // EDIT CLICK
//   const handleEdit = (p: any) => {
//     setEditProduct(p);
//     setPreview(p.image);
//     setDrawerOpen(true);
//   };

//   // IMAGE PREVIEW
//   const handleImageChange = (e: any) => {
//     const file = e.target.files[0];
//     if (file) setPreview(URL.createObjectURL(file));
//   };

//   // UPDATE PRODUCT
//   const handleUpdate = async (e: any) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const res = await fetch(
//       `http://localhost:5000/api/products/${editProduct._id}`,
//       {
//         method: "PUT",
//         body: formData,
//       }
//     );

//     if (res.ok) {
//       const data = await res.json();

//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === editProduct._id ? data.product : p
//         )
//       );

//       setDrawerOpen(false);
//     } else {
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-5xl font-extralight font-serif text-center mb-6">
//         All Products
//       </h2>

//       {loading && <p className="text-center">Loading products...</p>}

//       {!loading && products.length === 0 && (
//         <p className="text-gray-400 text-center">No products found</p>
//       )}

//       {!loading && products.length > 0 && (
//         <div className="overflow-x-auto text-sm  bg-white">
//           <table className="w-full text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-4 px-3">Image</th>
//                 <th className="py-4 px-3">Name</th>
//                 <th className="py-4 px-3">Category</th>
//                 <th className="py-4 px-3">Price</th>
//                 <th className="py-4 px-3">Stock</th>
//                 <th className="py-4 px-3">Discount</th>
//                 <th className="py-4 px-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="py-3 px-3">
//                     <img
//                       src={p.image}
//                       className="w-14 h-14 object-cover"
//                     />
//                   </td>
//                   <td className="py-3 px-3 capitalize">{p.name}</td>
//                   <td className="py-3 px-3">{p.category || "—"}</td>
//                   <td className="py-3 px-3">${p.price}</td>
//                   <td className="py-3 px-3">
//                     <span
//                       className={`px-3 py-1 text-xs rounded-full ${
//                         p.stock > 30
//                           ? "bg-red-500/20 text-red-600"
//                           : "bg-green-500/20 text-green-700"
//                       }`}
//                     >
//                       {p.stock}
//                     </span>
//                   </td>
//                   <td className="py-3 px-3">{p.discount ? `${p.discount}%` : "—"}</td>
//                   <td className="py-3 px-3">
//                     <div className="flex justify-center gap-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="p-2 bg-blue-100 rounded-md hover:bg-blue-200 cursor-pointer"
//                       >
//                         <CiEdit className="text-blue-600 text-2xl" />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         className="p-2 bg-red-100 rounded-md hover:bg-red-200 cursor-pointer"
//                       >
//                         <FiTrash2 className="text-red-600"/>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* 🔥 SMOOTH SLIDING SIDE DRAWER */}
//       <div className="fixed inset-0 z-50 flex pointer-events-none">
//         {/* Overlay */}
//         <div
//           className={`flex-1 bg-black/30 transition-opacity duration-300 ${
//             drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
//           }`}
//           onClick={() => setDrawerOpen(false)}
//         />

//         {/* Drawer */}
//         <div
//           className={`w-[420px] bg-white h-full shadow-xl transform transition-transform duration-300 ${
//             drawerOpen ? "translate-x-0" : "translate-x-full"
//           } flex flex-col pointer-events-auto`}
//         >
//           <div className="p-6 flex-1 overflow-y-auto">
//             <h2 className="text-2xl mb-6 font-serif font-extralight text-center pb-3">
//               Edit Product
//             </h2>

//             <form onSubmit={handleUpdate} className="space-y-4">

//               {/* All text fields */}
//               {[
//                 { label: "Name", type: "text", name: "name", value: editProduct?.name },
//                 { label: "Description", type: "textarea", name: "description", value: editProduct?.description },
//                 { label: "Price", type: "number", name: "price", value: editProduct?.price },
//                 { label: "Stock", type: "number", name: "stock", value: editProduct?.stock },
//                 { label: "Discount (%)", type: "number", name: "discount", value: editProduct?.discount },
//                 { label: "Brand", type: "text", name: "brand", value: editProduct?.brand },
//                 { label: "Category", type: "text", name: "category", value: editProduct?.category },
//                 { label: "Color", type: "text", name: "color", value: editProduct?.color },
//                 { label: "Strap", type: "text", name: "strap", value: editProduct?.strap },
//               ].map((field) => (
//                 <div key={field.name} className="flex flex-col gap-1">
//                   <label className="font-medium">{field.label}</label>
//                   {field.type === "textarea" ? (
//                     <textarea name={field.name} defaultValue={field.value} className="w-full border border-gray-300 p-2"/>
//                   ) : (
//                     <input type={field.type} name={field.name} defaultValue={field.value} className="w-full border border-gray-300 p-2"/>
//                   )}
//                 </div>
//               ))}

//               {/* Gender */}
//               <div className="flex flex-col gap-1">
//                 <label className="font-medium">Gender</label>
//                 <select name="gender" defaultValue={editProduct?.gender} className="w-full border p-2 border-gray-300">
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>


//               {/* Image Upload */}
//               <label className="flex items-center gap-2 border border-gray-300 p-2 cursor-pointer mt-2">
//                 <FiUpload />
//                 Upload Image
//                 <input type="file" name="image" hidden onChange={handleImageChange}/>
//               </label>

//               {preview && (
//                 <img src={preview} className="w-32 h-32 object-cover mt-2" />
//               )}

//               {/* Buttons */}
//               <div className="flex gap-3 mt-4">
//                 <button type="button" onClick={() => setDrawerOpen(false)} className="flex-1 bg-gray-200 py-2  hover:bg-gray-300 cursor-pointer">
//                   Cancel
//                 </button>
//                 <button type="submit" className="flex-1 bg-[#09162c] text-white py-2 hover:bg-[#0c1a30] cursor-pointer">
//                   Update
//                 </button>
//               </div>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2, FiUpload } from "react-icons/fi";
// import { CiEdit } from "react-icons/ci";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [editProduct, setEditProduct] = useState<any>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // DELETE PRODUCT
//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this product?")) return;

//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       setProducts(products.filter((p) => p._id !== id));
//     }
//   };

//   // 🔥 TOGGLE NEW ARRIVAL
//   // const toggleNewArrival = async (product: any) => {
//   //   try {
//   //     const res = await fetch(
//   //       `http://localhost:5000/api/products/${product._id}`,
//   //       {
//   //         method: "PUT",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           newArrival: !product.newArrival,
//   //         }),
//   //       }
//   //     );

//   //     if (res.ok) {
//   //       const data = await res.json();

//   //       setProducts((prev) =>
//   //         prev.map((p) =>
//   //           p._id === product._id ? data.product : p
//   //         )
//   //       );
//   //     }
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };

//   const toggleNewArrival = async (product: any) => {
//   try {
//     const res = await fetch(`http://localhost:5000/api/products/${product._id}/toggle-new`, {
//       method: "PUT",
//     });

//     if (res.ok) {
//       const data = await res.json();
//       setProducts((prev) =>
//         prev.map((p) => (p._id === product._id ? data.product : p))
//       );
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };
//   // EDIT CLICK
//   const handleEdit = (p: any) => {
//     setEditProduct(p);
//     setPreview(p.image);
//     setDrawerOpen(true);
//   };

//   // IMAGE PREVIEW
//   const handleImageChange = (e: any) => {
//     const file = e.target.files[0];
//     if (file) setPreview(URL.createObjectURL(file));
//   };

//   // UPDATE PRODUCT
//   const handleUpdate = async (e: any) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const res = await fetch(
//       `http://localhost:5000/api/products/${editProduct._id}`,
//       {
//         method: "PUT",
//         body: formData,
//       }
//     );

//     if (res.ok) {
//       const data = await res.json();

//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === editProduct._id ? data.product : p
//         )
//       );

//       setDrawerOpen(false);
//     } else {
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-5xl text-center mb-6">All Products</h2>

//       {loading && <p className="text-center">Loading products...</p>}

//       {!loading && products.length > 0 && (
//         <div className="overflow-x-auto bg-white">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-3">Image</th>
//                 <th className="py-3 px-3">Name</th>
//                 <th className="py-3 px-3">Category</th>
//                 <th className="py-3 px-3">Price</th>
//                 <th className="py-3 px-3">Stock</th>
//                 <th className="py-3 px-3">Discount</th>

//                 {/* 🔥 NEW COLUMN */}
//                 <th className="py-3 px-3 text-center">New Arrival</th>

//                 <th className="py-3 px-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-3">
//                     <img src={p.image} className="w-14 h-14 object-cover" />
//                   </td>

//                   <td className="py-3 px-3 capitalize">{p.name}</td>
//                   <td className="py-3 px-3">{p.category || "—"}</td>
//                   <td className="py-3 px-3">${p.price}</td>

//                   <td className="py-3 px-3">
//                     <span className="px-2 py-1 text-xs rounded-full bg-gray-200">
//                       {p.stock}
//                     </span>
//                   </td>

//                   <td className="py-3 px-3">
//                     {p.discount ? `${p.discount}%` : "—"}
//                   </td>

//                   {/* 🔥 NEW ARRIVAL TAG */}
//                   <td className="py-3 px-3 text-center">
//                     {/* <span
//                       onClick={() => toggleNewArrival(p)}
//                       className={`px-2 py-0.5 text-[10px] rounded-full cursor-pointer border transition ${
//                         p.newArrival
//                           ? "bg-green-100 text-green-700 border-green-300"
//                           : "bg-gray-100 text-gray-500 border-gray-300"
//                       }`}
//                     >
//                       NEW
//                     </span> */}
//                     <span
//   onClick={() => toggleNewArrival(p)}
//   className={`px-2 py-0.5 text-[10px] rounded-full cursor-pointer border transition-all duration-300 ${
//     p.newArrival
//       ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
//       : "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
//   }`}
// >
//   NEW
// </span>
//                   </td>

//                   {/* ACTIONS */}
//                   <td className="py-3 px-3">
//                     <div className="flex justify-center gap-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="p-2 bg-blue-100 rounded-md"
//                       >
//                         <CiEdit className="text-blue-600 text-xl" />
//                       </button>

//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         className="p-2 bg-red-100 rounded-md"
//                       >
//                         <FiTrash2 className="text-red-600" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }















// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";
// import { CiEdit } from "react-icons/ci";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [editProduct, setEditProduct] = useState<any>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // DELETE PRODUCT
//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this product?")) return;
//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: "DELETE",
//     });
//     if (res.ok) setProducts(products.filter((p) => p._id !== id));
//   };

//   // TOGGLE NEW ARRIVAL
//   const toggleNewArrival = async (product: any) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/products/${product._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ newArrival: !product.newArrival }),
//         }
//       );
//       if (res.ok) {
//         const data = await res.json();
//         setProducts((prev) =>
//           prev.map((p) => (p._id === product._id ? data.product : p))
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // EDIT CLICK
//   const handleEdit = (p: any) => {
//     setEditProduct(p);
//     setPreview(p.image);
//     setDrawerOpen(true);
//   };

//   // IMAGE PREVIEW
//   const handleImageChange = (e: any) => {
//     const file = e.target.files[0];
//     if (file) setPreview(URL.createObjectURL(file));
//   };

//   // UPDATE PRODUCT
//   const handleUpdate = async (e: any) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const res = await fetch(
//       `http://localhost:5000/api/products/${editProduct._id}`,
//       {
//         method: "PUT",
//         body: formData,
//       }
//     );
//     if (res.ok) {
//       const data = await res.json();
//       setProducts((prev) =>
//         prev.map((p) => (p._id === editProduct._id ? data.product : p))
//       );
//       setDrawerOpen(false);
//     } else {
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-5xl text-center font-serif font-extralight mb-6">All Products</h2>

//       {loading && <p className="text-center">Loading products...</p>}

//       {!loading && products.length > 0 && (
//         <div className="overflow-x-auto bg-white">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-3">Image</th>
//                 <th className="py-3 px-3">Name</th>
//                 <th className="py-3 px-3">Category</th>
//                 <th className="py-3 px-3">Price</th>
//                 <th className="py-3 px-3">Stock</th>
//                 <th className="py-3 px-3">Discount</th>
//                 <th className="py-3 px-3 text-center">New Arrival</th>
//                 <th className="py-3 px-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="border-b hover:bg-gray-50">
//                   <td className="py-3 px-3">
//                     <img src={p.image} className="w-14 h-14 object-cover" />
//                   </td>
//                   <td className="py-3 px-3 capitalize">{p.name}</td>
//                   <td className="py-3 px-3">{p.category || "—"}</td>
//                   <td className="py-3 px-3">${p.price}</td>
//                   <td className="py-3 px-3">
//                     <span className="px-2 py-1 text-xs rounded-full bg-gray-200">
//                       {p.stock}
//                     </span>
//                   </td>
//                   <td className="py-3 px-3">{p.discount ? `${p.discount}%` : "—"}</td>
//                   <td className="py-3 px-3 text-center">
//                     <span
//                       onClick={() => toggleNewArrival(p)}
//                       className={`px-2 py-0.5 text-[10px] rounded-full cursor-pointer border transition-all duration-300 ${
//                         p.newArrival
//                           ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
//                           : "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
//                       }`}
//                     >
//                       NEW
//                     </span>
//                   </td>
//                   <td className="py-3 px-3">
//                     <div className="flex justify-center gap-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="p-2 bg-blue-100 rounded-md"
//                       >
//                         <CiEdit className="text-blue-600 text-xl" />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         className="p-2 bg-red-100 rounded-md"
//                       >
//                         <FiTrash2 className="text-red-600" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* SIDE DRAWER */}
//       {drawerOpen && (
//         <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
//           <div className="w-96 bg-white h-full p-6 overflow-y-auto shadow-lg relative">
//             <button
//               onClick={() => setDrawerOpen(false)}
//               className="absolute top-4 right-4 text-gray-600 text-xl font-bold"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

//             <form onSubmit={handleUpdate} className="space-y-4">
//               <div>
//                 <label className="block mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   defaultValue={editProduct.name}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   defaultValue={editProduct.description}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   defaultValue={editProduct.price}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Stock</label>
//                 <input
//                   type="number"
//                   name="stock"
//                   defaultValue={editProduct.stock}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Discount (%)</label>
//                 <input
//                   type="number"
//                   name="discount"
//                   defaultValue={editProduct.discount}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   defaultValue={editProduct.category}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Brand</label>
//                 <input
//                   type="text"
//                   name="brand"
//                   defaultValue={editProduct.brand}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Color</label>
//                 <input
//                   type="text"
//                   name="color"
//                   defaultValue={editProduct.color}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Strap</label>
//                 <input
//                   type="text"
//                   name="strap"
//                   defaultValue={editProduct.strap}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="inline-flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name="newArrival"
//                     defaultChecked={editProduct.newArrival}
//                     className="form-checkbox"
//                   />
//                   New Arrival
//                 </label>
//               </div>

//               <div>
//                 <label className="block mb-1">Image</label>
//                 {preview && (
//                   <img
//                     src={preview}
//                     className="w-32 h-32 object-cover mb-2"
//                     alt="Preview"
//                   />
//                 )}
//                 <input type="file" name="image" onChange={handleImageChange} />
//               </div>

//               <div className="flex justify-between gap-2">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-blue-600 text-white py-2 rounded"
//                 >
//                   Update Product
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setDrawerOpen(false)}
//                   className="flex-1 bg-gray-300 text-gray-700 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

































// "use client";
// import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";
// import { CiEdit } from "react-icons/ci";

// export default function ProductsPage() {
//   const [products, setProducts] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [editProduct, setEditProduct] = useState<any>(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);

//   // FETCH PRODUCTS
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/products");
//         const data = await res.json();
//         setProducts(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // DELETE PRODUCT
//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this product?")) return;
//     const res = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: "DELETE",
//     });
//     if (res.ok) setProducts(products.filter((p) => p._id !== id));
//   };

//   // TOGGLE NEW ARRIVAL
//   const toggleNewArrival = async (product: any) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/products/${product._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ newArrival: !product.newArrival }),
//         }
//       );
//       if (res.ok) {
//         const data = await res.json();
//         setProducts((prev) =>
//           prev.map((p) => (p._id === product._id ? data.product : p))
//         );
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // EDIT CLICK
//   const handleEdit = (p: any) => {
//     setEditProduct(p);
//     setPreview(p.image);
//     setDrawerOpen(true);
//   };

//   // IMAGE PREVIEW
//   const handleImageChange = (e: any) => {
//     const file = e.target.files[0];
//     if (file) setPreview(URL.createObjectURL(file));
//   };

//   // UPDATE PRODUCT
//   const handleUpdate = async (e: any) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const res = await fetch(
//       `http://localhost:5000/api/products/${editProduct._id}`,
//       {
//         method: "PUT",
//         body: formData,
//       }
//     );
//     if (res.ok) {
//       const data = await res.json();
//       setProducts((prev) =>
//         prev.map((p) => (p._id === editProduct._id ? data.product : p))
//       );
//       setDrawerOpen(false);
//     } else {
//       alert("Update failed");
//     }
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h2 className="text-5xl text-center font-serif font-extralight mb-6">
//         All Products
//       </h2>

//       {loading && <p className="text-center">Loading products...</p>}

//       {!loading && products.length > 0 && (
//         <div className="overflow-x-auto bg-white">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="py-3 px-3">Image</th>
//                 <th className="py-3 px-3">Name</th>
//                 <th className="py-3 px-3">Category</th>
//                 <th className="py-3 px-3">Price</th>
//                 <th className="py-3 px-3">Stock</th>
//                 <th className="py-3 px-3">Discount</th>
//                 <th className="py-3 px-3 text-center">New Arrival</th>
//                 <th className="py-3 px-3 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {products.map((p) => (
//                 <tr key={p._id} className="border-b border-gray-200 hover:bg-gray-50">
//                   <td className="py-3 px-3">
//                     <img src={p.image} className="w-14 h-14 object-cover" />
//                   </td>
//                   <td className="py-3 px-3 capitalize">{p.name}</td>
//                   <td className="py-3 px-3">{p.category || "—"}</td>
//                   <td className="py-3 px-3">${p.price}</td>

//                   {/* Color-coded stock */}
//                   <td className="py-3 px-3 text-right">
//                     <span
//                       className={`px-2 py-1 text-xs rounded-full font-semibold ${
//                         p.stock > 50
//                           ? "bg-green-200 text-green-800"
//                           : p.stock >= 20
//                           ? "bg-yellow-200 text-yellow-800"
//                           : "bg-red-200 text-red-800"
//                       }`}
//                     >
//                       {p.stock}
//                     </span>
//                   </td>

//                   <td className="py-3 px-3">{p.discount ? `${p.discount}%` : "—"}</td>

//                   <td className="py-3 px-3 text-center">
//                     <span
//                       onClick={() => toggleNewArrival(p)}
//                       className={`px-2 py-0.5 text-[10px] rounded-full cursor-pointer border transition-all duration-300 ${
//                         p.newArrival
//                           ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
//                           : "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
//                       }`}
//                     >
//                       NEW
//                     </span>
//                   </td>

//                   <td className="py-3 px-3">
//                     <div className="flex justify-center gap-2">
//                       <button
//                         onClick={() => handleEdit(p)}
//                         className="p-2 bg-blue-100 rounded-md"
//                       >
//                         <CiEdit className="text-blue-600 text-xl" />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(p._id)}
//                         className="p-2 bg-red-100 rounded-md"
//                       >
//                         <FiTrash2 className="text-red-600" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* SIDE DRAWER */}
//       {drawerOpen && (
//         <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
//           <div className="w-96 bg-white h-full p-6 overflow-y-auto shadow-lg relative">
//             <button
//               onClick={() => setDrawerOpen(false)}
//               className="absolute top-4 right-4 text-gray-600 text-xl font-bold"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-4">Edit Product</h2>

//             <form onSubmit={handleUpdate} className="space-y-4">
//               <div>
//                 <label className="block mb-1">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   defaultValue={editProduct.name}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Description</label>
//                 <textarea
//                   name="description"
//                   defaultValue={editProduct.description}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   defaultValue={editProduct.price}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Stock</label>
//                 <input
//                   type="number"
//                   name="stock"
//                   defaultValue={editProduct.stock}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Discount (%)</label>
//                 <input
//                   type="number"
//                   name="discount"
//                   defaultValue={editProduct.discount}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1">Category</label>
//                 <input
//                   type="text"
//                   name="category"
//                   defaultValue={editProduct.category}
//                   className="w-full border px-3 py-2 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="inline-flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name="newArrival"
//                     defaultChecked={editProduct.newArrival}
//                     className="form-checkbox"
//                   />
//                   New Arrival
//                 </label>
//               </div>

//               <div>
//                 <label className="block mb-1">Image</label>
//                 {preview && (
//                   <img
//                     src={preview}
//                     className="w-32 h-32 object-cover mb-2"
//                     alt="Preview"
//                   />
//                 )}
//                 <input type="file" name="image" onChange={handleImageChange} />
//               </div>

//               <div className="flex justify-between gap-2">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-blue-600 text-white py-2 rounded"
//                 >
//                   Update Product
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setDrawerOpen(false)}
//                   className="flex-1 bg-gray-300 text-gray-700 py-2 rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }