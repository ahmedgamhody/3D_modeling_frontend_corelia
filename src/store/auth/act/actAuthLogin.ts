import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { axiosInstance } from "../../../utils/axiosInstance";

type formData = {
  email: string;
  password: string;
};

type TResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: formData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axiosInstance.post<TResponse>(`/user/login`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogin;
