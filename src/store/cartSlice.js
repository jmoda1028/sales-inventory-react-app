import { createSlice } from '@reduxjs/toolkit';
// import axios from '../util/api';

// export const createTransaction = createAsyncThunk(
//   "cart/createTransact",
//   async ({ item }) => {
//     try{
//       const res = await axios.post('transactions/', { 
//         item
//         });

//         return res.data;
//     }
//     catch(error){
//       console.log(error);
//     }
//   }
// );

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  tax: 0,
  changed: false,
  loading: false,
  error: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       
        addItemToCart(state, action) {
          const newItem = action.payload;
          const updatedTotalAmount =
                          state.totalAmount + newItem.price * newItem.quantity;

          const updatedTotalQuantity = 
                          state.totalQuantity + newItem.quantity;

          const updatedTax = (state.totalAmount / 1.12) * 0.12;         

          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === newItem.id
          );
          const existingCartItem = state.items[existingCartItemIndex];
          let updatedItems;

          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            updatedItems = state.items.concat(newItem);
          }

          return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalQuantity: updatedTotalQuantity,
            tax: updatedTax,
          };
      
        },

        removeItemFromCart(state, action){
          const id = action.payload;
          const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === id
          );
          const existingItem = state.items[existingCartItemIndex];
          const updatedTotalAmount = state.totalAmount - existingItem.price;
          let updatedItems;
          if (existingItem.quantity === 1) {
            updatedItems = state.items.filter(item => item.id !== id);
          } else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          }
          const updatedTotalQuantity = state.totalQuantity - 1;

          const updatedTax = (state.totalAmount / 1.12) * 0.12;                
      
          return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            totalQuantity: updatedTotalQuantity,
            tax: updatedTax,
          };
        },

        clearCart() {
          return initialState;
        },
    },
    
    
    // extraReducers: {
    //   [createTransaction.pending]: (state, action) => {
    //     state.loading = true;
    //   },
    //   [createTransaction.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.post = [action.payload];
    //   },
    //   [createTransaction.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
    // },

});

export const cartActions = cartSlice.actions;

export default cartSlice;