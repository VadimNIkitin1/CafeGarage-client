import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import quantityReducer from "./quantitySlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    quantity: quantityReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
