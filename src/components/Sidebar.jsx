import React, { useState } from "react";
import {
  FaCog,
  FaBookmark,
  FaSignOutAlt,
  FaUser,
  FaMoon,
  FaSun,
  FaAddressBook,
  FaWallet,
  FaBook,
  FaBug,
  FaExchangeAlt,
} from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

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
        } md:hidden transition-transform duration-300 ease-in-out bg-gray-200 bg-opacity-50 backdrop-blur-lg w-64 h-full z-20 shadow-lg`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FaUser size={24} />
              <span>Username</span>
            </div>
            <button onClick={toggleDarkMode} className="md:hidden">
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
          <button onClick={toggleSidebar} className="md:hidden mb-4">
            Close
          </button>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaBookmark />
              <span>Saved Messages</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaAddressBook />
              <span>Contacts</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaWallet />
              <span>Wallet</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaBook />
              <span>My Stories</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaCog />
              <span>Settings</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <IoRocketSharp />
              <span>Telegram Feature</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaBug />
              <span>Report a Bug</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaExchangeAlt />
              <span>Switch to K Version</span>
            </div>
            <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
              <FaSignOutAlt />
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </aside>
      <div
        className={`hidden md:block absolute top-16 left-0 bg-white bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-4 z-20 w-80 ${
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
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaBookmark />
            <span>Saved Messages</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaAddressBook />
            <span>Contacts</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaWallet />
            <span>Wallet</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaBook />
            <span>My Stories</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaCog />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <IoRocketSharp />
            <span>Telegram Feature</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaBug />
            <span>Report a Bug</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaExchangeAlt />
            <span>Switch to K Version</span>
          </div>
          <div className="flex items-center space-x-2 hover:bg-gray-300 rounded-lg p-2 shadow">
            <FaSignOutAlt />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
