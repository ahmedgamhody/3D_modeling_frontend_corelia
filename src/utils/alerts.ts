import Swal from "sweetalert2";
type SweetAlertIcon = "success" | "error" | "warning" | "info" | "question";
export const alertSuccess = (text: string) => {
  Swal.fire({
    title: "تم بنجاح !",
    text,
    icon: "success",
  });
};

export const alertError = (title: string) => {
  Swal.fire({
    title,
    icon: "error",
  });
};

export const alertDeleted = () => {
  return Swal.fire({
    title: "هل انت متاكد ؟",
    // text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "نعم احذفه !",
    cancelButtonText: "الغاء",
  });
};

export const fireToast = (
  message: string,
  status: SweetAlertIcon | undefined
) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: status || "success",
    title: message || "toast fired successfully",
  });
};
