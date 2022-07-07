import { TCurrency } from 'apollo/types';

const KEY = 'STORE_CURRENCY';

const getLocalCurrency = (): TCurrency | null => {
  const item = localStorage.getItem(KEY);

  return item ? JSON.parse(item) : null;
};

const setLocalCurrency = (value: TCurrency): void =>
  localStorage.setItem(KEY, JSON.stringify(value));

export const localCurrency = { getLocalCurrency, setLocalCurrency };
