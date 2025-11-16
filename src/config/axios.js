import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    "https://mern-chat-app-backend-jmse.onrender.com",
});

export default API;
