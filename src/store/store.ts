import { configureStore } from '@reduxjs/toolkit';

import { appReducer } from 'store/app';
import { cartReducer } from 'store/cart';
import { categoryReducer } from 'store/category';
import { currencyReducer } from 'store/currency';
import { productReducer } from 'store/product';

const reducer = {
  app: appReducer,
  currency: currencyReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
};

const devTools = import.meta.env.DEV;

export const store = configureStore({
  reducer,
  devTools,
});
