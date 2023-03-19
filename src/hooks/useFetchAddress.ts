import { useQuery } from "@tanstack/react-query";
import { Product, ZipCodeAdress } from "../@types/types";
import { getAddress } from "../api/address";

export const useFetchAdress = (zipCode: string, isEnabled: boolean) =>
  useQuery<ZipCodeAdress, Error>(
    ["address", zipCode],
    () => getAddress(zipCode),
    {
      enabled: isEnabled,
    }
  );
