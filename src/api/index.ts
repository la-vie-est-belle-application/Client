import axios, { AxiosError } from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_LOCALHOST,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleApiError = (error: unknown) => {
  if (error instanceof AxiosError) {
    throw new Error(error.response ? error.response.data : error.message);
  } else {
    throw new Error(String(error));
  }
};
