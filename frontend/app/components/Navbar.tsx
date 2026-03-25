// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import CartDrawer from "../cart/cartdrawer"
// import { useCart } from "../context/cartcontext";
// import { useWishlist } from "../context/wishlistcontext"; 
// import { BsCart3 } from "react-icons/bs";
// import { GoHeart } from "react-icons/go";

// export default function Navbar() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const { cartItems } = useCart();
//   const { wishlistItems } = useWishlist();
//   const [cartOpen, setCartOpen] = useState(false);

//   return (
//     <nav className="w-full flex items-center px-16 py-6 relative">
//       {isHome && (
//         <div className="absolute inset-0 flex -z-10">
//           <div className="w-1/2 bg-[#09162c]"></div>
//           <div className="w-1/2 bg-white"></div>
//         </div>
//       )}
//       <h1
//         className={`text-5xl tracking-tight allura ${
//           isHome ? "text-white" : "text-[#09162c]"
//         }`}>
//         LuxeTick
//       </h1>

//       {/* Links */}
//       <div
//         className={`flex items-center gap-8 font-medium poppins ml-auto ${
//           isHome ? "text-black" : "text-[#09162c]"
//         }`}>
//         <Link
//           href="/"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current 
//           after:transition-all after:duration-300 hover:after:w-full">
//           HOME
//         </Link>
//         <Link
//           href="/products"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current
//            after:transition-all after:duration-300 hover:after:w-full">
//           PRODUCTS
//         </Link>
//         <Link
//           href="/contact"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-[2px] 
//           after:bg-current after:transition-all after:duration-300 hover:after:w-full">
//           CONTACT
//         </Link>

//         {/* Wishlist Icon */}
//         <Link href="/wishlist" className="relative cursor-pointer">
//           <GoHeart className="text-3xl" />
//           {wishlistItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
//               {wishlistItems.length}
//             </span>
//           )}
//         </Link>

//         {/* Cart Icon */}
//         <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
//           <BsCart3 className="text-3xl" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
//               {cartItems.length}
//             </span>
//           )}
//         </div>

//         {/* Sign Up Button */}
//         <Link href="/signup">
//           <button
//             className={`px-6 py-2 border transition cursor-pointer ${
//               isHome
//                 ? "border-black bg-black text-white hover:bg-white hover:text-black"
//                 : "border-[#09162c] bg-[#09162c] text-white hover:bg-white hover:text-[#09162c]"
//             }`}>
//             SIGN UP
//           </button>
//         </Link>
//       </div>

//       {/* Cart Drawer */}
//       <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
//     </nav>
//   );
// }



"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CartDrawer from "../(site)/cart/cartdrawer";
import { useCart } from "../(site)/context/cartcontext";
import { useWishlist } from "../(site)/context/wishlistcontext";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [cartOpen, setCartOpen] = useState(false);

  // --- User state ---
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    // Check localStorage on page load
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
        <Link href="/" className="relative hover:underline">HOME</Link>
        <Link href="/products" className="relative hover:underline">PRODUCTS</Link>
        <Link href="/contact" className="relative hover:underline">CONTACT</Link>

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

        {/* Signup / User Profile */}
        {user ? (
          <div className="relative">
            <FaUserCircle
              className="text-3xl cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-lg p-4 z-50 text-sm">
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-500 mb-2">{user.email}</p>
                <hr className="my-2" />
                <Link href="/orders" className="block px-2 py-1 hover:bg-gray-100 rounded">
                  Order History
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-2 py-1 mt-2 hover:bg-gray-100 rounded">
                  Logout
                </button>
              </div>
            )}
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