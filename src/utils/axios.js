import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // withCredentials: true
});




// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("request ---->", config);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response ---->", response);
    return response;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
