import { NextApiRequest, NextApiResponse } from "next";

const sendMessageToWhatsApp = async (toNumber: string, messageText: string) => {
  const API_KEY = "9aac431b"; // Replace with your API Key
  const FROM_NUMBER = "14157386102"; // Replace with your WhatsApp number

  const url = "https://messages-sandbox.nexmo.com/v1/messages";

  const auth = "Basic " + btoa(`${API_KEY}:ATFdGPUKKkx4WeDd`);

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: auth,
  });

  const requestBody = {
    from: FROM_NUMBER,
    to: toNumber,
    message_type: "text",
    text: messageText,
    channel: "whatsapp",
  };

  const options: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(requestBody),
  };

  try {
    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      console.log("Message sent:", data);
      return data;
    } else {
      console.error("Error sending message:", response.statusText);
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Example usage:
sendMessageToWhatsApp(
  "$TO_NUMBER",
  "This is a WhatsApp Message sent from the Messages API"
);
