import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./components/CartSlice";
import balanceReducer from "./components/BalanceSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    balance: balanceReducer,
  },
});

export default store;
