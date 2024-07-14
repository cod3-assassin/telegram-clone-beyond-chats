import React, { useState } from "react";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex p-4 border-t border-gray-200">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-grow p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSend}
        className="ml-4 p-2 bg-blue-600 text-white rounded"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
