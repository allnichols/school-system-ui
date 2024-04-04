import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export enum Severity {
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
}

type SnackbarProps = {
  open: boolean;
  message: string;
  severity: Severity;
};

const SnackbarMain = ({ open, message, severity }: SnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};

export default SnackbarMain;
