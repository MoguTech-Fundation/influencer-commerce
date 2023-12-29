import { createSlice } from "@reduxjs/toolkit";
import { productAddToCart } from "./CartThunks";
import { STATUS } from "../constants";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(productAddToCart.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(productAddToCart.fulfilled, (state, action) => {
      state.status = STATUS.SUCCESSED;
      state.products = action.payload.data;
    });
    builder.addCase(productAddToCart.rejected, (state, action) => {
      console.error("productAddToCart.rejected", state, action);
      state.status = STATUS.FAILED;
      state.error = action.error;
    });
  },
});

export default CartSlice.reducer;
