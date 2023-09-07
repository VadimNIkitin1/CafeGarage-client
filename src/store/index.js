import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import categoriesReducer from "./categoriesSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
