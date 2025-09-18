import React from "react";
import { User, BarChart2, ShoppingCart } from "lucide-react";

export default function UserDashboard() {
  // Dummy stats for example
  const stats = [
    { id: 1, title: "Profile Completeness", value: "80%", icon: <User className="w-6 h-6 text-white" />, bg: "bg-indigo-500" },
    { id: 2, title: "Orders", value: 12, icon: <ShoppingCart className="w-6 h-6 text-white" />, bg: "bg-green-500" },
    { id: 3, title: "Analytics Score", value: "75%", icon: <BarChart2 className="w-6 h-6 text-white" />, bg: "bg-purple-500" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Card */}
      <div className="mb-8 bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600 text-lg">Here's a quick overview of your dashboard.</p>
        </div>
        <div className="text-indigo-600 text-6xl font-bold">
          <User className="w-16 h-16 md:w-20 md:h-20" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <div className={`p-4 rounded-lg ${stat.bg}`}>{stat.icon}</div>
            <div>
              <p className="text-gray-500 font-medium">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Sections (optional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example chart placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-md h-64 flex items-center justify-center text-gray-400">
          <p>Chart Placeholder</p>
        </div>

        {/* Example recent activity */}
        <div className="bg-white p-6 rounded-xl shadow-md h-64 flex flex-col justify-center items-center text-gray-500">
          <p>No recent activity</p>
        </div>
      </div>
    </div>
  );
}
