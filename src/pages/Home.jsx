import React, { useState } from "react";
import { FaSearch, FaPhoneAlt, FaEllipsisV } from "react-icons/fa";
import ChatWindow from "../components/ChatWindow";

const Home = ({ selectChat }) => {
  const [selectedChat, setSelectedChat] = useState(null);
  const UserIcon = "User"; // Placeholder for UserIcon component

  // Function to handle chat selection
  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
    selectChat(chatId); // Trigger the selectChat function passed as prop
  };

  return (
    <div className="flex-grow overflow-auto">
      {/* Header section */}
      <header className="text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-red-300 flex items-center justify-center">
            <span className="text-xl text-black">{UserIcon}</span>
          </div>
          <h1 className="text-xl">Home</h1>
        </div>
        <div className="flex items-center space-x-6 text-black">
          <FaSearch size={24} className="cursor-pointer" />
          <FaPhoneAlt size={24} className="cursor-pointer" />
          <FaEllipsisV size={24} className="cursor-pointer" />
        </div>
      </header>

      {/* ChatWindow section - display ChatWindow when selectedChat is not null */}
      {selectedChat !== null && (
        <div className="px-4 py-6">
          <ChatWindow chatId={selectedChat} />
        </div>
      )}

      {/* Placeholder for selecting a chat (to be replaced with ChatList logic) */}
      {/* <div className="px-4 py-6">
        <div>Select a chat</div>
        <div className="space-y-2">
          <button onClick={() => handleChatSelect(1)} className="block">
            Chat 1
          </button>
          <button onClick={() => handleChatSelect(2)} className="block">
            Chat 2
          </button>
          <button onClick={() => handleChatSelect(3)} className="block">
            Chat 3
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
