import React from "react";

const Message = ({ sender, text, timestamp }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="font-bold">{sender}</div>
      <div>{text}</div>
      <div className="text-sm text-gray-500">
        {new Date(timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Message;
