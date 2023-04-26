// src/userInfoSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    lastName: "",
    dateOfBirth: "",
    mobileNumber: "",
    biography: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    // Add other reducers for lastName, dateOfBirth, mobileNumber, and biography
  },
});

export const { setName } = userInfoSlice.actions;
export default userInfoSlice.reducer;
