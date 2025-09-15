import React from "react";

const Analytics = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Analytics</h2>
      <p className="text-gray-600 mb-6">
        Detailed insights about your platform’s performance, user engagement, and
        growth trends.
      </p>

      {/* Stat Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Total Users</h3>
          <p className="text-3xl font-bold text-blue-600">12,450</p>
          <p className="text-sm text-gray-500">+5% this month</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Sales</h3>
          <p className="text-3xl font-bold text-green-600">$89,000</p>
          <p className="text-sm text-gray-500">+12% growth</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Active Sessions</h3>
          <p className="text-3xl font-bold text-purple-600">3,278</p>
          <p className="text-sm text-gray-500">+8% vs last week</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Bounce Rate</h3>
          <p className="text-3xl font-bold text-red-500">18%</p>
          <p className="text-sm text-gray-500">-3% improvement</p>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white shadow rounded-xl p-6 mt-8">
        <h3 className="font-semibold text-gray-700 mb-4">Traffic Overview</h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
          📈 [Chart goes here]
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-xl p-6 mt-8">
        <h3 className="font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-600">
          <li>✅ User <span className="font-medium">John Doe</span> signed up</li>
          <li>💰 Sale recorded: <span className="font-medium">$299</span></li>
          <li>📦 Order <span className="font-medium">#1245</span> shipped</li>
          <li>⚡ Server load at <span className="font-medium">75%</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
