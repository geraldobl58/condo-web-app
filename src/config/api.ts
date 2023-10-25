import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api" || process.env.NEXT_PUBLIC_URL,
});

export { api };
