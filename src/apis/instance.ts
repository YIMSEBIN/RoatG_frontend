import axios from "axios";
import { QueryCache, QueryClient } from "@tanstack/react-query";

const BASE_URL = import.meta.env.VITE_BASE_URL;
// const BASE_URL = "http://35.225.167.203:8080/";

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
