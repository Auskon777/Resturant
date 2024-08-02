import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import balanceReducer from "../BalanceSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    balance: balanceReducer,
  },
});

export default store;
