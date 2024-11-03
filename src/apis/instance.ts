import axios from "axios";
import { QueryCache, QueryClient } from "@tanstack/react-query";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = "https://54a4-2001-e60-9141-92a3-948e-8db5-8ed9-ab1f.ngrok-free.app";

const createInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "ngrok-skip-browser-warning": true,
    },
  });

  return instance;
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => console.log(`Something went wrong: ${error.message}`),
  }),
});

export const clientInstance = createInstance();
