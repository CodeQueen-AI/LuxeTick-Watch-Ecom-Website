// import Image from "next/image";
// import Link from "next/link";
// export default function WatchBanner() {
//   return (
//     <section className="relative py-24 overflow-hidden poppins">
//       <div
//         className="absolute inset-0 bg-[#09162c]"
//         style={{clipPath: "polygon(0 20%, 100% 0%, 100% 80%, 0% 100%)"}}></div>
//       <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
//         <div className="text-white">
//           <h1 className="text-6xl font-bextralight mb-6">
//             Quartz{" "}
//             <span className="allura text-7xl">
//               Casio
//             </span>
//           </h1>
//           <p className="mb-3 text-lg text-gray-200">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit
//           </p>
//           <p className="mb-3 text-lg text-gray-200">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit
//           </p>
//           <p className="mb-6 text-gray-300">
//             Voluptate atque soluta illum iste voluptates nam,
//             consequatur qui doloremque delectus ullam quaerat
//             libero ut, nisi praesentium
//           </p>
//           <p className="text-2xl font-serif mb-6">
//             $ 3,899
//           </p>
//           <Link href = "/products">
//           <button className="bg-white px-8 py-4 text-black text-lg hover:bg-white hover:text-black transition cursor-pointer">
//               Order Now
//           </button>
//           </Link>
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/watch/w18.png"
//             width={420}
//             height={420}
//             alt="watch"/>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function WatchBanner() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden poppins">
      
      {/* Background */}
      <div
        className="
          absolute inset-0 bg-[#09162c]
          md:[clip-path:polygon(0_20%,100%_0%,100%_80%,0%_100%)]
        "
      ></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        {/* Text */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl mb-6 leading-tight">
            Quartz{" "}
            <span className="allura text-5xl md:text-7xl">
              Casio
            </span>
          </h1>

          <p className="mb-3 text-base md:text-lg text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>

          <p className="mb-6 text-sm md:text-base text-gray-300">
            Voluptate atque soluta illum iste voluptates nam
          </p>

          <p className="text-xl md:text-2xl mb-6">
            $ 3,899
          </p>

          <Link href="/products">
            <button className="bg-white px-6 md:px-8 py-3 md:py-4 text-black text-base md:text-lg cursor-pointer">
              Order Now
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/watch/w18.png"
            width={420}
            height={420}
            alt="watch"
            className="w-[260px] md:w-[420px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}