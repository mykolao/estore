import { createAsyncThunk } from '@reduxjs/toolkit';

import { initialState } from 'store/cart/initialState';
import { cartActions } from 'store/cart/slice';
import { ThunkApi } from 'store/types';

const typePrefix = 'updateCartSummary';
const { setSummary } = cartActions;

export const updateCartSummary = createAsyncThunk<void, void, ThunkApi>(
  typePrefix,
  async (_, { getState, dispatch }) => {
    const { summary, items } = getState().cart;

    if (!items.length) {
      dispatch(setSummary(initialState.summary));
      return;
    }

    const updatedSummary = { ...summary };
    updatedSummary.numberOfItems = items.reduce((sum, item) => item.quantity + sum, 0);

    updatedSummary.totalSum = items[0].product.prices.map(({ currency, amount }) => ({
      currency,
      amount: amount * items[0].quantity,
    }));

    for (let i = 1; i < items.length; i += 1) {
      const item = items[i];

      item.product.prices.forEach((price, pIndex) => {
        updatedSummary.totalSum[pIndex].amount += price.amount * item.quantity;
      });
    }

    updatedSummary.taxValue = updatedSummary.totalSum.map(({ currency, amount }) => ({
      currency,
      amount: amount * (updatedSummary.taxPercentage / 100),
    }));

    dispatch(setSummary(updatedSummary));
  },
);
