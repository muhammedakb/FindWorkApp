import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL_LOGIN } from "@env";
import { User } from "../types/userType";

type LoginState = {
  // TODO: change this to a more appropriate type User[]
  user: User[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
};

export type UserInput = {
  username: string;
  password: string;
};

const initialState: LoginState = {
  user: [],
  status: "idle",
  error: null,
};

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user: UserInput) => {
    const { data: responseData } = await axios.post(API_URL_LOGIN, user);
    // TODO: setItem to secure store
    return responseData;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const userSelector = (state: { login: LoginState }) => state.login.user;
export const statusSelector = (state: { login: LoginState }) =>
  state.login.status;
export const errorSelector = (state: { login: LoginState }) =>
  state.login.error;

export default loginSlice.reducer;
