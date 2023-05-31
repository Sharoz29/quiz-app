import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = [];

const BASE_URL = "https://opentdb.com/api_category.php";

export const fetchOptionsData = createAsyncThunk(
  "get/fetchOptionsData",
  async () => {
    try {
      const response = await axios.get(BASE_URL);

      return response.data.trivia_categories;
    } catch (err) {
      return err.message;
    }
  }
);

const optionsDataSlice = createSlice({
  name: "optionsData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchOptionsData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllOptionsData = (state) => {
  console.log(state.optionsData);
  return state.optionsData;
};

export default optionsDataSlice.reducer;
