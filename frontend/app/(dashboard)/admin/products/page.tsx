"use client";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [editProduct, setEditProduct] = useState<any>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // DELETE PRODUCT
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });
    if (res.ok) setProducts(products.filter((p) => p._id !== id));
  };

  // TOGGLE NEW ARRIVAL
  const toggleNewArrival = async (product: any) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${product._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newArrival: !product.newArrival }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProducts((prev) =>
          prev.map((p) => (p._id === product._id ? data.product : p))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  // EDIT CLICK
  const handleEdit = (p: any) => {
    setEditProduct(p);
    setPreview(p.image);
    setDrawerOpen(true);
  };

  // IMAGE PREVIEW
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // UPDATE PRODUCT
  const handleUpdate = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await fetch(
      `http://localhost:5000/api/products/${editProduct._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    if (res.ok) {
      const data = await res.json();
      setProducts((prev) =>
        prev.map((p) => (p._id === editProduct._id ? data.product : p))
      );
      setDrawerOpen(false);
    } else {
      alert("Update failed");
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-5xl text-center font-serif font-extralight mb-6">
        All Products
      </h2>

      {loading && <p className="text-center">Loading products...</p>}

      {!loading && products.length > 0 && (
        <div className="overflow-x-auto bg-white">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-3">Image</th>
                <th className="py-3 px-3">Name</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Price</th>
                <th className="py-3 px-3 text-center">Stock</th>
                <th className="py-3 px-3 text-center">Discount</th>
                <th className="py-3 px-3 text-center">New Arrival</th>
                <th className="py-3 px-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-3">
                    <img src={p.image} className="w-14 h-14 object-cover" />
                  </td>
                  <td className="py-3 px-3 capitalize">{p.name}</td>
                  <td className="py-3 px-3">{p.category || "—"}</td>
                  <td className="py-3 px-3">${p.price}</td>

                  {/* Centered Stock */}
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        p.stock > 50
                          ? "bg-green-200 text-green-800"
                          : p.stock >= 20
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {p.stock}
                    </span>
                  </td>

                  {/* Centered Discount */}
                  <td className="py-3 px-3 text-center">
                    {p.discount ? `${p.discount}%` : "—"}
                  </td>

                  {/* New Arrival */}
                  <td className="py-3 px-3 text-center">
                    <span
                      onClick={() => toggleNewArrival(p)}
                      className={`px-2 py-0.5 text-[10px] rounded-full cursor-pointer border transition-all duration-300 ${
                        p.newArrival
                          ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
                          : "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
                      }`}
                    >
                      NEW
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="p-2 bg-blue-100 cursor-pointer"
                      >
                        <CiEdit className="text-blue-600 text-xl" />
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="p-2 bg-red-100 cursor-pointer"
                      >
                        <FiTrash2 className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* SIDE DRAWER */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
          drawerOpen ? "bg-black/30" : "bg-transparent pointer-events-none"
        }`}
      >
        <div
          className={`w-96 bg-white h-full p-6 overflow-y-auto shadow-lg relative transform transition-transform duration-300 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-4 right-4 text-gray-600 text-xl font-bold cursor-pointer"
          >
            ✕
          </button>

          <h2 className="text-2xl font-serif font-extralight text-center mb-4">
            Edit Product
          </h2>

          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={editProduct?.name}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                defaultValue={editProduct?.description}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={editProduct?.price}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Stock</label>
              <input
                type="number"
                name="stock"
                defaultValue={editProduct?.stock}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Discount (%)</label>
              <input
                type="number"
                name="discount"
                defaultValue={editProduct?.discount}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1">Category</label>
              <input
                type="text"
                name="category"
                defaultValue={editProduct?.category}
                className="w-full border border-gray-400 px-3 py-2"
              />
            </div>

            <div>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="newArrival"
                  defaultChecked={editProduct?.newArrival}
                  className="form-checkbox"
                />
                New Arrival
              </label>
            </div>

            <div>
              <label className="block mb-1">Image</label>
              {preview && (
                <img
                  src={preview}
                  className="w-32 h-32 object-cover mb-2"
                  alt="Preview"
                />
              )}
              <input type="file" name="image" onChange={handleImageChange} />
            </div>

            <div className="flex justify-between gap-2">
              <button
                type="submit"
                className="flex-1 bg-[#09162c] text-white py-2 cursor-pointer"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex-1 bg-gray-300 text-gray-700 py-2 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}