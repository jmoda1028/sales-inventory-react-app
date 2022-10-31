import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: "message",
  initialState: {
    errorMessage: "",
    successMessage: "",
  },
  reducers: {
    setErrorMessage: (state, action) => {
        state.errorMessage = action.payload;
    },
    setSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
  },
    clearMessage: () => {
      return initialState;
    },
  },
});


export const messageActions = messageSlice.actions;
export default messageSlice;