import { createSlice } from '@reduxjs/toolkit';

import { initialState } from 'store/cart/initialState';
import { TCartItem, CartState, CartSummary } from 'store/cart/types';
import { Action } from 'store/types';

const name = 'cart';

const slice = createSlice({
  name,
  initialState,
  reducers: {
    setCart(state, { payload }: Action<CartState>) {
      return payload;
    },
    pushItem(state, { payload }: Action<TCartItem>) {
      state.items.push(payload);
    },
    incrementItemCount(state, { payload: id }: Action<string>) {
      const currentCount = state.items.find(({ itemId }) => itemId === id)!.quantity;
      state.items = state.items.map(item =>
        item.itemId === id ? { ...item, quantity: currentCount + 1 } : item,
      );
    },
    decrementItemCount(state, { payload: id }: Action<string>) {
      const currentCount = state.items.find(({ itemId }) => itemId === id)!.quantity;

      if (currentCount > 1) {
        state.items = state.items.map(item =>
          item.itemId === id ? { ...item, quantity: currentCount - 1 } : item,
        );
      } else {
        state.items = state.items.filter(item => item.itemId !== id);
      }
    },
    setSummary(state, { payload }: Action<CartSummary>) {
      state.summary = payload;
    },
  },
});

export const { reducer: cartReducer, actions: cartActions } = slice;
