// import Image from "next/image";

// export default function RacingSection() {
//   return (
//     <section className="w-full poppins">
//       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
//         <div className="flex flex-col justify-center px-12 lg:px-20">
//           <h2 className="text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
//             INSPIRED BY  <br />
//             <span className="allura text-7xl font-normal">Racing's Golden</span> <br/>
//             ERA
//           </h2>
//           <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
//             Inspired by motorsports golden era the new American Classic
//             Chronograph H brings tactile mechanics and bold color together in
//             one dynamic reference
//           </p>
//           <button className="mt-8 w-40 border border-gray-400 font-semibold py-3 text-sm tracking-wider hover:bg-black hover:text-white transition cursor-pointer">
//             DISCOVER
//           </button>
//         </div>
//         <div className="relative h-[500px] lg:h-auto">
//           <Image
//             src="/Imges/Img7.webp"
//             alt="watch"
//             fill
//             className="object-cover"/>
//         </div>
//       </div>
//     </section>
//   );
// }











import Image from "next/image";

export default function RacingSection() {
  return (
    <section className="w-full poppins py-10 md:py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[500px] gap-6">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 text-center lg:text-left">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-snug md:leading-tight text-gray-900">
            INSPIRED BY
            <span className="allura text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-normal block leading-tight">
              Racing's Golden 
            </span>
            ERA
          </h2>
          
          <p className="mt-4 md:mt-6 text-gray-600 max-w-md md:max-w-lg mx-auto lg:mx-0 text-sm sm:text-base md:text-base leading-relaxed">
            Inspired by motorsports golden era, the new American Classic
            Chronograph H brings tactile mechanics and bold color together in
            one dynamic reference
          </p>
          
          <button className="mt-6 md:mt-8 w-36 md:w-40 border border-gray-400 font-semibold py-2 md:py-3 text-sm md:text-base tracking-wider hover:bg-black hover:text-white transition cursor-pointer mx-auto lg:mx-0">
            DISCOVER
          </button>
        </div>
        
        {/* Image Section */}
        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-auto w-full">
          <Image
            src="/Imges/Img7.webp"
            alt="watch"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}