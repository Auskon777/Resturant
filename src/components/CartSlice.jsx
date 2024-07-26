import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const {productId, quantity, price} = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
        state.items[indexProductId].price += price;
      } else {
        state.items.push({productId, quantity, price});
      }
    },
    purchaseSuccess(state) {
      state.items = [];
    },
    changeQuantity(state, action) {
      const {productId, quantity} = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter(
          (item) => productId !== action.payload
        );
      }
    },
  },
});

export const {addToCart, purchaseSuccess, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;
