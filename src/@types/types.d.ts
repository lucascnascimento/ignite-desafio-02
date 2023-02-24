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
  zipCode: string;
  street: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};
