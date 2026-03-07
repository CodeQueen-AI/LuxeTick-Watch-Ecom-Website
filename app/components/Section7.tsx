"use client";

import { FaTruck } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Features() {
  return (
    <section className="w-full bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto grid grid-cols-4 text-center gap-10 px-6">

        {/* Feature 1 */}
        <div>
          <FaTruck className="text-4xl mx-auto mb-4" />

          <h3 className="text-lg font-semibold">
            Free Shipping
          </h3>

          <p className="text-gray-600 mt-1">
            All over Pakistan
          </p>
        </div>

        {/* Feature 2 */}
        <div>
          <FaTag className="text-4xl mx-auto mb-4" />

          <h3 className="text-lg font-semibold">
            Brand Authenticity
          </h3>

          <p className="text-gray-600 mt-1">
            100% Genuine Products
          </p>
        </div>

        {/* Feature 3 */}
        <div>
          <FaUndo className="text-4xl mx-auto mb-4" />

          <h3 className="text-lg font-semibold">
            Buy Now Pay Later
          </h3>

          <p className="text-gray-600 mt-1">
            10 month interest free payment options
          </p>
        </div>

        {/* Feature 4 */}
        <div>
          <FaStar className="text-4xl mx-auto mb-4" />

          <h3 className="text-lg font-semibold">
            5 star Google Rating
          </h3>

          <p className="text-gray-600 mt-1">
            1000+ reviews
          </p>
        </div>

      </div>

    </section>
  );
}