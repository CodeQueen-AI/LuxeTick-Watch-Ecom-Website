// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import CartDrawer from "../(site)/cart/cartdrawer";
// import { useCart } from "../(site)/context/cartcontext";
// import { useWishlist } from "../(site)/context/wishlistcontext";
// import { BsCart3 } from "react-icons/bs";
// import { GoHeart } from "react-icons/go";
// import { FaRegUser } from "react-icons/fa";

// export default function Navbar() {
//   const pathname = usePathname();
//   const isHome = pathname === "/";

//   const { cartItems } = useCart();
//   const { wishlistItems } = useWishlist();

//   const [cartOpen, setCartOpen] = useState(false);
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const storedUser =
//       typeof window !== "undefined" && localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   const totalQuantity = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <nav className="w-full flex items-center px-6 md:px-16 py-6 relative">
//       {isHome && (
//         <div className="absolute inset-0 flex -z-10">
//           <div className="w-1/2 bg-[#09162c]"></div>
//           <div className="w-1/2 bg-white"></div>
//         </div>
//       )}
//       <h1
//         className={`text-3xl md:text-5xl tracking-tight allura ${
//           isHome ? "text-white" : "text-[#09162c]"}`}>
//         LuxeTick
//       </h1>
//       <div
//         className={`hidden md:flex items-center gap-8 font-medium poppins ml-auto ${
//           isHome ? "text-black" : "text-[#09162c]"}`}>
//         <Link href="/" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">HOME</Link>
//         <Link href="/products"  className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">PRODUCTS</Link>
//         <Link href="/contact"  className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">CONTACT</Link>
//         <Link href="/wishlist" className="relative">
//           <GoHeart className="text-3xl" />
//           {wishlistItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {wishlistItems.length}
//             </span>)}
//         </Link>

//         {/* Cart */}
//         <div
//           onClick={() => setCartOpen(true)}
//           className="relative cursor-pointer">
//           <BsCart3 className="text-3xl" />
//           {totalQuantity > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {totalQuantity}
//             </span>
//           )}
//         </div>
//         {user ? (
//           <div className="relative group">
//             {/* Icon */}
//             <FaRegUser className="text-2xl cursor-pointer" />
//            <div className="absolute right-0 mt-3 w-60 bg-white shadow-lg p-4 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                 <p className="font-semibold">{user.name}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>

//           <Link href="/ordershistory" className="block w-full text-left px-2 py-2 rounded hover:bg-gray-100 hover:shadow-sm transition mt-2">
//             Order History
//           </Link>
//           <button onClick={handleLogout} className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 hover:shadow-sm transition mt-1 cursor-pointer">
//             Logout
//           </button>
//         </div>
//           </div>
//         ) : (
//           <Link href="/signup">
//             <button className="px-4 py-2 bg-[#09162c] text-white border border-transparent transition 
//             hover:bg-white hover:text-[#09162c] hover:border-[#09162c] cursor-pointer">
//               SIGN UP
//             </button>
//           </Link>
//         )}
//       </div>
//         <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
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
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const syncUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const freshUser = await res.json();
          localStorage.setItem("user", JSON.stringify(freshUser));
          setUser(freshUser);
        } else {
          const cached = localStorage.getItem("user");
          if (cached) setUser(JSON.parse(cached));
          else setUser(null);
        }
      } catch {
        const cached = localStorage.getItem("user");
        if (cached) setUser(JSON.parse(cached));
      }
    };

    // Run on mount
    syncUser();

    // Listen for localStorage changes from login/signup pages
    // (storage event fires in other tabs; custom event fires in same tab)
    const handleStorageChange = () => syncUser();
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("userAuthChanged", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userAuthChanged", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="w-full flex items-center px-6 md:px-16 py-6 relative">
      {isHome && (
        <div className="absolute inset-0 flex -z-10">
          <div className="w-1/2 bg-[#09162c]"></div>
          <div className="w-1/2 bg-white"></div>
        </div>
      )}

      <h1
        className={`text-3xl md:text-5xl tracking-tight allura ${isHome ? "text-white" : "text-[#09162c]"
          }`}>
        LuxeTick
      </h1>

      <div
        className={`hidden md:flex items-center gap-8 font-medium poppins ml-auto ${isHome ? "text-black" : "text-[#09162c]"
          }`}>

        <Link href="/" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          HOME
        </Link>
        <Link href="/products" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          PRODUCTS
        </Link>
        <Link href="/contact" className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          CONTACT
        </Link>

        {/* Wishlist */}
        <Link href="/wishlist" className="relative">
          <GoHeart className="text-3xl" />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        {/* Cart */}
        <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
          <BsCart3 className="text-3xl" />
          {totalQuantity > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {totalQuantity}
            </span>
          )}
        </div>

        {/* Auth Buttons */}
        {user ? (
          <div className="relative group">
            <FaRegUser className="text-2xl cursor-pointer" />
            <div className="absolute right-0 mt-3 w-60 bg-white shadow-lg p-4 text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>

              <Link href="/ordershistory" className="block w-full text-left px-2 py-2 rounded hover:bg-gray-100 hover:shadow-sm transition mt-2">
                Order History
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-2 py-2 rounded hover:bg-gray-100 hover:shadow-sm transition mt-1 cursor-pointer"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            {/* Sign In Button */}
            <Link href="/signin">
              <button className="px-5 py-2.5 border border-[#09162c] text-[#09162c] font-medium transition-all duration-300 
                     cursor-pointer">
                SIGN IN
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link href="/signup">
              <button className="px-4 py-2 bg-[#09162c] text-white border border-transparent transition hover:bg-white hover:text-[#09162c] hover:border-[#09162c] cursor-pointer">
                SIGN UP
              </button>
            </Link>
          </div>
        )}
      </div>

      <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
    </nav>
  );
}