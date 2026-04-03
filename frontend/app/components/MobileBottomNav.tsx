// // "use client";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import { BsCart3 } from "react-icons/bs";
// // import { GoHeart } from "react-icons/go";
// // import { FaRegUser } from "react-icons/fa";
// // import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";
// // import { LuMessageSquareText } from "react-icons/lu";

// // export default function MobileBottomNav() {
// //   const pathname = usePathname();
// //   const [user, setUser] = useState<any>(null);
// //   const [profileOpen, setProfileOpen] = useState(false);

// //   useEffect(() => {
// //     const storedUser =
// //       typeof window !== "undefined" && localStorage.getItem("user");
// //     if (storedUser) setUser(JSON.parse(storedUser));
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem("user");
// //     localStorage.removeItem("token");
// //     setUser(null);
// //     setProfileOpen(false);
// //   };

// //   const navItems = [
// //     { href: "/", icon: <AiOutlineHome /> },
// //     { href: "/products", icon: <AiOutlineProduct /> },
// //     { href: "/contact", icon: <LuMessageSquareText /> },
// //     { href: "/wishlist", icon: <GoHeart /> },
// //     { href: "/cart", icon: <BsCart3 /> },
// //   ];

// //   return (
// //     <>
// //       {/* 🌙 Bottom Nav */}
// //       <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
// //         <div className="flex items-center gap-5 px-5 py-3 
// //         bg-[#09162c]/95 backdrop-blur-md 
// //         rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10">

// //           {navItems.map((item, i) => {
// //             // ✅ FIX: Only 1 active at a time
// //             const isActive = !profileOpen && pathname === item.href;

// //             return (
// //               <Link key={i} href={item.href}>
// //                 <div
// //                   className={`text-xl transition-all duration-300 cursor-pointer
// //                   ${
// //                     isActive
// //                       ? "bg-white text-[#09162c] p-3 rounded-full scale-110 shadow-md"
// //                       : "text-white"
// //                   }`}
// //                 >
// //                   {item.icon}
// //                 </div>
// //               </Link>
// //             );
// //           })}

// //           {/* 👤 User */}
// //           {user && (
// //             <div onClick={() => setProfileOpen(!profileOpen)}>
// //               <div
// //                 className={`text-xl transition-all duration-300 cursor-pointer
// //                 ${
// //                   profileOpen
// //                     ? "bg-white text-[#09162c] p-3 rounded-full scale-110 shadow-md"
// //                     : "text-white"
// //                 }`}
// //               >
// //                 <FaRegUser />
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* 💎 Profile Popup */}
// //       {user && profileOpen && (
// //         <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 md:hidden">
// //           <div className="w-64  p-4 text-sm 
// //           bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

// //             <p className="font-semibold text-[#09162c] text-base">
// //               {user.name}
// //             </p>
// //             <p className="text-xs text-gray-500 mb-3">
// //               {user.email}
// //             </p>

// //             <hr className="my-2 border-gray-200" />

// //             <Link
// //               href="/ordershistory"
// //               onClick={() => setProfileOpen(false)}
// //               className="block px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
// //             >
// //               Order History
// //             </Link>

// //             <button
// //               onClick={handleLogout}
// //               className="w-full text-left px-3 py-2 mt-1 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
// //             >
// //               🚪 Logout
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }







"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineProduct } from "react-icons/ai";
import { LuMessageSquareText } from "react-icons/lu";

import { useCart } from "../(site)/context/cartcontext";
import { useWishlist } from "../(site)/context/wishlistcontext";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  useEffect(() => {
    const storedUser =
      typeof window !== "undefined" && localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setProfileOpen(false);
  };

  const navItems = [
    { href: "/", icon: <AiOutlineHome />, badge: 0 },
    { href: "/products", icon: <AiOutlineProduct />, badge: 0 },
    { href: "/contact", icon: <LuMessageSquareText />, badge: 0 },
    { href: "/wishlist", icon: <GoHeart />, badge: wishlistItems.length },
    { href: "/cart", icon: <BsCart3 />, badge: cartItems.length },
  ];

  return (
    <>
      {/* 🌙 Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
  <div className="flex items-center  px-2 py-2 
    bg-[#09162c]/95 backdrop-blur-md 
    rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/10
    max-w-[98%]">

          {navItems.map((item, i) => {
            const isActive = !profileOpen && pathname === item.href;

            return (
              <Link key={i} href={item.href}>
                <div className="relative">
                  <div
                    className={`text-lg transition-all duration-300 cursor-pointer 
                      ${isActive
                        ? "bg-white text-[#09162c] p-3 rounded-full scale-110 shadow-md"
                        : "text-white p-3 rounded-full hover:bg-white hover:text-[#09162c]"
                      }`}
                  >
                    {item.icon}
                  </div>

                  {/* Badge */}
                  {item.badge > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}

          {/* 👤 User */}
          {user && (
            <div onClick={() => setProfileOpen(!profileOpen)}>
              <div
                className={`text-lg transition-all duration-300 cursor-pointer
                  ${profileOpen
                    ? "bg-white text-[#09162c] p-3 rounded-full scale-110 shadow-md"
                    : "text-white p-3 rounded-full hover:bg-white hover:text-[#09162c]"
                  }`}
              >
                <FaRegUser />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 💎 Profile Popup */}
      {user && profileOpen && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <div className="w-64 p-4 text-sm bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-lg">

            <p className="font-semibold text-[#09162c] text-base">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              {user.email}
            </p>

            <hr className="my-2 border-gray-200" />

            <Link
              href="/ordershistory"
              onClick={() => setProfileOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              Order History
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 mt-1 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}













