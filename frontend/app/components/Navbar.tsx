"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CartDrawer from "../(site)/cart/cartdrawer";
import { useCart } from "../(site)/context/cartcontext";
import { useWishlist } from "../(site)/context/wishlistcontext";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [cartOpen, setCartOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const storedUser = typeof window !== "undefined" && localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setProfileOpen(false);
  };

  return (
    <nav className="w-full flex items-center px-16 py-6 relative">
      {isHome && (
        <div className="absolute inset-0 flex -z-10">
          <div className="w-1/2 bg-[#09162c]"></div>
          <div className="w-1/2 bg-white"></div>
        </div>
      )}
      <h1 className={`text-5xl tracking-tight allura ${isHome ? "text-white" : "text-[#09162c]"}`}>
        LuxeTick
      </h1>

      <div className={`flex items-center gap-8 font-medium poppins ml-auto ${isHome ? "text-black" : "text-[#09162c]"}`}>
        {/* Links with smooth underline */}
        {["/", "/products", "/contact"].map((href, i) => {
          const text = ["HOME", "PRODUCTS", "CONTACT"][i];
          return (
            <Link
              key={href}
              href={href}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
                         after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              {text}
            </Link>
          );
        })}
        {/* Wishlist */}
        <Link href="/wishlist" className="relative cursor-pointer">
          <GoHeart className="text-3xl" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
              {wishlistItems.length}
            </span>
          )}
        </Link>
        {/* Cart */}
        <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
          <BsCart3 className="text-3xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
              {cartItems.length}
            </span>
          )}
        </div>
        {/* User Profile / Sign Up */}
        {user ? (
        <div className="relative"
          onMouseEnter={() => setProfileOpen(true)}
          onMouseLeave={() => setProfileOpen(false)}>
          {/* User Icon */}
          <FaRegUser className="text-2xl cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"/>
          {/* Dropdown Menu */}
          <div className={`absolute right-0 mt-3 w-60 bg-white border border-gray-200 rounded-lg shadow-lg 
          p-4 z-50 text-sm transform transition-all duration-300 ease-out origin-top
        ${profileOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            <div className="absolute -top-2 right-5 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"></div>
            {/* User Info */}
            <p className="font-semibold text-gray-800">
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
            <p className="text-gray-500 text-xs mb-3">{user.email}</p>
            <hr className="my-2 border-gray-200" />
            {/* Menu Links */}
            <Link
              href="/ordershistory"
              className="block px-3 py-2 rounded hover:bg-gray-100 transition-colors">
              Order History
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 mt-1 rounded hover:bg-gray-100 transition-colors cursor-pointer">
              Logout
            </button>
          </div>
        </div>
        ) : (
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
        )}
      </div>
      <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
    </nav>
  );
}