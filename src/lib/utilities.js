export const formatMoney = (price, locale = "fr-FR", currency = "EUR") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(price);
};
