// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AddProductPage() {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     try {
//       const res = await fetch('http://localhost:5000/api/products/add', {
//         method: 'POST',
//         body: formData,
//       });

//       if (res.ok) {
//         alert('Product added successfully!');
//         router.push('/admin/products');
//       } else {
//         alert('Failed to add product');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('Something went wrong');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-zinc-200 p-10">
//       <h2 className="text-3xl font-semibold mb-8">Add New Product</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label className="block text-sm font-medium mb-2">Product Name</label>
//           <input name="name" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Description</label>
//           <textarea name="description" required rows={4} className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//         </div>

//         <div className="grid grid-cols-3 gap-6">
//           <div>
//             <label className="block text-sm font-medium mb-2">Price (₹)</label>
//             <input name="price" type="number" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Stock</label>
//             <input name="stock" type="number" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-2">Discount (%)</label>
//             <input name="discount" type="number" defaultValue={0} className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-2">Product Image</label>
//           <input name="image" type="file" accept="image/*" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
//         </div>

//         <button 
//           type="submit" 
//           disabled={loading}
//           className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-medium text-lg disabled:opacity-50"
//         >
//           {loading ? 'Adding Product...' : 'Add Product'}
//         </button>
//       </form>
//     </div>
//   );
// }








'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Product added successfully!");
        router.push("/admin/products");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to add product");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-zinc-200 p-10">
      <h2 className="text-3xl font-semibold mb-8">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label>Product Name</label>
          <input name="name" required className="w-full border rounded-2xl px-5 py-4" />
        </div>

        <div>
          <label>Description</label>
          <textarea name="description" required rows={4} className="w-full border rounded-2xl px-5 py-4" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <input name="price" type="number" placeholder="Price" required />
          <input name="stock" type="number" placeholder="Stock" required />
          <input name="discount" type="number" placeholder="Discount %" defaultValue={0} />
        </div>

        <div>
          <label>
            <input type="checkbox" name="newArrival" /> New Arrival
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <input name="brand" placeholder="Brand Name" />
          <input name="color" placeholder="Color" />
          <input name="strap" placeholder="Strap" />
          <input name="category" placeholder="Category" />
          <select name="gender">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div>
          <label>Product Image</label>
          <input name="image" type="file" accept="image/*" required />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}