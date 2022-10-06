import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL_LOGIN } from "@env";
import { RootState } from "./store";
// import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginState = {
  // TODO: change this to a more appropriate type User[]
  user?: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
};

export type UserInput = {
  username: string;
  password: string;
};

const initialState: LoginState = {
  user: null,
  status: "idle",
  error: null,
};

// interface LoginResponse {
//   token: string;
// }

export const userLogin = createAsyncThunk(
  "login/userLogin",
  async (user: UserInput) => {
    const { data } = await axios.post(API_URL_LOGIN, user);
    // await AsyncStorage.setItem("@token", data.token);
    return data;
    // return data as LoginResponse;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      // AsyncStorage.removeItem("@token");
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
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.user = null;
      });
  },
});

export const userSelector = (state: RootState) => state.user.user;
export const statusSelector = (state: RootState) => state.user.status;
export const errorSelector = (state: RootState) => state.user.error;

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
