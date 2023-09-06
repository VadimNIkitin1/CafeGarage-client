import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../services/services";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
