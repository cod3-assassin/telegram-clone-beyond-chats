import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const ChatList = ({ selectChat, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dummyChats = [
    { id: 1, name: "Chat 1", lastMessage: "Hello!" },
    { id: 2, name: "Chat 2", lastMessage: "Hi there!" },
    { id: 3, name: "Chat 3", lastMessage: "Good morning!" },
  ];

  useEffect(() => {
    // Handle any necessary logic when the location changes
    if (location.pathname === "/") {
      // You can add logic here if needed when navigating back to the chat list
    }
  }, [location]);

  const handleChatClick = (chatId) => {
    selectChat(chatId);
    navigate(`/chats/${chatId}`);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Header toggleSidebar={toggleSidebar} />
      {dummyChats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => handleChatClick(chat.id)}
          className="flex items-center p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100 rounded-md transition-colors duration-200 ease-in-out"
        >
          <div className="flex-shrink-0 rounded-full h-12 w-12 bg-blue-500 text-white flex items-center justify-center">
            {chat.name.substring(0, 1)}
          </div>
          <div className="ml-3">
            <div className="font-semibold">{chat.name}</div>
            <div className="text-sm text-gray-500">{chat.lastMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
