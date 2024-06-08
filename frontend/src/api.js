/**
 * api.js is interceptor.
 *
 * Interceptor intercepts any request that is going to be sent by the user(s),
 * and will automatically add headers so that is not necessary to do it manually in every request
 */
import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api