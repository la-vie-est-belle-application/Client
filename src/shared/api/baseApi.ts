import { env } from "@shared/constants/env";
import axios from "axios";

export const baseApi = axios.create({
  baseURL: env.baseUrl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
