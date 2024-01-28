import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from "../features/cart/cartSlice";
import modalReducer from "../features/modal/modelSlice"
 
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal:modalReducer
  },
});
