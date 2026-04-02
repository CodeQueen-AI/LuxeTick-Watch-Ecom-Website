'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiUpload } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // Toast state
  const [toast, setToast] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error">("success");

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast(message);
    setType(type);
    setTimeout(() => setToast(null), 3000); 
  };

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
        showToast("Product Added Successfully!", "success");
        setTimeout(() => router.push("/admin/products"), 1000); // delay navigation for toast
      } else {
        const data = await res.json();
        showToast(data.message || "Failed to add product", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Something went wrong", "error");
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
          <input name="name" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Description</label>
          <textarea name="description" required rows={3} className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
        </div>

        {/* Price | Stock */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Price</label>
            <input name="price" type="number" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Stock</label>
            <input name="stock" type="number" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
        </div>

        {/* Discount | Gender */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Discount %</label>
            <input name="discount" type="number" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Gender</label>
            <select name="gender" required className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm">
              <option value="" disabled hidden>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        {/* Brand | Category */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Brand</label>
            <input name="brand" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Category</label>
            <input name="category" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
        </div>

        {/* Color | Strap */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Color</label>
            <input name="color" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Strap</label>
            <input name="strap" className="w-full border border-gray-300 px-4 pt-3 pb-2 focus:outline-none focus:ring-2 focus:ring-[#09162c] shadow-sm"/>
          </div>
        </div>

        {/* Product Image */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">Product Image</label>
          <label className="flex items-center gap-2 px-4 py-3 border border-gray-300 cursor-pointer hover:bg-gray-100 transition">
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
          {preview && (<img src={preview} alt="Preview" className="w-24 h-24 object-cover mt-2 border"/>)}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-10 py-3 bg-[#09162c] text-white font-semibold shadow hover:bg-[#0e2141] transition disabled:opacity-50 cursor-pointer">
            {loading ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>

      {/* 🔥 Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white border px-5 py-3 z-50">
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