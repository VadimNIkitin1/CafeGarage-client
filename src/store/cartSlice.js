import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../services/services";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  return await getCart();
});

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCart.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.cart = action.payload;
    },
    [fetchCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
