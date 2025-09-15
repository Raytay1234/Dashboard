import React from "react";

const Analytics = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Analytics</h2>
      <p className="text-gray-600">
        Here you can display graphs, charts, or reports about system activity.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Users</h3>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Sales</h3>
          <p className="text-3xl font-bold text-green-600">$32,000</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="font-semibold text-gray-700">Bounce Rate</h3>
          <p className="text-3xl font-bold text-red-500">23%</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
