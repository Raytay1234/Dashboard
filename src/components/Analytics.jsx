import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const trafficData = [
  { name: "Jan", users: 4000, sales: 2400 },
  { name: "Feb", users: 3000, sales: 1398 },
  { name: "Mar", users: 2000, sales: 9800 },
  { name: "Apr", users: 2780, sales: 3908 },
  { name: "May", users: 1890, sales: 4800 },
  { name: "Jun", users: 2390, sales: 3800 },
  { name: "Jul", users: 3490, sales: 4300 },
];

const salesData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 22000 },
  { month: "Apr", revenue: 17500 },
  { month: "May", revenue: 24500 },
  { month: "Jun", revenue: 20000 },
  { month: "Jul", revenue: 28000 },
];

const demographicsData = [
  { name: "Mobile", value: 65 },
  { name: "Desktop", value: 25 },
  { name: "Tablet", value: 10 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

const Analytics = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">📊 Analytics</h2>
      <p className="text-gray-600 mb-8">
        Get detailed insights about your platform’s performance, user engagement, and growth trends.
      </p>

      {/* Stat Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-medium text-gray-600">Total Users</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">12,450</p>
          <p className="text-sm text-green-600 mt-1">▲ +5% this month</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-medium text-gray-600">Sales</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">$89,000</p>
          <p className="text-sm text-green-600 mt-1">▲ +12% growth</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-medium text-gray-600">Active Sessions</h3>
          <p className="text-4xl font-bold text-purple-600 mt-2">3,278</p>
          <p className="text-sm text-green-600 mt-1">▲ +8% vs last week</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h3 className="font-medium text-gray-600">Bounce Rate</h3>
          <p className="text-4xl font-bold text-red-500 mt-2">18%</p>
          <p className="text-sm text-green-600 mt-1">▼ -3% improvement</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Traffic Overview</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "0.5rem" }} />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#3b82f6" strokeWidth={3} />
                <Line type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Monthly Sales Revenue</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "0.5rem" }} />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">User Demographics</h3>
          <div className="h-72 flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {demographicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "0.5rem" }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow-md rounded-xl p-6 mt-10">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700">
            <span className="mr-3">✅</span>
            <span>User <span className="font-medium">John Doe</span> signed up</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-3">💰</span>
            <span>Sale recorded: <span className="font-medium">$299</span></span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-3">📦</span>
            <span>Order <span className="font-medium">#1245</span> shipped</span>
          </li>
          <li className="flex items-center text-gray-700">
            <span className="mr-3">⚡</span>
            <span>Server load at <span className="font-medium">75%</span></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
