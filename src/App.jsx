import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import Home from "./pages/Home";
import FetchChats from "./FetchChats";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selectChat = (chatId) => {
    setSelectedChat(chatId);
    setIsSidebarOpen(false); // Close sidebar on mobile after selecting a chat
  };

  return (
    <Router>
      <div className="h-screen flex flex-col">
        <div className="flex flex-grow overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex flex-grow overflow-hidden">
            {isMobile ? (
              <div className="w-full">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ChatList
                        selectChat={selectChat}
                        toggleSidebar={toggleSidebar}
                      />
                    }
                  />
                  <Route path="/chats/:chatId" element={<ChatWindow />} />
                </Routes>
              </div>
            ) : (
              <>
                <div className="w-1/4 border-r border-gray-200">
                  <ChatList
                    selectChat={selectChat}
                    toggleSidebar={toggleSidebar}
                  />
                </div>
                <div className="w-3/4">
                  <Routes>
                    <Route
                      path="/"
                      element={<Home selectedChat={selectedChat} />}
                    />
                    <Route path="/chats/:chatId" element={<ChatWindow />} />
                  </Routes>
                </div>
              </>
            )}
          </div>
        </div>
        <FetchChats />
      </div>
    </Router>
  );
};

export default App;
