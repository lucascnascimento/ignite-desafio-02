import axios from "axios";

export const api = axios.create({
  baseURL: "https://coffee-delivery.com/api",
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
