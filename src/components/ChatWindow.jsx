import React from "react";
import { useParams } from "react-router-dom";

const ChatWindow = () => {
  const { chatId } = useParams();

  return (
    <div>
      <h2>Chat {chatId}</h2>
      <p>This is the chat window for chat {chatId}.</p>
    </div>
  );
};

export default ChatWindow;
