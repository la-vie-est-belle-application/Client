import { env } from "@constants/url";
import axios, { AxiosError } from "axios";

export const API = axios.create({
  baseURL: env.baseURL,
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
