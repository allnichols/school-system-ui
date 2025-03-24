import React from "react";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar({
      open: true,
      message: `🎉 Teacher ${firstName} ${lastName} created successfully!`,
      severity: "success",
    });
  };

  return (
    <>
      <SnackbarMain
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity as Severity}
      />
      <h1 style={{ color: "purple", textAlign: "center" }}>
        🎓 Create Teacher 🎉
      </h1>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div style={{ marginBottom: "1rem" }}>
          <FormLabel>First Name</FormLabel>
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
            sx={{ marginBottom: 2 }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormLabel>Last Name</FormLabel>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
            sx={{ marginBottom: 2 }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            sx={{ marginBottom: 2 }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <FormLabel>Date of Birth</FormLabel>
          <Input
            type="date"
            value={dob || ""}
            onChange={(e) => setDob(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </div>
        <Button
          variant="solid"
          disabled={!firstName || !lastName || !email || !dob}
          type="submit"
          sx={{
            backgroundColor: "purple",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🎉 Submit 🎉
        </Button>
      </form>
    </>
  );
};

export default CreateTeacher;
