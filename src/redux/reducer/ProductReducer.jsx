import { createReducer } from "@reduxjs/toolkit";

const initialstate = {};
export const productReducer = createReducer(initialstate, {
  getproductRequest: (state) => {
    state.loading = true;
  },
  getproductSuccess: (state, action) => {
    state.loading = false;
    state.Products = action.payload;
    state.FilterProducts = action.payload;
  },
  getproductFail: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },
  // single product get 
  getproductRequestdetails: (state) => {
    state.loading = true;
  },
  getproductSuccessdetails: (state, action) => {
    state.loading = true;
    state.Product = action.payload;
  },
  getproductFaildetails: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },

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
  // search  product 
  SearchProductRequest: (state) => {
    state.loading = true;
  },
  SearchProductSuccess: (state, action) => {
    state.loading = true;
    state.CartProduct = action.payload;
  },
  SearchProductFail: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },
  setFilterProducts: (state, action) => {
    state.FilterProducts = action.payload;
  },
});
