// export default function DashboardPage() {
//   return (
//     <div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
//           <p className="text-gray-400">Total Products</p>
//           <p className="text-4xl font-bold mt-3">248</p>
//           <p className="text-green-500 text-sm mt-2">+12 this month</p>
//         </div>
//         <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
//           <p className="text-gray-400">Total Users</p>
//           <p className="text-4xl font-bold mt-3">1,284</p>
//           <p className="text-green-500 text-sm mt-2">+28 this month</p>
//         </div>
//         <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
//           <p className="text-gray-400">Total Orders</p>
//           <p className="text-4xl font-bold mt-3">892</p>
//           <p className="text-green-500 text-sm mt-2">+41 this month</p>
//         </div>
//         <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
//           <p className="text-gray-400">Total Revenue</p>
//           <p className="text-4xl font-bold mt-3">$48,291</p>
//           <p className="text-green-500 text-sm mt-2">+15% this month</p>
//         </div>
//       </div>

//       <div className="mt-12 text-center text-gray-500">
//         Sidebar se Products, Users ya Orders section mein jaao
//       </div>
//     </div>
//   );
// }


"use client";

import dynamic from "next/dynamic";

// Charts (same file me use ho rahe hain)
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function DashboardPage() {
  // Line Chart (Sales + Revenue)
  const lineOptions = {
    chart: { type: "area", toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    },
  };

  const lineSeries = [
    { name: "Sales", data: [180,190,170,160,175,165,170,205,230,210,240,235] },
    { name: "Revenue", data: [40,30,50,40,55,40,70,100,110,120,150,140] },
  ];

  // Bar Chart (Orders)
  const barOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    xaxis: {
      categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    },
  };

  const barSeries = [
    { name: "Orders", data: [168,385,201,298,187,195,291,110,215,390,280,112] },
  ];

  return (
    <div className="space-y-8">

      {/* 🔹 TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">248</h2>
          <p className="text-green-500 text-sm mt-1">+12 this month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-3xl font-bold mt-2">1,284</h2>
          <p className="text-green-500 text-sm mt-1">+28 this month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-3xl font-bold mt-2">892</h2>
          <p className="text-green-500 text-sm mt-1">+41 this month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-3xl font-bold mt-2">$48,291</h2>
          <p className="text-green-500 text-sm mt-1">+15%</p>
        </div>

      </div>

      {/* 🔹 CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Sales + Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="font-semibold mb-4">Sales & Revenue</h3>
          <ReactApexChart
            options={lineOptions}
            series={lineSeries}
            type="area"
            height={300}
          />
        </div>

        {/* Orders */}
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h3 className="font-semibold mb-4">Monthly Orders</h3>
          <ReactApexChart
            options={barOptions}
            series={barSeries}
            type="bar"
            height={300}
          />
        </div>

      </div>

      {/* 🔹 RECENT ORDERS TABLE */}
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h3 className="font-semibold mb-4">Recent Orders</h3>

        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="space-y-2">
            <tr className="border-b">
              <td className="py-2">MacBook Pro</td>
              <td>Laptop</td>
              <td>$2399</td>
              <td className="text-green-500">Delivered</td>
            </tr>

            <tr className="border-b">
              <td className="py-2">iPhone 15</td>
              <td>Mobile</td>
              <td>$1800</td>
              <td className="text-yellow-500">Pending</td>
            </tr>

            <tr>
              <td className="py-2">AirPods</td>
              <td>Accessories</td>
              <td>$240</td>
              <td className="text-red-500">Cancelled</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}