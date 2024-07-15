import React, { useEffect, useState } from "react";
import { getAllChats, getChatMessages } from "./utils/api";

const FetchChats = () => {
  const [chatList, setChatList] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getAllChats();

        if (response.status === "success") {
          const tempChatList = response.data.data.map((chat) => ({
            id: chat.creator.id,
            name: chat.creator.name,
            lead_score: chat.lead_score,
            msg_count: chat.msg_count,
          }));
          setChatList(tempChatList);
          setLoading(false);
        } else {
          throw new Error(`Failed to fetch chat data: ${response.message}`);
        }
      } catch (error) {
        console.error("Error fetching chat list:", error);
        setError(error.message);
      }
    };

    fetchChats();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleChatItemClick = async (chatId) => {
    try {
      const response = await getChatMessages(chatId);

      if (response.status === "success") {
        setMessages(response.data.messages || []);
        setSelectedChatId(chatId);
      } else {
        throw new Error(
          `Failed to fetch messages for chat ${chatId}: ${response.message}`
        );
      }
    } catch (error) {
      console.error(`Error fetching messages for chat ${chatId}:`, error);
      setMessages([]);
    }
  };

  // Render loading state or error
  if (loading || chatList === null) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/3 border-r">
        <h2 className="text-lg font-bold p-4">Chat List</h2>
        <ul>
          {chatList.map((chat) => (
            <li
              key={chat.id}
              className={`p-4 cursor-pointer ${
                selectedChatId === chat.id ? "bg-gray-200" : ""
              }`}
              onClick={() => handleChatItemClick(chat.id)}
            >
              <div className="font-bold">{chat.name}</div>
              <div>Lead Score: {chat.lead_score}</div>
              <div>Messages: {chat.msg_count}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        {selectedChatId ? (
          <div>
            <h2 className="text-lg font-bold">Chat Window</h2>
            <div className="border rounded-lg overflow-hidden h-full">
              <ul className="divide-y divide-gray-200 overflow-y-auto">
                {messages.map((message) => (
                  <li
                    key={message.id}
                    className={`p-4 ${
                      message.isSent ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {!message.isSent && (
                          <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                            {message.senderId.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div className="ml-2">
                          <div className="font-bold">{message.senderId}</div>
                          <div className="text-sm text-gray-600">
                            {message.message}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(message.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="text-gray-500">Select a chat to view messages.</div>
        )}
      </div>
    </div>
  );
};

export default FetchChats;
