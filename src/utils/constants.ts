export const ROUTES = {
  home: "/",
  checkout: "/checkout",
  success: "success",
};

export const CREDIT_CARD = "creditCard";
export const DEBIT_CARD = "debitCard";
export const MONEY = "money";

export const PAYMENT_OPTIONS = [CREDIT_CARD, DEBIT_CARD, MONEY] as const;
