'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MdDashboard, 
  MdOutlineInventory2, 
  MdPeopleAlt, 
  MdShoppingCart, 
  MdLogout 
} from 'react-icons/md';
import { MdAdd } from 'react-icons/md';

const navItems = [
  { href: '/admin',          label: 'Dashboard', icon: MdDashboard },
  { href: '/admin/products', label: 'Products',  icon: MdOutlineInventory2 },
  { href: '/admin/users',    label: 'Users',     icon: MdPeopleAlt },
  { href: '/admin/orders',   label: 'Orders',    icon: MdShoppingCart },
  { href: '/admin/products', label: 'Products', icon: MdOutlineInventory2 },
  { href: '/admin/products/add', label: 'Add Product', icon: MdAdd },   // ← Naya
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screenoverflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-whiteflex flex-col">
        {/* Logo Section */}
        <div className="p-8 border-b border-white">
          <h1 className="text-4xl font-bold tracking-tighter">
            Luxe<span className="text-indigo-500">Tick</span>
          </h1>
          <p className="text-zinc-400 text-sm mt-1">Admin Dashboard</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8">
          <p className="text-xs uppercase tracking-widest text-white mb-4 px-4">MAIN</p>
          
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl mb-2 transition-all duration-200 font-medium ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'hover:bg-zinc-800 text-zinc-300 hover:text-white'
                }`}
              >
                <Icon size={24} className={isActive ? 'text-white' : 'text-zinc-400'} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-6 border-t border-zinc-800 mt-auto">
          <button className="flex items-center gap-3 w-full px-5 py-3.5 text-red-400 hover:bg-red-950/50 hover:text-red-300 rounded-2xl transition-all duration-200">
            <MdLogout size={24} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-zinc-900 border-b border-zinc-800 px-10 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Welcome back, Admin</h2>
            <p className="text-zinc-400 text-sm">Manage your store efficiently</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-sm text-zinc-400 font-medium">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>

            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-md">
              S
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-10 bg-zinc-950">
          {children}
        </main>
      </div>
    </div>
  );
}