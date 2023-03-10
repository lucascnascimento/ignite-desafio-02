export type Product = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  valueCents: number;
  isAvailable: boolean;
  imgSrc: string;
};

export type CartProduct = Product & { quantity: number };

export type ZipCodeAdress = {
  bairro: string;
  cep: string;
  localidade: string;
  logradouro: string;
  uf: string;
};
