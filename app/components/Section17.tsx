"use client";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      {/* Import fonts directly */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
        `}
      </style>

      <div className="max-w-9xl mx-auto px-6 py-12 relative">

        {/* Top Text */}
        <div className="flex items-center gap-6">
          <h1 className="text-[110px] leading-[0.9] flex items-center font-extralight ml-24">
            Express
            <span className="text-orange-500 mx-4"> — </span>
            <span style={{ fontFamily: "'Allura', cursive" }}>Yourself</span>
          </h1>
        </div>

        {/* Bottom Text with Center Paragraph */}
        <div className="flex items-center justify-between mt-6 w-full max-w-5xl mx-auto">
          {/* Left */}
          <h1 className="text-[120px] font-extralight leading-none ml-[-20px]" style={{ fontFamily: "'Allura', cursive" }}>
            Through
          </h1>

          {/* Center Paragraph */}
          <p
            className="text-center max-w-sm text-base leading-relaxed font-extralight line-clamp-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
            Explore our stylish shoes and accessories quality, comfort and trend all in one place
          </p>

          {/* Right */}
          <h1 className="text-[120px] font-extralight leading-none mr-[-20px]">
            Style<span className="text-orange-500">.</span>
          </h1>
        </div>

        {/* Bottom Image Section */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src="/Home.PNG" // Replace with your image path
              alt="Stylish Shoes"
            //   className="w-full h-full object-cover rounded-[120px]"
            width={1000}
            height={800}
            />
          </div>
        </div>

      </div>
    </section>
  );
}