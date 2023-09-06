import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";
import quantityReducer from "./quantitySlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
    quantity: quantityReducer,
  },
});
