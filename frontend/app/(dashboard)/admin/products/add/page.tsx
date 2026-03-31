'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUpload } from "react-icons/fi";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

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

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-2xl mx-auto mt-1 p-6">
      <h2 className="text-4xl font-serif font-extralight text-center mb-8">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Product Name</label>
          <input name="name" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Enter product name" />
        </div>
        {/* Description */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
          <textarea name="description" required rows={3} className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Enter description" />
        </div>
        {/* Stock & Discount */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Stock</label>
            <input name="stock" type="number" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Stock quantity" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Discount %</label>
            <input name="discount" type="number" defaultValue={0} className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Discount %" />
          </div>
        </div>
        {/* Brand & Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Brand</label>
            <input name="brand" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Brand name" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Category</label>
            <input name="category" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Category" />
          </div>
        </div>
        {/* Color & Strap */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Color</label>
            <input name="color" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Color" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Strap</label>
            <input name="strap" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" placeholder="Strap type" />
          </div>
        </div>
        {/* Gender */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
          <select name="gender" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm">
            <option value="" disabled hidden>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {/* New Arrival */}
        <div className="flex items-center gap-3">
          <input type="checkbox" name="newArrival" id="newArrival" className="w-5 h-5 text-red-700 border-gray-300 rounded focus:ring-2 focus:ring-red-500"/>
          <label htmlFor="newArrival" className="text-gray-700 font-medium">New Arrival</label>
        </div>
        {/* Product Image */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Product Image</label>
          <label className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-100 transition">
            <FiUpload className="text-xl text-gray-500" />
            <span className="text-gray-700">Upload Image</span>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              onChange={handleImageChange}
              className="hidden"/>
          </label>
          {preview && (<img src={preview} alt="Preview" className="w-24 h-24 object-cover rounded-xl mt-2 border"/>)}
        </div>
        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}