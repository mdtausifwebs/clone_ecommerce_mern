import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "./reducer/CartReducer";
import { productReducer } from "./reducer/ProductReducer";
import { userReducer } from "./reducer/UserReducer";
const store = configureStore({
  reducer: {
    Products: productReducer,
    Users: userReducer,
    Cart: CartReducer,
  },
});

export default store;
