import { useQuery } from "@tanstack/react-query";
import { Product } from "../@types/types";
import { getProducts } from "../api/products";

export const useFetchProducts = () =>
  useQuery<{ products: Product[] }, Error>(["products"], getProducts);
