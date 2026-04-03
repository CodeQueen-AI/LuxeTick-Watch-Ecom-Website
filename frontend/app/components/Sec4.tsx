// import Image from "next/image";
// export default function DiscoverSection() {
//   const items = [
//     { title: "MEN", img: "/Discover/D1.avif" },
//     { title: "WOMEN", img: "/Discover/D2.avif" },
//     { title: "JAZZMASTER", img: "/Discover/D3.avif" },
//     { title: "AUTOMATIC", img: "/Discover/D4.avif" },
//     { title: "KHAKKI NAVY", img: "/Discover/D5.webp" },
//     { title: "PILOT", img: "/Discover/D6.avif" },
//   ];

//   return (
//     <section className="py-16 poppins">
//       <h2 className="text-center text-4xl tracking-[0.3em] mb-12 font-serif">
//         DISCOVER
//       </h2>
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//         {items.map((item, index) => (
//           <div key={index} className="relative h-[350px] overflow-hidden group cursor-pointer">
//             <Image
//               src={item.img}
//               alt={item.title}
//               fill
//               className="object-cover group-hover:scale-110 transition duration-500"/>
//             <div className="absolute inset-0 bg-black/15"></div>
//             <div className="absolute bottom-6 left-0 right-0 text-center">
//               <h3 className="text-white font-semibold tracking-widest text-lg">
//                 {item.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }





import Image from "next/image";

export default function DiscoverSection() {
  const items = [
    { title: "MEN", img: "/Discover/D1.avif" },
    { title: "WOMEN", img: "/Discover/D2.avif" },
    { title: "JAZZMASTER", img: "/Discover/D3.avif" },
    { title: "AUTOMATIC", img: "/Discover/D4.avif" },
    { title: "KHAKKI NAVY", img: "/Discover/D5.webp" },
    { title: "PILOT", img: "/Discover/D6.avif" },
  ];

  return (
    <section className="py-10 md:py-16 poppins">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 font-serif">
        DISCOVER
      </h2>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
        
        {items.map((item, index) => (
          <div
            key={index}
            className="
              relative 
              h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px]
              overflow-hidden 
              group 
              cursor-pointer
            "
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

            {/* Title */}
            <div className="absolute bottom-3 md:bottom-6 left-0 right-0 text-center px-2">
              <h3 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-widest">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}