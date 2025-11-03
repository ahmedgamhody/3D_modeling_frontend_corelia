import { axiosInstance } from "./axiosInstance";

export const fetchAllModels = async () => {
  const res = await axiosInstance.get("/test");
  const data = res.data;
  return data;
};
export const fetchModelById = async (id: string) => {
  const res = await axiosInstance.get(`/test/${id}`);
  const data = res.data;
  return data;
};

export const uploadVideo = async (video: File) => {
  const formData = new FormData();
  formData.append("video", video);
  const res = await axiosInstance.post("/test", formData);
  const data = res.data;
  return data;
};
