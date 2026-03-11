// "use client";

// import Image from "next/image";
// import Link from "next/link";

// const products = [
//   { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg" },
//   { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg" },
//   { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg" },
//   { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg" },
//   { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg" },
//   { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg" },
//   { id: 7, name: "Gold Bracelet", price: "$380", img: "/products/p7.jpg" },
//   { id: 8, name: "Brown Leather", price: "$220", img: "/products/p8.jpg" },
// ];
// export default function ProductsPage() {
//   return (
//     <section className="w-full min-h-screen px-16 py-12 poppins">
//       <h1 className="text-7xl font-extralight mb-10 text-center allura">
//         Our Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-start border border-gray-300 p-4 transition">
            
//             {/* Image */}
//             <div className="w-full h-60 relative mb-4">
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 fill
//                 className="object-contain"/>
//             </div>

//             {/* Name */}
//             <h2 className="text-xl font-medium mb-2">{product.name}</h2>

//             {/* Button + Price */}
//             <div className="flex items-center justify-between w-full mt-auto">
//               <Link
//                 href={`/products/${product.id}`}
//                 className="px-4 py-1 border border-black bg-black text-white hover:bg-white hover:text-black transition cursor-pointer text-sm"
//               >
//                 View
//               </Link>
//               <span className="font-medium font-serif text-3xl">{product.price}</span>
//             </div>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }







"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "Black Leather", price: "$250", img: "/products/p1.jpg" },
  { id: 2, name: "Rose Gold", price: "$350", img: "/products/p2.jpg" },
  { id: 3, name: "White Dial", price: "$200", img: "/products/p3.jpg" },
  { id: 4, name: "Silver Chrono", price: "$450", img: "/products/p4.jpg" },
  { id: 5, name: "Rose Slim", price: "$350", img: "/products/p5.jpg" },
  { id: 6, name: "Black Steel", price: "$450", img: "/products/p6.jpg" },
];

export default function ProductsPage() {
  return (
    <section className="flex w-full min-h-screen p-10">

      {/* Sidebar */}
      <div className="w-1/4 pr-8 border-r border-gray-300">

        <h2 className="text-2xl font-semibold mb-6">Filter</h2>

        {/* Category */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Category</h3>
          <select className="border p-2 w-full">
            <option>All Watches</option>
            <option>Luxury</option>
            <option>Classic</option>
            <option>Sport</option>
          </select>
        </div>

        {/* Price */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3">Price</h3>

          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="border p-2 w-1/2"
            />

            <input
              type="number"
              placeholder="Max"
              className="border p-2 w-1/2"
            />
          </div>
        </div>

        {/* Sort */}
        <div>
          <h3 className="font-semibold mb-3">Sort By</h3>

          <select className="border p-2 w-full">
            <option>Default</option>
            <option>Price Low → High</option>
            <option>Price High → Low</option>
          </select>
        </div>
      </div>

      {/* Products */}
      <div className="w-3/4 pl-10">

        <div className="grid grid-cols-3 gap-8">

          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>

              <div className="border p-4 cursor-pointer hover:shadow-lg transition">

                <div className="relative h-60 w-full">
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-xl mt-4 font-semibold">
                  {product.name}
                </h3>

                <p className="text-gray-600">{product.price}</p>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}