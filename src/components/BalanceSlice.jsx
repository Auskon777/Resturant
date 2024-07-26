import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  balance: 0.0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    addMoney: (state, action) => {
      state.balance = parseFloat((state.balance + action.payload).toFixed(2));
    },
    payment: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance = parseFloat((state.balance - action.payload).toFixed(2));
      }
    },
  },
});

export const {addMoney, payment} = balanceSlice.actions;

export default balanceSlice.reducer;
