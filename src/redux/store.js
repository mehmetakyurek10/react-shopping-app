import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import categoryReducer from "./categorySlice"

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    category: categoryReducer,
  },
});