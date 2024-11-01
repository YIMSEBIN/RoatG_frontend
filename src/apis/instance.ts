import axios from "axios";
import { QueryCache, QueryClient } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const createInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
