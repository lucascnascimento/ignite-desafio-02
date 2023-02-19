import { useQuery } from "@tanstack/react-query";
import { Product } from "../@types/types";
import { getProducts } from "../api/products";

export const useFetchProducts = () =>
  useQuery<Product[], Error>(["products"], getProducts);
