import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./activeSlice";

export default configureStore({
  reducer: {
    activeTab: activeReducer,
  },
});
