import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/app';
import { cartReducer } from 'store/cart';
import { categoryReducer } from 'store/category';
import { currencyReducer } from 'store/currency';
import { minicartReducer } from 'store/minicart';
import { productReducer } from 'store/product';

const reducer = {
  app: appReducer,
  currency: currencyReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  minicart: minicartReducer,
};

const devTools = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer,
  devTools,
});
