"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CartDrawer from "../cart/cartdrawer"
import { useCart } from "../Context/cartcontext";
import { useWishlist } from "../Context/wishlistcontext"; 
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="w-full flex items-center px-16 py-6 relative">
      {isHome && (
        <div className="absolute inset-0 flex -z-10">
          <div className="w-1/2 bg-[#09162c]"></div>
          <div className="w-1/2 bg-white"></div>
        </div>
      )}
      <h1
        className={`text-5xl tracking-tight allura ${
          isHome ? "text-white" : "text-[#09162c]"
        }`}>
        LuxeTick
      </h1>

      {/* Links */}
      <div
        className={`flex items-center gap-8 font-medium poppins ml-auto ${
          isHome ? "text-black" : "text-[#09162c]"
        }`}>
        <Link
          href="/"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current 
          after:transition-all after:duration-300 hover:after:w-full">
          HOME
        </Link>
        <Link
          href="/products"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
           after:transition-all after:duration-300 hover:after:w-full">
          PRODUCTS
        </Link>
        <Link
          href="/contact"
          className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[2px] 
          after:bg-current after:transition-all after:duration-300 hover:after:w-full">
          CONTACT
        </Link>

        {/* Wishlist Icon */}
        <Link href="/wishlist" className="relative cursor-pointer">
          <GoHeart className="text-3xl" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Cart Icon */}
        <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
          <BsCart3 className="text-3xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
              {cartItems.length}
            </span>
          )}
        </div>

        {/* Sign Up Button */}
        <Link href="/signup">
          <button
            className={`px-6 py-2 border transition cursor-pointer ${
              isHome
                ? "border-black bg-black text-white hover:bg-white hover:text-black"
                : "border-[#09162c] bg-[#09162c] text-white hover:bg-white hover:text-[#09162c]"
            }`}>
            SIGN UP
          </button>
        </Link>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
    </nav>
  );
}