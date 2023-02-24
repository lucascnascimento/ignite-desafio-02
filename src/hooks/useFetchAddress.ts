import { useQuery } from "@tanstack/react-query";
import { Product, ZipCodeAdress } from "../@types/types";
import { getAddress } from "../api/address";

export const useFetchAdress = (cep: string) =>
  useQuery<{ zipCodeAdress: ZipCodeAdress }, Error>(["address"], () =>
    getAddress(cep)
  );
