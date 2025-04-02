import React from "react";
import { useParams } from "@tanstack/react-router";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import Card from "@mui/joy/Card";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { Box, Button, Typography } from "@mui/joy";
import SnackbarMain, { Severity } from "../../components/snackbar";

const Teacher = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });
  const { id } = useParams({ from: "/teachers/$id" });

  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["teacher", id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8080/api/teachers/${id}`);
      if (!response.ok) {
        throw new Error("Failed to load teacher");
      }
      return await response.json();
    },
  });

  const mutateTeacher = useMutation({
    mutationKey: ["teacher", id],
    mutationFn: async (formData: any) => {
      const response = await fetch(`http://localhost:8080/api/teachers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update teacher");
      }
      return await response.json();
    },
    onSuccess: () => {
      console.log("Teacher updated successfully");
      setOpenSnackbar({
        open: true,
        message: `🎉 Teacher ${formData.firstName} ${formData.lastName} updated successfully!`,
        severity: "success",
      });
    },
  });

  const [formData, setFormData] = React.useState({
    firstName: data.firstName || "",
    lastName: data.lastName || "",
    email: data.email || "",
    dob: data.dob || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
        <Typography level="h1">Teacher</Typography>
        <Card sx={{ padding: 3, marginTop: 2 }}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              name="firstName"
              value={formData.firstName}
              sx={{ marginBottom: 2 }}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              name="lastName"
              value={formData.lastName}
              sx={{ marginBottom: 2 }}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={formData.email}
              sx={{ marginBottom: 2 }}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              name="dob"
              value={formData.dob}
              sx={{ marginBottom: 2 }}
              onChange={handleChange}
            />
          </FormControl>
          <Stack direction="row" spacing={2}>
            <Button
              variant="solid"
              onClick={() => {
                mutateTeacher.mutate(formData);
              }}
              loading={mutateTeacher.isPending}
            >
              Save
            </Button>
            <Button color="danger" variant="outlined">
              Delete
            </Button>
          </Stack>
        </Card>
      </Box>
      <SnackbarMain
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity as Severity}
      />
    </>
  );
};

export default Teacher;
