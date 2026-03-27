'use client';
import { Poppins, Allura } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxDashboard } from "react-icons/rx";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] });
const allura = Allura({ subsets: ['latin'], weight: '400' });

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: RxDashboard },
  { href: '/admin/users', label: 'Users', icon: HiOutlineUsers },
  { href: '/admin/products', label: 'Products', icon: BsCart2 },
  { href: '/admin/products/add', label: 'Add Product', icon: HiOutlineShoppingBag },
  
  { href: '/admin/orders', label: 'Orders', icon: MdOutlineBorderColor },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={`flex h-screen overflow-hidden ${poppins.className} bg-gray-50`}>
      
      {/* Sidebar */}
      <aside className="w-72 bg-white text-gray-700 flex flex-col border-r border-gray-200 shadow-sm">
        
        {/* Logo */}
        <div className="p-8 border-b border-gray-200">
          <h1 className={`text-6xl font-bold tracking-tighter text-[#09162c] ${allura.className}`}>
            Luxe<span className="text-indigo-900">Tick</span>
          </h1>
          <p className="text-gray-800 text-lg font-serif  mt-1">Admin Dashboard</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-4">

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center gap-3 px-5 py-3 mb-2 rounded-xl font-medium transition-all duration-300 group overflow-hidden ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {/* Left indicator */}
                <span
                  className={`absolute left-0 top-0 h-full w-1 rounded-r-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-indigo-500 opacity-100'
                      : 'bg-indigo-400 opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Soft hover bg */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Icon */}
                <Icon
                  size={23}
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? 'text-indigo-600 scale-105'
                      : 'text-gray-400 group-hover:text-indigo-500 group-hover:scale-105'
                  }`}
                />

                {/* Text */}
                <span className="relative z-10 transition-all duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-gray-200 mt-auto">
          <button className="relative flex items-center gap-3 w-full px-5 py-3 text-red-500 rounded-xl transition-all duration-300 group overflow-hidden">
            
            {/* Hover bg */}
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

      {/* Main */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-10 py-6 flex items-center justify-between shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Welcome back, Admin</h2>
            <p className="text-gray-500 text-sm">Manage your store efficiently</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-500 font-medium">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>

            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white shadow-md">
              S
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-10 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}