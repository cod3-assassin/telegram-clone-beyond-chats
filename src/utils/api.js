import axios from "axios";

const API_BASE_URL = "https://devapi.beyondchats.com/api";

export const getAllChats = async () => {
  const response = await axios.get(`${API_BASE_URL}/get_all_chats`);
  return response.data;
};

export const getChatMessages = async (chatId) => {
  const response = await axios.get(
    `${API_BASE_URL}/get_chat_messages?chat_id=${chatId}`
  );
  console.log("REsponce", response);
  return response.data;
};
