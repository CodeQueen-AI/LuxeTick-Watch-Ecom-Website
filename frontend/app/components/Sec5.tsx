"use client";
export default function sec() {
  return (
    <section className="w-full overflow-hidden poppins">
      <div className="max-w-9xl mx-auto px-6 py-12 relative">
        <div className="flex items-center gap-6">
          <h1 className="text-[110px] leading-[0.9] flex items-center font-extralight ml-24">
            Express
            <span className="text-orange-500 mx-4"> — </span>
            <span className="allura">Yourself</span>
          </h1>
        </div>
        <div className="flex items-center justify-between mt-6 w-full max-w-5xl mx-auto">
          <h1 className="text-[120px] font-extralight leading-none ml-[-20px] allura">
            Through
          </h1>
          <p
            className="text-center max-w-sm text-base leading-relaxed font-extralight line-clamp-3">
            Explore our stylish shoes and accessories quality, comfort and trend all in one place
          </p>
          <h1 className="text-[120px] font-extralight leading-none mr-[-20px]">
            Style<span className="text-orange-500">.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}