export type TAttribute = {
  displayValue: string;
  id: string;
  value: string;
};

export type TAttributeSet = {
  id: string;
  items: TAttribute[];
  name: string;
  type: string;
};

export type TCategory = {
  name: string;
  products: TProduct[];
};

export type TCurrency = {
  label: string;
  symbol: string;
};

export type TPrice = {
  amount: number;
  currency: TCurrency;
};

export type TProduct = {
  attributes: TAttributeSet[];
  brand: string;
  category: string;
  description: string;
  gallery: string[];
  id: string;
  inStock: boolean;
  name: string;
  prices: TPrice[];
};
