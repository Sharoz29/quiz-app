import { configureStore } from "@reduxjs/toolkit";
import optionsReducer from "./options/optionsSlice";
import optionsDataReducer from "./optionsdata/optionsdataSlice";

export const store = configureStore({
  reducer: {
    options: optionsReducer,
    optionsData: optionsDataReducer,
  },
});
