// "use client";
// export default function sec() {
//   return (
//     <section className="w-full overflow-hidden poppins">
//       <div className="max-w-9xl mx-auto px-6 py-12 relative">
//         <div className="flex items-center gap-6">
//           <h1 className="text-[110px] leading-[0.9] flex items-center ml-24 font-serif">
//             Express
//             <span className="text-orange-500 mx-4"> — </span>
//             <span className="allura">Yourself</span>
//           </h1>
//         </div>
//         <div className="flex items-center justify-between mt-6 w-full max-w-5xl mx-auto">
//           <h1 className="text-[120px] font-extralight leading-none ml-[-20px] allura">
//             Through
//           </h1>
//           <p
//             className="text-center max-w-sm text-base leading-relaxed font-extralight line-clamp-3">
//             Explore our stylish watch and luxury quality, comfort and trend all in one place
//           </p>
//           <h1 className="text-[120px] font-serif leading-none mr-[-20px]">
//             Style<span className="text-orange-500">.</span>
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }
































"use client";

export default function Sec() {
  return (
    <section className="w-full overflow-hidden poppins">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 relative">
        
        {/* Express Yourself */}
        <div className="flex justify-center md:justify-start">
          <h1 className="
            text-4xl sm:text-5xl md:text-[110px]
            leading-tight md:leading-[0.9]
            font-serif
            text-center md:text-left
            md:ml-24
          ">
            Express
            <span className="text-orange-500 mx-2 md:mx-4"> — </span>
            <span className="allura">Yourself</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="
          mt-8 md:mt-6
          flex flex-col md:flex-row
          items-center md:items-center
          justify-center md:justify-between
          gap-6 md:gap-0
          w-full max-w-5xl mx-auto
        ">

          {/* Through */}
          <h1 className="
            text-6xl sm:text-7xl md:text-[120px]
            font-extralight leading-none allura
            order-1 md:order-none
          ">
            Through
          </h1>

          {/* Paragraph */}
          <p className="
            text-center
            max-w-xs md:max-w-sm
            text-sm md:text-base
            leading-relaxed
            font-extralight
            order-2 md:order-none
          ">
            Explore our stylish watch and luxury quality, comfort and trend all in one place
          </p>

          {/* Style */}
          <h1 className="
            text-6xl sm:text-7xl md:text-[120px]
            font-serif leading-none
            order-3 md:order-none
          ">
            Style<span className="text-orange-500">.</span>
          </h1>

        </div>
      </div>
    </section>
  );
}






