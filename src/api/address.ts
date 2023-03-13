import { cepApi } from "./config";

export const getAddress = async (cep: string) => {
  const response = await cepApi.get(`/${cep}/json`);

  if (response.data.erro) {
    throw new Error();
  }

  return response.data;
};
