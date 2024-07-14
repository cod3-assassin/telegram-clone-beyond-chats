import React, { useEffect, useState } from "react";
import { getAllChats, getChatMessages } from "../src/utils/api";

const FetchChats = () => {
  const [chatList, setChatList] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const chatData = await getAllChats();
        console.log("Fetched chat data:", chatData);
        setChatList(chatData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching chat list:", error);
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  const handleChatItemClick = async (chatId) => {
    try {
      const messagesData = await getChatMessages(chatId);
      console.log(`Fetched messages for chat ${chatId}:`, messagesData);
      setMessages(messagesData);
      setSelectedChatId(chatId);
    } catch (error) {
      console.error(`Error fetching messages for chat ${chatId}:`, error);
      setMessages([]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
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
              <div className="font-bold">{chat.senderName}</div>
              <div>{chat.lastMessage ? chat.lastMessage.message : ""}</div>
              <div>Unread: {chat.unreadCount}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-2/3 p-4">
        {selectedChatId ? (
          <div>
            <h2 className="text-lg font-bold">Chat Window</h2>
            <ul>
              {messages.map((message) => (
                <li key={message.id}>
                  <div className="font-bold">{message.senderId}</div>
                  <div>{message.message}</div>
                  <div>{message.timestamp}</div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-gray-500">Select a chat to view messages.</div>
        )}
      </div>
    </div>
  );
};

export default FetchChats;
