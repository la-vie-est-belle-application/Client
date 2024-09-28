import { env } from "@shared/constants/env";
import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: env.baseUrl,
};

export const axiosInstance = axios.create(config);
