// "use client";
// import Link from "next/link";
// export default function WatchOffer() {
//   return (
//     <section
//       className="poppins w-full h-[65vh] flex items-center justify-center bg-fixed bg-center bg-cover relative"
//       style={{ backgroundImage: "url('/watch/w19.jpg')" }}>
//       <div className="text-center">
//         <h2 className="text-[#e8cfa8] text-5xl font-semibold">
//           50% Off
//         </h2>
//         <h3 className="text-white text-3xl mt-3 font-medium">
//           Special Collection
//         </h3>
//         <Link href={"/products"}>
//         <button className="mt-6 px-8 py-4 bg-[#e8cfa8] text-white text-lg hover:scale-110 transition duration-500">
//           Shop Now
//         </button>
//         </Link>
//       </div>
//     </section>
//   );
// }








"use client";
import Link from "next/link";

export default function WatchOffer() {
  return (
    <section
      className="poppins w-full h-[50vh] sm:h-[55vh] md:h-[65vh] flex items-center justify-center bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: "url('/watch/w19.jpg')" }}
    >
      <div className="text-center px-4 sm:px-6">
        <h2 className="text-[#e8cfa8] text-4xl sm:text-5xl md:text-6xl font-semibold">
          50% Off
        </h2>
        <h3 className="text-white text-2xl sm:text-3xl md:text-3xl mt-2 sm:mt-3 font-medium">
          Special Collection
        </h3>
        <Link href={"/products"}>
          <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#e8cfa8] text-white text-base sm:text-lg hover:scale-110 transition duration-500">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}