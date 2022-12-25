import { createReducer } from "@reduxjs/toolkit";

const initialstate = {};
export const CartReducer = createReducer(initialstate, {
  // add to cart product 
  addCartrequest: (state) => {
    state.loading = true;
  },
  addCartSuccess: (state, action) => {
    state.loading = true;
    state.CartProduct = action.payload;
  },
  addCartFaild: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },
});
