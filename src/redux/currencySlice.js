import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
  currencies: {
    TRY: 32.5,
    USD: 1,
    EUR: 0.9,
    GBP: 0.7,
  },
  selectedCurrency: "USD"
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    handleSetCurrency: (state,action) => {
      state.selectedCurrency = action.payload;
    }
  },
});

export const { handleSetCurrency } = currencySlice.actions
export default currencySlice.reducer;