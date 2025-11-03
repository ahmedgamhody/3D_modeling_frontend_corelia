/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { store } from "../store/store";
import { authLogout, setCredentials } from "../store/auth/authSlice";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      state.auth.refreshToken
    ) {
      originalRequest._retry = true;
      try {
        const res = await axiosInstance.post("https://your-api.com/refresh", {
          refreshToken: state.auth.refreshToken,
        });
        store.dispatch(setCredentials(res.data));
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        store.dispatch(authLogout());
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const reload = () => {
  window.addEventListener("load", () => {
    const state = store.getState();
    axiosInstance
      .post("/reload", { refreshToken: state.auth.refreshToken })
      .then((res) => {
        store.dispatch(setCredentials(res.data));
      })
      .catch(() => {
        store.dispatch(authLogout());
        window.location.href = "/login";
      });
  });
};
