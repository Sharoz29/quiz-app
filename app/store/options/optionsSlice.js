import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: [],
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    addOptions: {
      reducer(state, action) {
        state.options.push(action.payload);
      },
      prepare(totalNumber, topic, difficulty) {
        return {
          payload: {
            totalNumber,
            topic,
            difficulty,
          },
        };
      },
    },
  },
});

export const selectAllOptions = (state) => state.options;

const { actions, reducer } = optionsSlice;

export const { addOption } = actions;

export default reducer;
