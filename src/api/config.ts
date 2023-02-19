import axios from "axios";

export const api = axios.create({
  baseURL: "https://cofee-delivery.com/api",
});
