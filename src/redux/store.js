import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import categoryReducer from "./categorySlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    category: categoryReducer,
    products: productsReducer
  },
});