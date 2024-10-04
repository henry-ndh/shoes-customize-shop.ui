import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import cartReducer from './cart.slice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
