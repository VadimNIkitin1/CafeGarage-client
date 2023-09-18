import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getCart,
  decreaseProduct,
  addToCart,
  getCartTotalPrice,
  clearCart,
  sendOrder,
} from "../services/services";

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

export const fetchTotalPrice = createAsyncThunk(
  "cart/fetchTotalPrice",
  async () => {
    return await getCartTotalPrice();
  }
);

export const onClearCart = createAsyncThunk("cart/onClearCart", async () => {
  return await clearCart();
});

export const onSendOrder = createAsyncThunk(
  "cart/onSendOrder",
  async (order, { dispatch }) => {
    console.log(order);
    await dispatch(sendOrder(order));
  }
);

const slice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
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
    [fetchTotalPrice.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTotalPrice.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.totalPrice = action.payload.total_price;
    },
    [fetchTotalPrice.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { incrementQuantity, decrementQuantity } = slice.actions;

export default slice.reducer;
