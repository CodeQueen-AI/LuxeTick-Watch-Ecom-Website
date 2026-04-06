"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Poppins, Allura } from "next/font/google";

import { RxDashboard } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineBorderColor, MdOutlineLogout } from "react-icons/md";
import { LuBotMessageSquare } from "react-icons/lu";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const allura = Allura({ subsets: ["latin"], weight: "400" });

const navItems = [
  { href: "/admin", label: "Dashboard", icon: RxDashboard },
  { href: "/admin/users", label: "Users", icon: HiOutlineUsers },
  { href: "/admin/products/add", label: "Add Product", icon: HiOutlineShoppingBag },
  { href: "/admin/products", label: "Products", icon: BsCart2 },
  { href: "/admin/orders", label: "Orders", icon: MdOutlineBorderColor },
  { href: "/admin/contacts", label: "Contacts", icon: LuBotMessageSquare },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/admin-login");
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin");
    router.push("/admin-login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <p className="mt-2 text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex h-screen overflow-hidden ${poppins.className} bg-gray-50`}>
      {/* Sidebar */}
      <aside className="w-72 bg-white text-gray-700 flex flex-col h-screen border-r border-gray-200 shadow-sm">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className={`text-5xl font-bold tracking-tighter text-[#09162c] ${allura.className}`}>
            Luxe<span className="text-indigo-900">Tick</span>
          </h1>
          <p className="text-gray-800 text-base font-serif mt-1">Admin Dashboard</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-5 py-3 mb-1 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-r-lg transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-500 opacity-100"
                      : "bg-indigo-400 opacity-0 group-hover:opacity-100"
                  }`}
                />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <Icon
                  size={23}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600 scale-105"
                      : "text-gray-400 group-hover:text-indigo-500 group-hover:scale-105"
                  }`}
                />
                <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-5 border-t border-gray-200 mt-auto">
          <button
            onClick={handleLogout}
            className="relative flex items-center gap-3 w-full px-5 py-2.5 text-red-500 rounded-xl transition-all cursor-pointer duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
            <MdOutlineLogout
              size={23}
              className="relative z-10 transition-all duration-300 group-hover:scale-105"
            />
            <span className="relative z-10 font-medium transition-all duration-300 group-hover:translate-x-1">
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-8 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}