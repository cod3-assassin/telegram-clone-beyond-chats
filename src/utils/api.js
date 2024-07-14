// api.js

// api.js

import axios from "axios";

// Function to fetch all chats with metadata
export const getAllChats = async () => {
  try {
    const response = await axios.get(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );

    // Check if the expected data structure exists and is an array
    if (
      !response.data.data.data ||
      !response.data.data.data ||
      !Array.isArray(response.data.data.data)
    ) {
      console.error("Invalid data structure: data.data is not an array.");
      throw new Error("Invalid data structure: data.data is not an array.");
    }

    const creato = response.data.data.data.map((crt) => ({
      id: crt.creator.id,
      name: crt.creator.name,
      email: crt.creator.email,
    }));

    // Logging all names in creato array
    creato.forEach((item) => {
      console.log("Name:", item.name);
      console.log("ID:", item.id);
      console.log("Email:", item.email);
    });

    // Or access a specific index
    console.log("Name of first creator:", creato[0].name);

    // Extract the array of chats from response.data.data
    const chats = response.data.data.data.map((chat) => ({
      id: chat.id,
      createdBy: chat.created_by,
      orgId: chat.org_id,
      status: chat.status,
      leadScore: chat.lead_score,
      // Add more fields as needed
    }));

    return chats;
  } catch (error) {
    console.error("Error fetching all chats:", error);
    throw error;
  }
};

// Function to fetch chat messages for a specific chat_id
export const getChatMessages = async () => {
  try {
    const response = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${3888}`
    );
    console.log("Responce :", response);
    return response.data.data.messages.map((message) => ({
      id: message.id,
      senderId: message.sender_id,
      message: message.message,
      timestamp: message.timestamp,
      // Add other message details as needed
    }));
  } catch (error) {
    console.error(`Error fetching chat messages for chat_id ${chatId}:`, error);
    throw error;
  }
};
