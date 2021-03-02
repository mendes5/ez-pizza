import { useSnackbar } from "react-simple-snackbar";

const snackbarConfig = (backgroundColor) => ({
  position: "top-center",
  style: {
    backgroundColor,
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  },
});

export const useSuccessNotification = () =>
  useSnackbar(snackbarConfig("#15a54f"), 2000);

export const useErrorNotification = () =>
  useSnackbar(snackbarConfig("#f00"), 2000);
