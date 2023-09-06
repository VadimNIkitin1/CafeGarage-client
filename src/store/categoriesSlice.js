import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../services/services";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    return await getCategories();
  }
);

const slice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = null;
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
