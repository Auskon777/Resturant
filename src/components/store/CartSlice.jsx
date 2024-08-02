import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({...newItem, quantity: 1});
      } else {
        existingItem.quantity++;
      }
    },

    purchaseSuccess(state) {
      state.items = [];
      state.totalPrice = 0;
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

export const {purchaseSuccess, addItem, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
