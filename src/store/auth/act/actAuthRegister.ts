import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { axiosInstance } from "../../../utils/axiosInstance";

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: formData, thunk) => {
    const { rejectWithValue } = thunk;
    try {
      const res = await axiosInstance.post(`/user/register`, formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthRegister;
