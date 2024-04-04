import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

type SnackbarProps = {
  open: boolean;
  message: string;
  severity: "error" | "info" | "success" | "warning";
};

const SnackbarMain = ({ open, message, severity }: SnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default SnackbarMain;
