import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://testing-project-9g3u.onrender.com/cart";
// const URL = "http://localhost:3000/cart";


// Create a thunk to fetch all items from the cart
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  try {
    const response = await axios.get(`${URL}/getall`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error; // Propagate the error further
  }
});

// Add a thunk to add an item to the cart
export const addItem = createAsyncThunk("cart/addItem", async (item) => {
  try {
    const response = await axios.post(`${URL}/create`, item, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error; // Propagate the error further
  }
});
export const clearItem = createAsyncThunk("cart/clearItem", async () => {
  try {
    const response = await axios.delete(`${URL}/deletecards`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error; // Propagate the error further
  }
});
export const clearItemById = createAsyncThunk("cart/clearItemById", async (id) => {
  try {
    const response = await axios.delete(`${URL}/delete/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error; // Propagate the error further
  }
});


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder
    .addCase(addItem.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(clearItem.fulfilled, (state, action) => {
      state.items = [];
    });
    builder.addCase(clearItemById.fulfilled, (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
    });

  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
