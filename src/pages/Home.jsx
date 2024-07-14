import React from "react";
import { Link } from "react-router-dom";

const Home = ({ selectChat }) => {
  return (
    <div className="flex-grow overflow-auto">
      <header className="bg-white text-black p-4 flex items-center justify-between shadow-md">
        <h1 className="text-xl">Home Page Header</h1>
      </header>
      <div className="px-4 py-6">
        <div>Select a chat</div>
        {/* Example of chat list items */}
        <div>
          {/* <Link to="/chats/1" onClick={() => selectChat(1)}>
            Chat 1
          </Link>
          <Link to="/chats/2" onClick={() => selectChat(2)}>
            Chat 2
          </Link>
          <Link to="/chats/3" onClick={() => selectChat(3)}>
            Chat 3
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
