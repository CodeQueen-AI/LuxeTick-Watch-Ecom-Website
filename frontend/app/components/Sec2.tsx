// "use client";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="w-full min-h-screen flex overflow-hidden">
//       <div className="w-1/2 relative">
//         <Image
//           src="/Imges/Img5.avif"
//           alt="watch"
//           fill
//           className="object-cover"/>
//       </div>
//       <div className="w-1/2 flex items-center">
//         <div className="max-w-md mx-auto poppins">
//           <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
//             THE <span className="allura text-6xl font-normal">Watch</span> THAT
//             <br />
//             DEFIED TIME
//           </h1>
//           <p className="mt-6 text-gray-600 text-lg">
//             Explore the legend of the Hamilton Murph, an iconic watch whose story
//             blends cinematic emotion with timeless craftsmanship
//           </p>
//           <button className="mt-8 px-8 py-3 border border-gray-400 text-gray-800 hover:bg-black hover:text-white font-semibold transition cursor-pointer">
//             DISCOVER
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
        <Image
          src="/Imges/Img5.avif"
          alt="watch"
          fill
          className="object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center">
        <div className="max-w-md mx-auto p-6 md:p-0 poppins">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-snug md:leading-tight">
            THE <span className="allura text-4xl sm:text-5xl md:text-6xl font-normal">Watch</span> THAT
            <br />
            DEFIED TIME
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg">
            Explore the legend of the Hamilton Murph, an iconic watch whose story
            blends cinematic emotion with timeless craftsmanship
          </p>
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 border border-gray-400 text-gray-800 hover:bg-black hover:text-white font-semibold transition cursor-pointer">
            DISCOVER
          </button>
        </div>
      </div>
    </section>
  );
}