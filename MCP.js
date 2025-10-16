import axios from "axios";
import { config } from "dotenv";
config();

const headers = {
  Authorization: `Bearer ${process.env.VAPI_TOKEN}`,
  "Content-Type": "application/json",
};

const payload = {
  assistantId: process.env.ASSISTANT_ID,
  phoneNumberId: process.env.PHONE_NUMBER_ID,
  customer: {
    number: process.env.CUSTOMER_NUMBER,
  },
};

axios
  .post("https://api.vapi.ai/call/phone", payload, { headers })
  .then((res) => console.log("Call started:", res.data))
  .catch((err) => console.error("Error:", err.response?.data || err.message));
