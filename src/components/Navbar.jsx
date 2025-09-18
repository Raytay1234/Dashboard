import React, { useState } from "react";
import { Menu, User } from "lucide-react";
import { useAuth } from "../context/useAuth";

const Navbar = ({ onToggleSidebar, onSearch }) => {
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) onSearch(value);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="h-16 bg-gray-800 text-white flex items-center justify-between px-4 sm:px-6 shadow-md">
      {/* Left side: Sidebar toggle & title */}
      <div className="flex items-center space-x-3">
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onToggleSidebar}
        >
          <Menu size={22} />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold">My Dashboard</h1>
      </div>

      {/* Right side: Search & User info */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="hidden sm:block px-3 py-1.5 rounded-lg bg-gray-700 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* User avatar and name */}
        {user && (
          <div className="flex items-center gap-3 bg-gray-700 px-3 py-1.5 rounded-lg">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <User size={24} className="text-white" />
            )}
            <span className="hidden sm:block font-medium">{user.name}</span>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className="ml-3 text-gray-200 hover:text-white focus:outline-none"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
