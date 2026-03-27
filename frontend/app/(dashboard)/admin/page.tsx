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


// "use client";

// import dynamic from "next/dynamic";

// // Charts (same file me use ho rahe hain)
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// export default function DashboardPage() {
//   // Line Chart (Sales + Revenue)
//   const lineOptions = {
//     chart: { type: "area", toolbar: { show: false } },
//     dataLabels: { enabled: false },
//     stroke: { curve: "smooth" },
//     xaxis: {
//       categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     },
//   };

//   const lineSeries = [
//     { name: "Sales", data: [180,190,170,160,175,165,170,205,230,210,240,235] },
//     { name: "Revenue", data: [40,30,50,40,55,40,70,100,110,120,150,140] },
//   ];

//   // Bar Chart (Orders)
//   const barOptions = {
//     chart: { type: "bar", toolbar: { show: false } },
//     xaxis: {
//       categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     },
//   };

//   const barSeries = [
//     { name: "Orders", data: [168,385,201,298,187,195,291,110,215,390,280,112] },
//   ];

//   return (
//     <div className="space-y-8">

//       {/* 🔹 TOP STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <p className="text-gray-500">Total Products</p>
//           <h2 className="text-3xl font-bold mt-2">248</h2>
//           <p className="text-green-500 text-sm mt-1">+12 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <p className="text-gray-500">Total Users</p>
//           <h2 className="text-3xl font-bold mt-2">1,284</h2>
//           <p className="text-green-500 text-sm mt-1">+28 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <p className="text-gray-500">Total Orders</p>
//           <h2 className="text-3xl font-bold mt-2">892</h2>
//           <p className="text-green-500 text-sm mt-1">+41 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <p className="text-gray-500">Revenue</p>
//           <h2 className="text-3xl font-bold mt-2">$48,291</h2>
//           <p className="text-green-500 text-sm mt-1">+15%</p>
//         </div>

//       </div>

//       {/* 🔹 CHARTS */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
//         {/* Sales + Revenue */}
//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <h3 className="font-semibold mb-4">Sales & Revenue</h3>
//           <ReactApexChart
//             options={lineOptions}
//             series={lineSeries}
//             type="area"
//             height={300}
//           />
//         </div>

//         {/* Orders */}
//         <div className="bg-white p-6 rounded-2xl shadow border">
//           <h3 className="font-semibold mb-4">Monthly Orders</h3>
//           <ReactApexChart
//             options={barOptions}
//             series={barSeries}
//             type="bar"
//             height={300}
//           />
//         </div>

//       </div>

//       {/* 🔹 RECENT ORDERS TABLE */}
//       <div className="bg-white p-6 rounded-2xl shadow border">
//         <h3 className="font-semibold mb-4">Recent Orders</h3>

//         <table className="w-full text-sm">
//           <thead>
//             <tr className="text-left border-b">
//               <th className="py-2">Product</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody className="space-y-2">
//             <tr className="border-b">
//               <td className="py-2">MacBook Pro</td>
//               <td>Laptop</td>
//               <td>$2399</td>
//               <td className="text-green-500">Delivered</td>
//             </tr>

//             <tr className="border-b">
//               <td className="py-2">iPhone 15</td>
//               <td>Mobile</td>
//               <td>$1800</td>
//               <td className="text-yellow-500">Pending</td>
//             </tr>

//             <tr>
//               <td className="py-2">AirPods</td>
//               <td>Accessories</td>
//               <td>$240</td>
//               <td className="text-red-500">Cancelled</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// }

























// "use client";

// import dynamic from "next/dynamic";

// // Charts
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });

// export default function DashboardPage() {
//   // Line Chart (Sales + Revenue)
//   const lineOptions = {
//     chart: { type: "area", toolbar: { show: false } },
//     dataLabels: { enabled: false },
//     stroke: { curve: "smooth", width: 3 },
//     xaxis: {
//       categories: [
//         "Jan","Feb","Mar","Apr","May","Jun",
//         "Jul","Aug","Sep","Oct","Nov","Dec",
//       ],
//     },
//     colors: ["#4f46e5", "#10b981"],
//     grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
//     tooltip: { theme: "dark" },
//   };

//   const lineSeries = [
//     { name: "Sales", data: [180,190,170,160,175,165,170,205,230,210,240,235] },
//     { name: "Revenue", data: [40,30,50,40,55,40,70,100,110,120,150,140] },
//   ];

//   // Bar Chart (Orders)
//   const barOptions = {
//     chart: { type: "bar", toolbar: { show: false } },
//     plotOptions: { bar: { borderRadius: 6, columnWidth: "50%" } },
//     xaxis: {
//       categories: [
//         "Jan","Feb","Mar","Apr","May","Jun",
//         "Jul","Aug","Sep","Oct","Nov","Dec",
//       ],
//     },
//     colors: ["#f59e0b"],
//     grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
//     tooltip: { theme: "dark" },
//   };

//   const barSeries = [
//     { name: "Orders", data: [168,385,201,298,187,195,291,110,215,390,280,112] },
//   ];

//   return (
//     <div className="space-y-10 p-6 bg-gray-50 min-h-screen">
//       {/* 🔹 TOP STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Total Products</p>
//           <h2 className="text-3xl font-bold mt-2">248</h2>
//           <p className="text-green-500 text-sm mt-1">+12 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Total Users</p>
//           <h2 className="text-3xl font-bold mt-2">1,284</h2>
//           <p className="text-green-500 text-sm mt-1">+28 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Total Orders</p>
//           <h2 className="text-3xl font-bold mt-2">892</h2>
//           <p className="text-green-500 text-sm mt-1">+41 this month</p>
//         </div>

//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Revenue</p>
//           <h2 className="text-3xl font-bold mt-2">$48,291</h2>
//           <p className="text-green-500 text-sm mt-1">+15%</p>
//         </div>
//       </div>

//       {/* 🔹 CHARTS */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Sales & Revenue */}
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <h3 className="font-semibold text-lg mb-4">Sales & Revenue</h3>
//           <ReactApexChart
//             options={lineOptions}
//             series={lineSeries}
//             type="area"
//             height={320}
//           />
//         </div>

//         {/* Monthly Orders */}
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <h3 className="font-semibold text-lg mb-4">Monthly Orders</h3>
//           <ReactApexChart
//             options={barOptions}
//             series={barSeries}
//             type="bar"
//             height={320}
//           />
//         </div>
//       </div>

//       {/* 🔹 ADDITIONAL ANALYTICS CARDS (OPTIONAL) */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Avg. Order Value</p>
//           <h2 className="text-2xl font-bold mt-2">$540</h2>
//         </div>
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">New Customers</p>
//           <h2 className="text-2xl font-bold mt-2">320</h2>
//         </div>
//         <div className="bg-white p-6 rounded-3xl shadow hover:shadow-lg transition border border-gray-200">
//           <p className="text-gray-500">Returning Customers</p>
//           <h2 className="text-2xl font-bold mt-2">610</h2>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardPage() {
  // Line Chart (Sales + Revenue)
  const lineOptions = {
    chart: { type: "area", toolbar: { show: false }, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 3 },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
    colors: ["#4f46e5", "#10b981"],
    tooltip: { theme: "dark", shared: true },
    fill: { type: "gradient", gradient: { shade: "light", type: "vertical", opacityFrom: 0.6, opacityTo: 0.1, stops: [0,100] } }
  };
  const lineSeries = [
    { name: "Sales", data: [180,190,170,160,175,165,170,205,230,210,240,235] },
    { name: "Revenue", data: [40,30,50,40,55,40,70,100,110,120,150,140] },
  ];

  // Monthly Orders Bar Chart
  const ordersOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 6, columnWidth: "50%" } },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    colors: ["#3b82f6"],
    grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
    tooltip: { theme: "dark" },
  };
  const ordersSeries = [{ name: "Orders", data: [168,385,201,298,187,195,291,110,215,390,280,112] }];

  // Cart & Conversion Chart
  const cartOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 6, columnWidth: "40%" } },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    colors: ["#3b82f6", "#10b981"],
    grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
    tooltip: { theme: "dark" },
  };
  const cartSeries = [
    { name: "Cart Adds", data: [120,150,200,170,140,180,210,160,190,230,220,200] },
    { name: "Conversions", data: [80,100,150,120,90,140,160,130,150,180,170,160] },
  ];

  // Profit vs Loss Area Chart
  const profitOptions = {
    chart: { type: "area", toolbar: { show: false }, zoom: { enabled: false } },
    stroke: { curve: "smooth", width: 2 },
    dataLabels: { enabled: false },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
    colors: ["#ef4444", "#10b981"],
    fill: { type: "gradient", gradient: { shade: "light", opacityFrom: 0.4, opacityTo: 0.05, stops: [0,100] } },
    grid: { borderColor: "#e5e7eb", strokeDashArray: 5 },
    tooltip: { theme: "dark" },
  };
  const profitSeries = [
    { name: "Profit", data: [50,60,40,30,50,45,70,90,100,120,140,130] },
    { name: "Loss", data: [10,20,5,15,10,20,25,30,15,10,20,15] },
  ];

  // Box Plot Chart
  const boxOptions = {
    chart: { type: "boxPlot", toolbar: { show: false } },
    plotOptions: { boxPlot: { colors: { upper: "#4f46e5", lower: "#f59e0b" } } },
    xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun"] },
    tooltip: { theme: "dark" },
  };
  const boxSeries = [
    {
      name: "Order Values",
      data: [
        { x: "Jan", y: [100,200,150,170,180] },
        { x: "Feb", y: [120,230,180,200,220] },
        { x: "Mar", y: [140,210,160,190,200] },
        { x: "Apr", y: [110,180,150,170,160] },
        { x: "May", y: [130,220,190,200,210] },
        { x: "Jun", y: [150,240,200,220,230] },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-10">
      {/* 🔹 TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Products</p>
          <h2 className="text-2xl font-bold mt-1">248</h2>
          <p className="text-green-500 text-xs mt-1">+12 this month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-2xl font-bold mt-1">1,284</h2>
          <p className="text-green-500 text-xs mt-1">+28 this month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h2 className="text-2xl font-bold mt-1">892</h2>
          <p className="text-green-500 text-xs mt-1">+41 this month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <p className="text-gray-500 text-sm">Revenue</p>
          <h2 className="text-2xl font-bold mt-1">$48,291</h2>
          <p className="text-green-500 text-xs mt-1">+15%</p>
        </div>
      </div>

      {/* 🔹 CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales & Revenue */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Sales & Revenue</h3>
          <ReactApexChart options={lineOptions} series={lineSeries} type="area" height={320} />
        </div>

        {/* Monthly Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-700">Monthly Orders</h3>
            <span className="text-green-500 text-sm font-semibold">+10% vs last month</span>
          </div>
          <ReactApexChart options={ordersOptions} series={ordersSeries} type="bar" height={300} />
        </div>

        {/* Cart & Conversion */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Cart & Conversion</h3>
          <ReactApexChart options={cartOptions} series={cartSeries} type="bar" height={320} />
        </div>

        {/* Profit vs Loss */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Profit vs Loss</h3>
          <ReactApexChart options={profitOptions} series={profitSeries} type="area" height={320} />
        </div>

        {/* Box Plot */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition lg:col-span-2">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Order Value Distribution</h3>
          <ReactApexChart options={boxOptions} series={boxSeries} type="boxPlot" height={360} />
        </div>
      </div>
    </div>
  );
}