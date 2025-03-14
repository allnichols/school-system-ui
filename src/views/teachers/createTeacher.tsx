import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import SnackbarMain, { Severity } from "../../components/snackbar";

type CreateTeacherResult = {
  createTeacher: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
  };
};

const CreateTeacher = () => {
  const [dob, setDob] = React.useState<string | null>(null);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <>
      <SnackbarMain
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity as Severity}
      />
      <h1>Create Teacher</h1>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{ marginRight: 2 }}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Box>
          <DatePicker
            label="Date of Birth"
            value={dob ? dayjs(dob) : null}
            onChange={(value: any) => {
              setDob(value?.toString());
            }}
            sx={{ marginBottom: 2 }}
          />
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Button
            variant="contained"
            disabled={!firstName || !lastName || !email || !dob}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default CreateTeacher;
