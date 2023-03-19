import { PAYMENT_OPTIONS } from "../utils/constants";

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

export type PaymentOption = typeof PAYMENT_OPTIONS[number];

export type CheckoutPayload = {
  complement?: string | undefined;
  number: number;
  zipCode: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentType: PaymentOption;
  products: CartProduct[];
};
