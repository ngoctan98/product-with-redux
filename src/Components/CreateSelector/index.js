import { createSelector} from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.product.cart;
export const totalArgent = createSelector(cartItemSelector,
    (cartItem) => cartItem.reduce((total, item) => total + item.quanlity * item.price_now,0)
         
    )
