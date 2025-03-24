import { Snackbar, Alert } from "@mui/joy";

export enum Severity {
  PRIMARY = "primary",
  NEUTRAL = "neutral",
  SUCCESS = "success",
  WARNING = "warning",
  DANGER = "danger",
}

type SnackbarProps = {
  open: boolean;
  message: string;
  severity: Severity;
};

const SnackbarMain = ({ open, message, severity }: SnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000}>
      <Alert variant="soft" color={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarMain;
