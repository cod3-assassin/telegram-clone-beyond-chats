import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white text-black p-2 md:p-4 flex items-center justify-between shadow-md">
      <button onClick={toggleSidebar}>
        <FaBars size={24} />
      </button>
      <h1 className="text-lg md:hidden ml-2">Telegram</h1>
      <div className="flex items-center w-full md:w-3/4 bg-gray-100 p-2 rounded-lg">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none w-full"
        />
      </div>
    </header>
  );
};

export default Header;
