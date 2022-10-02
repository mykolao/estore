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
    updateItem(state, { payload }: Action<TCartItem>) {
      state.items = state.items.map(item =>
        item.itemId === payload.itemId ? payload : item,
      );
    },
    removeItem(state, { payload }: Action<TCartItem>) {
      state.items = state.items.filter(({ itemId }) => itemId !== payload.itemId);
    },
    incrementItemCount(state, { payload: id }: Action<string>) {
      const currentCount = state.items.find(({ itemId }) => itemId === id)!.quantity;
      state.items = state.items.map(item =>
        item.itemId === id ? { ...item, quantity: currentCount + 1 } : item,
      );
    },
    setSummary(state, { payload }: Action<CartSummary>) {
      state.summary = payload;
    },
  },
});

export const { reducer: cartReducer, actions: cartActions } = slice;
