// "use client";
// import Image from "next/image";

// export default function WatchSection() {
//   return (
//     <section className="w-full flex h-screen">

//       {/* LEFT IMAGE */}
//       <div className="w-1/2 relative">
//         <Image
//           src="/Img11.webp"
//           alt="Casio Watch"
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* RIGHT IMAGE WITH TEXT */}
//       <div className="w-1/2 relative">

//         <Image
//           src="/Img12.webp"
//           alt="Edifice Watch"
//           fill
//           className="object-cover"
//         />

//         {/* Overlay Text */}
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">

//           <p className="text-lg font-medium">
//             New collection
//           </p>

//           <h1 className="text-6xl font-semibold mt-2">
//             Edifice
//           </h1>

//           <div className="mt-10 border-t border-white w-80"></div>

//           <p className="mt-4 text-lg">
//             Shop new collection
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// }



"use client";
import Image from "next/image";

export default function WatchSection() {
  return (
    <section className="w-full flex h-screen overflow-hidden">

      {/* Google Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

          .poppins{
            font-family:'Poppins', sans-serif;
          }
        `}
      </style>

      {/* LEFT IMAGE */}
      <div className="w-1/2 relative">
        <Image
          src="/Img11.webp"
          alt="watch"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative">

        <Image
          src="/Img12.webp"
          alt="watch"
          fill
          className="object-cover"
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-between text-white poppins">

          {/* TOP TEXT */}
          <div className="text-center pt-5">
            <p className="text-lg">New collection</p>

            <h1 className="text-4xl font-extralight mt-2">
              Edifice
            </h1>
          </div>

          {/* BOTTOM TEXT */}
          {/* <div className="pb-10">

            <div className="border-t border-white w-80 mx-auto mb-20"></div>

            <p className="text-lg">
              Shop new collection
            </p>

          </div> */}

          <div className="pb-10 pt-20">

  <div className="border-t border-white w-[90%] ml-10 mb-4"></div>

  <p className="text-lg ml-10">
    Shop new collection
  </p>

</div>

        </div>

      </div>

    </section>
  );
}