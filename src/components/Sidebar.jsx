import React from "react";
import { Home, BarChart2, Settings as SettingsIcon, LogOut, User } from "lucide-react";

const Sidebar = ({ isOpen, onClose, onNavigate, user, onLogout }) => {
  const handleNavClick = (page) => {
    if (onNavigate) onNavigate(page);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 sm:hidden z-40"
          onClick={onClose}
        ></div>
      )}

      <aside
        className={`
          fixed top-16 left-0 h-full w-64 bg-gray-900 text-white shadow-lg transform 
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 sm:static sm:flex-shrink-0
          z-50
        `}
      >
        {/* User Profile Section */}
        <div className="p-6 flex items-center space-x-3 border-b border-gray-700">
          <img
            src={
              user?.profilePic ||
              `https://api.dicebear.com/9.x/initials/svg?seed=${user?.name || "User"}`
            }
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-600"
          />
          <div>
            <p className="font-semibold">{user?.name || "Guest"}</p>
            <p className="text-sm text-gray-400">{user?.email || "Not logged in"}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 space-y-4">
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition w-full text-left"
          >
            <Home size={20} /> <span>Home</span>
          </button>

          <button
            onClick={() => handleNavClick("analytics")}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition w-full text-left"
          >
            <BarChart2 size={20} /> <span>Analytics</span>
          </button>

          <button
            onClick={() => handleNavClick("profile")}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition w-full text-left"
          >
            <User size={20} /> <span>My Profile</span>
          </button>

          {/* ✅ New Settings Tab */}
          <button
            onClick={() => handleNavClick("settings")}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition w-full text-left"
          >
            <SettingsIcon size={20} /> <span>Settings</span>
          </button>

          <button
            onClick={onLogout}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 transition w-full text-left text-red-400"
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
