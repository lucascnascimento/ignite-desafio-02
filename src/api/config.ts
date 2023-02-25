import axios from "axios";

export const api = axios.create({
  baseURL: "https://cofee-delivery.com/api",
});

export const cepApi = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
