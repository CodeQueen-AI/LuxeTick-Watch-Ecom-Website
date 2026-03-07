"use client";

import Image from "next/image";

export default function WatchAboutPage() {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Full Image */}
      <div className="w-full relative h-[80vh] md:h-[90vh] lg:h-[100vh]">
        <Image
          src="/about.webp" 
          alt="Watch Image"
          fill
          className="object-cover"
        />
      </div>

      {/* About Text */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-gray-800">
          This watch represents the perfect combination of style and precision. 
          Its sleek and modern design makes it suitable for any occasion, whether 
          formal or casual. Crafted from high-quality materials with exceptional 
          attention to detail, it ensures durability and long-lasting performance. 
          The watch not only keeps accurate time but also enhances your overall 
          look, adding a touch of elegance and sophistication to your outfit. 
          Its timeless design, advanced features, and luxurious finish make it 
          a must-have accessory for anyone who values both fashion and functionality. 
          Owning this watch is not just about telling time; it’s about making a 
          statement and embracing a lifestyle of refinement and quality.
        </p>
      </section>
    </div>
  );
}