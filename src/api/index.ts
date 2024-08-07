import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
