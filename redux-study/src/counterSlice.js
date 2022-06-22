import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("increment 작동!");
      console.log(state.value);
      state.value += 1;
    },
    decrement: (state) => {
      console.log("decrement 작동!");
      console.log(state.value);
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("incrementByAmount 작동!");
      console.log(state.value);
      console.log(action.payload);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
