import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "../services/services";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return await getProductById(id);
  }
);

const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
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
    [fetchProductById.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.product = action.payload;
    },
    [fetchProductById.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
