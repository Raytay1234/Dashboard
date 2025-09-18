import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", role: "user", active: true },
    { id: 2, name: "Bob", role: "user", active: false },
    { id: 3, name: "Charlie", role: "admin", active: true },
  ]);

  const [newUser, setNewUser] = useState({ name: "", role: "user", active: true });
  const [editingUser, setEditingUser] = useState(null);

  // Add new user
  const handleAddUser = () => {
    if (!newUser.name) return;
    setUsers([...users, { id: Date.now(), ...newUser }]);
    setNewUser({ name: "", role: "user", active: true });
  };

  // Delete user
  const handleDeleteUser = (id) => setUsers(users.filter((u) => u.id !== id));

  // Start editing
  const handleEditUser = (user) => setEditingUser(user);

  // Save edit
  const handleSaveEdit = () => {
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  // Metrics
  const totalUsers = users.length;
  const totalAdmins = users.filter((u) => u.role === "admin").length;
  const activeUsers = users.filter((u) => u.active).length;
  const inactiveUsers = users.filter((u) => !u.active).length;

  // Chart data
  const chartData = [
    { name: "Active", count: activeUsers },
    { name: "Inactive", count: inactiveUsers },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-indigo-600 text-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium">Total Users</h2>
          <p className="text-2xl font-bold">{totalUsers}</p>
        </div>
        <div className="bg-green-600 text-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium">Active Users</h2>
          <p className="text-2xl font-bold">{activeUsers}</p>
        </div>
        <div className="bg-red-600 text-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium">Inactive Users</h2>
          <p className="text-2xl font-bold">{inactiveUsers}</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
          <h2 className="text-sm font-medium">Admins</h2>
          <p className="text-2xl font-bold">{totalAdmins}</p>
        </div>
      </div>

      {/* User Chart */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">User Activity</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* User Management Table */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Manage Users</h2>

        {/* Add User */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="border rounded px-2 py-1 flex-1"
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            className="border rounded px-2 py-1"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <select
            value={newUser.active}
            onChange={(e) => setNewUser({ ...newUser, active: e.target.value === "true" })}
            className="border rounded px-2 py-1"
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
          <button
            onClick={handleAddUser}
            className="bg-indigo-600 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>

        {/* User Table */}
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">
                  {editingUser?.id === u.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, name: e.target.value })
                      }
                      className="border px-1 py-0.5 rounded"
                    />
                  ) : (
                    u.name
                  )}
                </td>
                <td className="border p-2">
                  {editingUser?.id === u.id ? (
                    <select
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, role: e.target.value })
                      }
                      className="border px-1 py-0.5 rounded"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  ) : (
                    u.role
                  )}
                </td>
                <td className="border p-2">
                  {editingUser?.id === u.id ? (
                    <select
                      value={editingUser.active}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, active: e.target.value === "true" })
                      }
                      className="border px-1 py-0.5 rounded"
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                  ) : u.active ? (
                    <span className="text-green-600 font-medium">Active</span>
                  ) : (
                    <span className="text-red-600 font-medium">Inactive</span>
                  )}
                </td>
                <td className="border p-2 flex gap-2">
                  {editingUser?.id === u.id ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditUser(u)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUser(u.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
