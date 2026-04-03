// import Image from "next/image";
// export default function ProductShowcase() {
//   const products = [
//     "/watch/w12.jpg",
//     "/watch/w13.jpg",
//     "/watch/w14.jpg",
//     "/watch/w15.jpg",
//     "/watch/w16.jpg",
//   ];
//   return (
//     <div className="max-w-7xl mx-auto p-6 space-y-6">
//       <div className="p-6 text-center">
//         <h1 className="text-5xl md:text-6xl allura">
//           Discover the Beauty of Timeless Luxury Watches
//         </h1>
//       </div>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {products.map((img, i) => (
//           <div
//             key={i}
//             className="relative w-full aspect-[4/3] overflow-hidden">
//             <Image
//               src={img}
//               alt="product"
//               fill
//               className="object-cover"/>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }









"use client";
import Image from "next/image";

export default function ProductShowcase() {
  const products = [
    "/watch/w12.jpg",
    "/watch/w13.jpg",
    "/watch/w14.jpg",
    "/watch/w15.jpg",
    "/watch/w16.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      
      {/* Heading */}
      <div className="p-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl allura leading-snug">
          Discover the Beauty of Timeless Luxury Watches
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
        {products.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-[4/3] overflow-hidden">
            <Image
              src={img}
              alt="product"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}