import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type FavoriteJob = {
  id: number;
  category: string;
  companyName: string;
  publicationDate: string;
  location: string;
  level: string;
};

type FavoriteJobsState = {
  favoriteJobs: FavoriteJob[];
};

const initialState: FavoriteJobsState = {
  favoriteJobs: [],
};

export const favoriteJobsSlice = createSlice({
  name: "favoriteJobs",
  initialState,
  reducers: {
    addFavoriteJob: (state, action) => {
      const isJobAlreadyFavorite = state.favoriteJobs.some(
        (job) => job.id === action.payload.id
      );

      if (!isJobAlreadyFavorite) {
        state.favoriteJobs.push(action.payload);
      }
    },
    removeFavoriteJob: (state, action) => {
      state.favoriteJobs = state.favoriteJobs.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const favoriteJobsSelector = (state: RootState) =>
  state.favoriteJobs.favoriteJobs;

export const { addFavoriteJob, removeFavoriteJob } = favoriteJobsSlice.actions;

export default favoriteJobsSlice.reducer;
