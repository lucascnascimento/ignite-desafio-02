export const formatMoney = (value: number, isCents = true) => {
  let money = value;

  if (isCents) money = value / 100;

  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(money);
};
