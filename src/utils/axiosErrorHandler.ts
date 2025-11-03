import { isAxiosError } from "axios";
import { alertError } from "./alerts";
export default function axiosErrorHandler(error: unknown) {
  if (isAxiosError(error)) {
    if (error) {
      alertError(
        error.response?.data?.message || error.message || "An error occurred"
      );
    }
    return (
      error.response?.data || error.message || error.response?.data.message
    );
  } else {
    return "Something went wrong";
  }
}
