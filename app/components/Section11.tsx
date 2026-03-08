import Image from "next/image";
import { Poppins, Allura } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});

export default function WatchSection() {
  return (
    <section className={`py-20 ${poppins.className}`}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <Image
            src="/watch20.jpg"
            alt="watch"
            width={400}
            height={200}
          />
        </div>

        {/* Text */}
        <div className="space-y-6">

          <h1 className="text-5xl font-semibold leading-tight">
            A Watch As <br />
            <span className={`${allura.className} text-6xl`}>
              Unique
            </span>{" "}
            As You
          </h1>

          <p className="text-gray-600 leading-relaxed">
            With more than 10 years experience in the field, Withings
            invents, designs, and new entry manufactures a range of
            award-winning.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Come clinically validated smart health devices and
            associated apps. Withings provides an the comfort of home,
            and can help anyone master long term health goals.
          </p>

          <button className="bg-[#c2a45f] text-white px-8 py-3 tracking-widest text-sm hover:bg-[#a88d4c] transition cursor-pointer">
            SHOP NOW
          </button>
          

        </div>

      </div>
    </section>
  );
}