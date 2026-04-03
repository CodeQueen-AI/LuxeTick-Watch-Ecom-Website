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

//   const [user, setUser] = useState(null);
//   const [profileOpen, setProfileOpen] = useState(false);

//   useEffect(() => {
//     const storedUser = typeof window !== "undefined" && localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     setProfileOpen(false);
//   };

//   return (
//     <nav className="w-full flex items-center px-16 py-6 relative">
//       {isHome && (
//         <div className="absolute inset-0 flex -z-10">
//           <div className="w-1/2 bg-[#09162c]"></div>
//           <div className="w-1/2 bg-white"></div>
//         </div>
//       )}
//       <h1 className={`text-5xl tracking-tight allura ${isHome ? "text-white" : "text-[#09162c]"}`}>
//         LuxeTick
//       </h1>

//       <div className={`flex items-center gap-8 font-medium poppins ml-auto ${isHome ? "text-black" : "text-[#09162c]"}`}>
//         {/* Home Link */}
//         <Link
//           href="/"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
//                      after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
//           HOME
//         </Link>
        
//         {/* Products Link */}
//         <Link
//           href="/products"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
//                      after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
//           PRODUCTS
//         </Link>
        
//         {/* Contact Link */}
//         <Link
//           href="/contact"
//           className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
//                      after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">
//           CONTACT
//         </Link>

//         {/* Wishlist */}
//         <Link href="/wishlist" className="relative cursor-pointer">
//           <GoHeart className="text-3xl" />
//           {wishlistItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
//               {wishlistItems.length}
//             </span>
//           )}
//         </Link>
        
//         {/* Cart */}
//         <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
//           <BsCart3 className="text-3xl" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white font-bold rounded-full text-xs px-2 py-1">
//               {cartItems.length}
//             </span>
//           )}
//         </div>
        
//         {/* User Profile / Sign Up */}
//         {user ? (
//           <div 
//             className="relative"
//             onMouseEnter={() => setProfileOpen(true)}
//             onMouseLeave={() => setProfileOpen(false)}
//           >
//             <FaRegUser className="text-2xl cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"/>
            
//             <div 
//               className={`absolute right-0 pt-2 z-50 transition-all duration-200 ${
//                 profileOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//               style={{ top: "100%" }}
//             >
//               <div className="w-full h-2"></div>
              
//               <div className="w-60 bg-white border border-gray-200 shadow-lg p-4 text-sm">
//                 <div className="absolute -top-2 right-5 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"></div>
                
//                 <p className="font-semibold text-gray-800">
//                   {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
//                 </p>
//                 <p className="text-gray-500 text-xs mb-3">{user.email}</p>
//                 <hr className="my-2 border-gray-200" />
                
//                 <Link
//                   href="/ordershistory"
//                   className="block px-3 py-2 rounded hover:bg-gray-100 transition-colors"
//                   onClick={() => setProfileOpen(false)}
//                 >
//                   Order History
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left px-3 py-2 mt-1 rounded hover:bg-gray-100 transition-colors cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <Link href="/signup">
//             <button
//               className={`px-6 py-2 border transition cursor-pointer ${
//                 isHome
//                   ? "border-black bg-black text-white hover:bg-white hover:text-black"
//                   : "border-[#09162c] bg-[#09162c] text-white hover:bg-white hover:text-[#09162c]"
//               }`}>
//               SIGN UP
//             </button>
//           </Link>
//         )}
//       </div>
//       <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
//     </nav>
//   );
// }



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
//   const [profileOpen, setProfileOpen] = useState(false);

//   useEffect(() => {
//     const storedUser =
//       typeof window !== "undefined" && localStorage.getItem("user");
//     if (storedUser) setUser(JSON.parse(storedUser));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null);
//     setProfileOpen(false);
//   };

//   return (
//     <nav className="w-full flex items-center px-6 md:px-16 py-6 relative">
      
//       {/* Background split (only home) */}
//       {isHome && (
//         <div className="absolute inset-0 flex -z-10">
//           <div className="w-1/2 bg-[#09162c]"></div>
//           <div className="w-1/2 bg-white"></div>
//         </div>
//       )}

//       {/* Logo */}
//       <h1
//         className={`text-3xl md:text-5xl tracking-tight allura ${
//           isHome ? "text-white" : "text-[#09162c]"
//         }`}
//       >
//         LuxeTick
//       </h1>

//       {/* Desktop Menu ONLY */}
//       <div
//         className={`hidden md:flex items-center gap-8 font-medium poppins ml-auto ${
//           isHome ? "text-black" : "text-[#09162c]"
//         }`}
//       >
//         {/* Links */}
//         <Link href="/">HOME</Link>
//         <Link href="/products">PRODUCTS</Link>
//         <Link href="/contact">CONTACT</Link>

//         {/* Wishlist */}
//         <Link href="/wishlist" className="relative">
//           <GoHeart className="text-3xl" />
//           {wishlistItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {wishlistItems.length}
//             </span>
//           )}
//         </Link>

//         {/* Cart */}
//         <div onClick={() => setCartOpen(true)} className="relative cursor-pointer">
//           <BsCart3 className="text-3xl" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {cartItems.length}
//             </span>
//           )}
//         </div>

//         {/* User */}
//         {user ? (
//           <div
//             className="relative"
//             onMouseEnter={() => setProfileOpen(true)}
//             onMouseLeave={() => setProfileOpen(false)}
//           >
//             <FaRegUser className="text-2xl cursor-pointer" />

//             <div
//               className={`absolute right-0 pt-2 ${
//                 profileOpen ? "opacity-100 visible" : "opacity-0 invisible"
//               }`}
//             >
//               <div className="w-60 bg-white shadow-lg p-4 text-sm">
//                 <p className="font-semibold">{user.name}</p>
//                 <p className="text-xs text-gray-500">{user.email}</p>

//                 <Link href="/ordershistory" className="block mt-2">
//                   Order History
//                 </Link>

//                 <button onClick={handleLogout} className="mt-2">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <Link href="/signup">
//             <button className="px-4 py-2 bg-black text-white">
//               SIGN UP
//             </button>
//           </Link>
//         )}
//       </div>

//       <div className="ml-auto md:hidden">
//   {!user && (
//     <Link href="/signup">
//       <button className="px-3 py-1 bg-black text-white text-sm">
//         SIGN UP
//       </button>
//     </Link>
//   )}
// </div>

//       <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
//     </nav>
//   );
// }











"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import CartDrawer from "../(site)/cart/cartdrawer"
import { useCart } from "../(site)/context/cartcontext";
import { useWishlist } from "../(site)/context/wishlistcontext";

export default function Navbar() {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [cartOpen, setCartOpen] = useState(false);

  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Get logged-in user
  useEffect(() => {
    const storedUser = typeof window !== "undefined" && localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Polling notifications every 10 sec
  useEffect(() => {
    if (!user) return;

    const fetchNotifications = async () => {
      try {
        const res = await fetch(`/api/notifications?userId=${user._id}`);
        const data = await res.json();
        setNotifications(data);
      } catch (err) {
        console.log("Notification fetch error:", err);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000); // every 10 sec
    return () => clearInterval(interval);
  }, [user]);

  const handleMarkAsRead = async (id: string) => {
    try {
      await fetch(`/api/notifications/${id}/read`, { method: "PUT" });
      setNotifications(prev => prev.map(n => (n._id === id ? { ...n, read: true } : n)));
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setProfileOpen(false);
  };

  return (
    <nav className="w-full flex items-center px-6 md:px-16 py-6 relative bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-3xl md:text-5xl font-bold allura text-[#09162c]">LuxeTick</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-auto font-medium poppins text-[#09162c]">
        <Link href="/">HOME</Link>
        <Link href="/products">PRODUCTS</Link>
        <Link href="/contact">CONTACT</Link>

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
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </div>

        {/* User */}
        {user ? (
          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <FaRegUser className="text-2xl cursor-pointer" />

            {/* Red dot for unread notifications */}
            {notifications.some(n => !n.read) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            )}

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg p-4 max-h-96 overflow-y-auto z-50">
                <p className="font-semibold mb-2">{user.name}</p>
                <p className="text-xs text-gray-500 mb-2">{user.email}</p>

                <Link href="/ordershistory" className="block mb-2 text-sm text-blue-600">
                  Order History
                </Link>

                <div className="mb-2 border-t border-gray-200"></div>

                {/* Notifications */}
                <div className="mb-2">
                  <p className="font-semibold mb-1 text-sm">Notifications</p>
                  {notifications.length === 0 && (
                    <p className="text-gray-500 text-xs">No notifications</p>
                  )}
                  {notifications.map(n => (
                    <div
                      key={n._id}
                      onClick={() => handleMarkAsRead(n._id)}
                      className={`p-2 mb-1 rounded cursor-pointer ${!n.read ? "bg-gray-100" : ""}`}
                    >
                      <p className="text-sm">{n.message}</p>
                      <span className="text-xs text-gray-400">
                        {new Date(n.createdAt).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-2 px-2 py-1 bg-gray-200 rounded text-sm w-full"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/signup">
            <button className="px-4 py-2 bg-black text-white rounded text-sm">SIGN UP</button>
          </Link>
        )}
      </div>

      {/* Mobile Sign Up */}
      <div className="ml-auto md:hidden">
        {!user && (
          <Link href="/signup">
            <button className="px-3 py-1 bg-black text-white text-sm rounded">SIGN UP</button>
          </Link>
        )}
      </div>

      <CartDrawer isOpen={cartOpen} setIsOpen={setCartOpen} />
    </nav>
  );
}