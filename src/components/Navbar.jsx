import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = ({ onToggleSidebar, onSearch, onNewItem }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) onSearch(value);
  };

  return (
    <nav className="h-16 bg-gray-800 text-white flex items-center justify-between px-4 sm:px-6 shadow-md">
      {/* Left side */}
      <div className="flex items-center space-x-3">
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onToggleSidebar}
        >
          <Menu size={22} />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold">My Dashboard</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="hidden sm:block px-3 py-1.5 rounded-lg bg-gray-700 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={onNewItem}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg shadow transition"
        >
          New Item
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
