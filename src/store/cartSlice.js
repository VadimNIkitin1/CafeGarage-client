import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart, decreaseProduct, addToCart } from "../services/services";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  return await getCart();
});

const deleteProduct = createAsyncThunk("cart/deleteProduct", async (id) => {
  return await decreaseProduct(id);
});

const addProduct = createAsyncThunk("cart/addProduct", async (id) => {
  return await addToCart(id);
});

export const onDecreaseProduct = createAsyncThunk(
  "cart/onDecreaseProduct",
  async (id, { dispatch }) => {
    await dispatch(deleteProduct(id));
    dispatch(decrementQuantity());
  }
);

export const onAddProduct = createAsyncThunk(
  "cart/onAddProduct",
  async (id, { dispatch }) => {
    await dispatch(addProduct(id));
    dispatch(incrementQuantity());
  }
);

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    status: null,
    error: null,
  },
  reducers: {
    incrementQuantity(state) {
      state.quantity = state.quantity + 1;
    },
    decrementQuantity(state) {
      state.quantity = state.quantity - 1;
    },
  },
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

export const { incrementQuantity, decrementQuantity } = slice.actions;

export default slice.reducer;
