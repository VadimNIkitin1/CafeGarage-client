import { createSlice } from "@reduxjs/toolkit";

const quantitySlice = createSlice({
  name: "quantity",
  initialState: {
    quantity: 0,
  },
  reducers: {
    incrementQuantity(state) {
      state.quantity = state.quantity + 1;
    },
    decrementQuantity(state) {
      state.quantity = state.quantity - 1;
    },
  },
});

export const { incrementQuantity, decrementQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;
