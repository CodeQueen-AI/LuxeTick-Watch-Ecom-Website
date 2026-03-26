'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch('http://localhost:5000/api/products/add', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Product added successfully!');
        router.push('/admin/products');
      } else {
        alert('Failed to add product');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-zinc-200 p-10">
      <h2 className="text-3xl font-semibold mb-8">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Product Name</label>
          <input name="name" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea name="description" required rows={4} className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Price (₹)</label>
            <input name="price" type="number" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Stock</label>
            <input name="stock" type="number" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Discount (%)</label>
            <input name="discount" type="number" defaultValue={0} className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Product Image</label>
          <input name="image" type="file" accept="image/*" required className="w-full border border-zinc-300 rounded-2xl px-5 py-4" />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-medium text-lg disabled:opacity-50"
        >
          {loading ? 'Adding Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
}