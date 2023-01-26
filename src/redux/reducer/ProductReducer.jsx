import { createReducer } from "@reduxjs/toolkit";

const initialstate = {};
export const productReducer = createReducer(initialstate, {
  getProductdataRequest: (state) => {
    state.loading = true;
  },
  getProductdataSuccess: (state, action) => {
    state.loading = false;
    state.Products = action.payload;
    state.FilterProducts = action.payload;
  },
  getProductdataFaild: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },
  // single product get 
  getproductdetailsRequest: (state) => {
    state.loading = true;
  },
  getproductdetailsSuccess: (state, action) => {
    state.loading = false;
    state.Product = action.payload;
  },
  getproductdetailsFaild: (state, action) => {
    state.loading = true;
    state.error = action.payload;
  },
  // filter price here 
  setFilterPriceRequest: (state) => {
    state.loading = true
  },
  setFilterPriceSuccess: (state, action) => {
    state.loading = false
    state.Products = action.payload
  },
  setFilterPriceFaild: (state, action) => {
    state.loading = false
    state.error = action.payload
  },
  // filterDiscount here 
  filterDiscountRequest: (state) => {
    state.loading = true
  },
  filterDiscountSuccess: (state, action) => {
    state.loading = false
    state.Products = action.payload
  },
  filterDiscountFaild: (state, action) => {
    state.loading = false
    state.error = action.payload
  },

  // setFiltersubCategory here 
  setFiltersubCategoryRequest: (state) => {
    state.loading = true
  },
  setFiltersubCategorySuccess: (state, action) => {
    state.loading = false
    state.Products = action.payload
  },
  setFiltersubCategoryFaild: (state, action) => {
    state.loading = false
    state.error = action.payload
  },

  // SortByprice here 
  SortBypriceRequest: (state) => {
    state.loading = true
  },
  SortBypriceSuccess: (state, action) => {
    state.loading = false
    state.Products = action.payload
  },
  SortBypriceFaild: (state, action) => {
    state.loading = false
    state.error = action.payload
  },

  // add to cart product 
  addCartrequest: (state) => {
    state.loading = true;
  },
  addCartSuccess: (state, action) => {
    state.loading = false;
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
