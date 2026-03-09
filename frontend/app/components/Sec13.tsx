"use client";
export default function WatchOffer() {
  return (
    <section
      className="poppins w-full h-[65vh] flex items-center justify-center bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: "url('/watch/w19.jpg')" }}>
      <div className="text-center">
        <h2 className="text-[#e8cfa8] text-5xl font-semibold">
          50% Off
        </h2>
        <h3 className="text-white text-3xl mt-3 font-medium">
          Special Collection
        </h3>
        <button className="mt-6 px-8 py-4 bg-[#e8cfa8] text-white text-lg hover:scale-110 transition duration-500">
          Shop Now
        </button>
      </div>
    </section>
  );
}