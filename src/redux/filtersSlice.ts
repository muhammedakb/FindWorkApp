import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type FilterState = {
  filters: string[];
};

const initialState: FilterState = {
  filters: [""],
};

// https://www.themuse.com/api/public/jobs?
// company=Spryker&company=Klaviyo&company=Siemens
// &category=Accounting&category=Computer%20and%20IT
// &level=Mid%20Level&level=Senior%20Level&page=1

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
});
