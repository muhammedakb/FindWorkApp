import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import loginSlice from "./loginSlice";
import favoriteJobsSlice from "./favoriteJobsSlice";

export const store = configureStore({
  reducer: {
    user: loginSlice,
    favoriteJobs: favoriteJobsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
