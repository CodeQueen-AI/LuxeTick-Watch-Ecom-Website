"use client";
import { useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Delete product function
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        alert("Product deleted successfully!");
        setProducts(products.filter((p) => p._id !== id));
      } else {
        const data = await res.json();
        alert(data.message || "Failed to delete product");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h2 className="text-5xl font-extralight font-serif text-center mb-6">All Products</h2>

      {loading && <p>Loading products...</p>}

      {!loading && products.length === 0 && (
        <p className="text-gray-400">No products found</p>
      )}

      {!loading && products.length > 0 && (
        <div className="overflow-x-auto text-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-4 px-3">Image</th>
                <th className="py-4 px-3">Name</th>
                <th className="py-4 px-3">Category</th>
                <th className="py-4 px-3">Price</th>
                <th className="py-4 px-3">Stock</th>
                <th className="py-4 px-3">Discount</th>
                <th className="py-4 px-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr
                  key={p._id}
                  className="border-b border-gray-300">
                  <td className="py-3 px-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-14 h-14 object-cover"/>
                  </td>
                  <td className="py-3 px-3 capitalize">{p.name}</td>
                  <td className="py-3 px-3">{p.category || "—"}</td>
                  <td className="py-3 px-3">${p.price}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        p.stock > 30
                          ? "bg-red-500/20 text-red-600"
                          : "bg-green-500/20 text-green-700"}`}>
                      {p.stock}
                    </span>
                  </td>
                  <td className="py-3 px-3">
                    <span
                      className={"px-3 py-1 text-xs rounded-full"}>
                      {p.discount !== undefined && p.discount !== null
                        ? `${p.discount}%`
                        : "—"}
                    </span>
                  </td>
                  <td className="py-3 px-3 flex gap-3 justify-center">
                    <button
                      onClick={() => alert("Edit product: " + p._id)}
                      className="cursor-pointer text-2xl">
                      <CiEdit className="text-blue-700" />
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="cursor-pointer text-xl">
                      <FiTrash2 className="text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}