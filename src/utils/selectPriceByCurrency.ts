import { TCurrency, TPrice } from 'apollo/types';

export const selectPriceBuCurrency = (
  prices: TPrice[],
  { symbol: selectedSymbol }: TCurrency,
): TPrice => {
  const selectedPrice = prices.find(
    ({ currency: { symbol } }) => symbol === selectedSymbol,
  ) as TPrice;

  if (selectedPrice) {
    return selectedPrice;
  }

  return {
    currency: {
      symbol: '$',
      label: 'USD',
    },
    amount: 0,
  };
};
