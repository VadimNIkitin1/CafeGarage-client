import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
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

export const { incrementQuantity, decrementQuantity } = slice.actions;

export default slice.reducer;
