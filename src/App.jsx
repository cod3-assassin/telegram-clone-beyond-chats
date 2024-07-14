import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatList from "./components/ChatList";
import Home from "./pages/Home";

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
        {/* <Header toggleSidebar={toggleSidebar} /> */}
        <div className="flex flex-grow overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex flex-grow overflow-hidden">
            <div
              className={`${
                isMobile ? "hidden" : "block"
              } md:block w-1/4 border-r border-gray-200`}
            >
              <ChatList selectChat={selectChat} toggleSidebar={toggleSidebar} />
            </div>
            <div className="w-full md:w-3/4">
              <Routes>
                <Route
                  path="/"
                  element={
                    isMobile ? (
                      selectedChat ? (
                        <ChatWindow chatId={selectedChat} />
                      ) : (
                        <ChatList
                          selectChat={selectChat}
                          toggleSidebar={toggleSidebar}
                        />
                      )
                    ) : (
                      <Home selectChat={selectChat} />
                    )
                  }
                />
                <Route
                  path="/chats/:chatId"
                  element={<ChatWindow chatId={selectedChat} />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
