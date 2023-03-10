import { useQuery } from "@tanstack/react-query";
import { Product, ZipCodeAdress } from "../@types/types";
import { getAddress } from "../api/address";

export const useFetchAdress = (zipCode: string) =>
  useQuery<ZipCodeAdress, Error>(["address"], () => getAddress(zipCode), {
    enabled: zipCode?.length === 8,
  });
