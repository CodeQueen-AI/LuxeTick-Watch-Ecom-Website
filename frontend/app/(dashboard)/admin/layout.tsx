'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdOutlineInventory2, 
  MdPeopleAlt, 
  MdShoppingCart, 
  MdLogout, 
  MdAdd 
} from 'react-icons/md';

// For Google Fonts in Next.js 13+ use next/font/google
import { Poppins, Allura } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'] });
const allura = Allura({ subsets: ['latin'], weight: '400' });

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: MdDashboard },
  { href: '/admin/products', label: 'Products', icon: MdOutlineInventory2 },
  { href: '/admin/products/add', label: 'Add Product', icon: MdAdd },
  { href: '/admin/users', label: 'Users', icon: MdPeopleAlt },
  { href: '/admin/orders', label: 'Orders', icon: MdShoppingCart },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={`flex h-screen overflow-hidden ${poppins.className}`}>
      {/* Sidebar */}
      <aside className="w-72 flex flex-col border-r border-gray-200 shadow-sm">
        {/* Logo Section */}
        <div className="p-8 border-b border-gray-200">
          <h1 className={`text-6xl font-bold tracking-tighter text-[#09162c] ${allura.className}`}>
            Luxe<span className="text-indigo-800">Tick</span>
          </h1>
          <p className="text-gray-800 text-lg mt-1 font-serif">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl mb-2 transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow'
                    : 'hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon size={24} className={isActive ? 'text-white' : 'text-gray-500'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-200 mt-auto">
          <button className="flex items-center gap-3 w-full px-5 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200">
            <MdLogout size={24} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
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

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-10 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}