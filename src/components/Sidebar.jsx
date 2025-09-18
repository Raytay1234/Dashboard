import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { User, Settings, BarChart2, Home, LogOut } from "lucide-react";

const Sidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const linkClasses = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
      location.pathname.includes(path)
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-200"
    }`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white shadow-md p-6 h-full flex flex-col">
      {/* User Info */}
      {user && (
        <div className="mb-6 flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <User size={28} className="text-gray-500" />
          )}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800">{user.name}</span>
            <span className="text-sm text-gray-500 capitalize">{user.role}</span>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Menu</h2>

      <nav className="flex-1 space-y-2">
        {/* Role-based dashboard links */}
        {user?.role === "user" && (
          <Link to="/dashboard/user" className={linkClasses("user")}>
            <Home size={18} />
            User Dashboard
          </Link>
        )}
        {user?.role === "admin" && (
          <Link to="/dashboard/admin" className={linkClasses("admin")}>
            <Home size={18} />
            Admin Dashboard
          </Link>
        )}

        {/* Shared links */}
        <Link to="/dashboard/profile" className={linkClasses("profile")}>
          <User size={18} />
          Profile
        </Link>
        <Link to="/dashboard/settings" className={linkClasses("settings")}>
          <Settings size={18} />
          Settings
        </Link>
        <Link to="/dashboard/analytics" className={linkClasses("analytics")}>
          <BarChart2 size={18} />
          Analytics
        </Link>
      </nav>

      {/* Logout Button */}
      {user && (
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-red-500 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
