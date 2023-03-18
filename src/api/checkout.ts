import { CheckoutPayload } from "../@types/types";
import { api } from "./config";

export const postCheckout = async (payload: CheckoutPayload) => {
  const response = await api.post("/checkout", { ...payload });

  return response.data;
};
