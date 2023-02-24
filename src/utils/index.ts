type Options = {
  isCents?: boolean;
  hasPrefix?: boolean;
};

type FormatMoney = (value: number, options?: Options) => string;

const DEFAULT_OPTIONS = { isCents: true, hasPrefix: false };

export const formatMoney: FormatMoney = (
  value: number,
  options = DEFAULT_OPTIONS
) => {
  const { hasPrefix, isCents } = options;
  let money = value;

  if (isCents) money = value / 100;

  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: hasPrefix ? "BRL" : undefined,
    style: hasPrefix ? "currency" : "decimal",
  }).format(money);
};
