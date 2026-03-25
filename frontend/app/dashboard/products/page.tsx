export default function ProductsPage() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 89.99, stock: 45 },
    { id: 2, name: "Smart Watch Pro", price: 199.99, stock: 23 },
    { id: 3, name: "USB-C Hub 7-in-1", price: 34.99, stock: 112 },
    { id: 4, name: "Mechanical Keyboard", price: 129.99, stock: 18 },
  ];

  return (
    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">All Products</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-2xl transition">
          + Add New Product
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700 text-gray-400">
            <th className="text-left py-4">Product Name</th>
            <th className="text-left py-4">Price</th>
            <th className="text-left py-4">Stock</th>
            <th className="text-right py-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-800/50">
              <td className="py-5">{product.name}</td>
              <td className="py-5">${product.price}</td>
              <td className="py-5">
                <span className={`px-4 py-1 rounded-full text-xs ${product.stock > 30 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {product.stock} in stock
                </span>
              </td>
              <td className="py-5 text-right">
                <button className="text-indigo-400 hover:text-indigo-500">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}