import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import modalSlice from './modalSlice';
import cartSlice from './cartSlice';
import messageSlice from './messageSlice';


const store = configureStore({
  reducer: { 
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    message: messageSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
  
export default store;