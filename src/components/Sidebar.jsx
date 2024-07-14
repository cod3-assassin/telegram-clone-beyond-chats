import React, { useState } from "react";
import {
  FaCog,
  FaBookmark,
  FaSignOutAlt,
  FaUser,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle dark mode (e.g., updating CSS classes or using a context)
  };

  return (
    <>
      <aside
        className={`fixed inset-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out bg-gray-200 w-64 h-full z-20 shadow-lg`}
      >
        <div className="p-4">
          <button onClick={toggleSidebar} className="md:hidden mb-4">
            Close
          </button>
          <div className="flex items-center space-x-2 mb-4">
            <FaUser size={24} />
            <span>Username</span>
          </div>
          <div
            className="flex items-center space-x-2 mb-4 cursor-pointer"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCog />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaBookmark />
              <span>Saved Messages</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaSignOutAlt />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`hidden md:block absolute top-16 left-0 bg-white shadow-lg rounded-lg p-4 z-20 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 mb-4">
            <FaUser size={24} />
            <span>Username</span>
          </div>
          <div
            className="flex items-center space-x-2 mb-4 cursor-pointer"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaBookmark />
            <span>Saved Messages</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaSignOutAlt />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
