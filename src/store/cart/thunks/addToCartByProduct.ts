import { createAsyncThunk } from '@reduxjs/toolkit';

import { TAttributeSet, TProduct } from 'apollo/types';
import { cartActions } from 'store/cart/slice';
import { increaseItemCount } from 'store/cart/thunks/increaseItemCount';
import { persistCart } from 'store/cart/thunks/persistCart';
import { updateCartSummary } from 'store/cart/thunks/updateCartSummary';
import { TCartItem } from 'store/cart/types';
import { ThunkApi } from 'store/types';
import { compareCartItems } from 'utils';

const typePrefix = 'addToCartByProduct';

const { pushItem } = cartActions;

interface ProductProps {
  product: TProduct;
  selectedAttributes: TAttributeSet[];
}

export const addToCartByProduct = createAsyncThunk<void, ProductProps, ThunkApi>(
  typePrefix,
  async ({ product, selectedAttributes }, { dispatch, getState }) => {
    // Construct new item object
    const itemId = `${product.id}@${Date.now()}`;

    const newItem: TCartItem = {
      itemId,
      product,
      quantity: 1,
      selectedAttributes,
    };

    // Find similar product with equal attributes
    const similarItem = getState().cart.items.find(item =>
      compareCartItems(newItem, item),
    );

    if (similarItem) {
      dispatch(increaseItemCount(similarItem.itemId));
    } else {
      dispatch(pushItem(newItem));
    }

    dispatch(updateCartSummary());
    dispatch(persistCart());
  },
);
