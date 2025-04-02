import React from "react";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import SnackbarMain, { Severity } from "../../components/snackbar";
import { Box, Typography } from "@mui/joy";
import { useMutation } from "@tanstack/react-query";

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

  const createTeacher = async (teacher: {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
  }) => {
    const response = await fetch("http://localhost:8080/api/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teacher),
    });

    if (!response.ok) {
      throw new Error("Failed to create teacher");
    }
    return response.json();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createTeacher,
    onSuccess: () => {
      setOpenSnackbar({
        open: true,
        message: `🎉 Teacher ${firstName} ${lastName} created successfully!`,
        severity: "success",
      });
    },
    onError: () => {
      setOpenSnackbar({
        open: true,
        message: "Failed to create teacher",
        severity: "error",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      firstName,
      lastName,
      email,
      dob: dob || "",
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setDob(null);
  };

  return (
    <>
      <SnackbarMain
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity as Severity}
      />
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: "calc(12px + var(--Header-height))", md: 3 },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
          overflow: "auto",
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "80%", md: "60%" } }}>
          <Typography level="h1">Create Teacher</Typography>
          <Card sx={{ padding: 3, marginTop: 2 }}>
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
                loading={isPending}
                loadingPosition="start"
              >
                Submit
              </Button>
            </form>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default CreateTeacher;
