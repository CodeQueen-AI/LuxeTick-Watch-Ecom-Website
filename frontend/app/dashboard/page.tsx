export default function DashboardPage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <p className="text-gray-400">Total Products</p>
          <p className="text-4xl font-bold mt-3">248</p>
          <p className="text-green-500 text-sm mt-2">+12 this month</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <p className="text-gray-400">Total Users</p>
          <p className="text-4xl font-bold mt-3">1,284</p>
          <p className="text-green-500 text-sm mt-2">+28 this month</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <p className="text-gray-400">Total Orders</p>
          <p className="text-4xl font-bold mt-3">892</p>
          <p className="text-green-500 text-sm mt-2">+41 this month</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <p className="text-gray-400">Total Revenue</p>
          <p className="text-4xl font-bold mt-3">$48,291</p>
          <p className="text-green-500 text-sm mt-2">+15% this month</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500">
        Sidebar se Products, Users ya Orders section mein jaao
      </div>
    </div>
  );
}