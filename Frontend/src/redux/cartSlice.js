import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://testing-project-9g3u.onrender.com/cart";

export const addItem = createAsyncThunk("cart/addItem", async (item) => {
  const response = axios.post(`${URL}/create`, item, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
