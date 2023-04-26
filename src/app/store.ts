import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userInfoSlice from "../features/users/userInfoSlice";

export const store = configureStore({
  reducer: {
    userInfo: userInfoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
