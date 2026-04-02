// "use client";
// import Image from "next/image";
// import { AiOutlineCheckCircle } from "react-icons/ai";
// import Link from "next/link";

// export default function SeasonCollection() {
//   const products = [
//     {
//       id: 1,
//       name: "Kenneth Cole New York",
//       price: 5000,
//       image: "/watch/w8.webp",
//     },
//     {
//       id: 2,
//       name: "Lee Cooper",
//       price: 4240,
//       image: "/watch/w9.webp",
//     },
//     {
//       id: 3,
//       name: "Edifice",
//       price: 7600,
//       image: "/watch/w10.webp",
//     },
//   ];

//   return (
//     <section className="w-full py-20 relative poppins">
//       <div className="max-w-7xl mx-auto poppins px-6">
//         <h1 className="text-4xl text-center mb-16">
//           <span className="allura text-6xl">Season Collection</span>
//         </h1>
//         <div className="grid grid-cols-3 gap-12">
//           {products.map((item) => (
//             <div key={item.id}>
//               <div className="relative w-full h-[420px]">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-cover cursor-pointer"/>
//               </div>
//               <h2 className="text-2xl mt-6">
//                 {item.name}
//               </h2>
//               <Link href="/products">
//               <button className="mt-6 border border-gray-400 px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer">
//                 Shop Now
//               </button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";
import Link from "next/link";

export default function SeasonCollection() {
  const products = [
    {
      id: 1,
      name: "Kenneth Cole New York",
      price: 5000,
      image: "/watch/w8.webp",
    },
    {
      id: 2,
      name: "Lee Cooper",
      price: 4240,
      image: "/watch/w9.webp",
    },
    {
      id: 3,
      name: "Edifice",
      price: 7600,
      image: "/watch/w10.webp",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h1 className="text-center mb-10 md:mb-16">
          <span className="allura text-4xl sm:text-5xl md:text-6xl">
            Season Collection
          </span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {products.map((item) => (
            <div key={item.id} className="group">

              {/* Image */}
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-6">
                {item.name}
              </h2>

              {/* Button */}
              <Link href="/products">
                <button className="mt-4 md:mt-6 border border-gray-400 px-4 sm:px-6 py-2 text-sm sm:text-base 
                hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                  Shop Now
                </button>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}