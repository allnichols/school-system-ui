import React from "react";
import Input from "@mui/joy/Input";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Box, Typography } from "@mui/joy";
import SnackbarMain, { Severity } from "../../components/snackbar";
import { SearchTeacherField } from "./components/teacherSearchField";
import { useMutation } from "@tanstack/react-query";

const gradeLevels = [
  { value: 1, label: "1st Grade" },
  { value: 2, label: "2nd Grade" },
  { value: 3, label: "3rd Grade" },
  { value: 4, label: "4th Grade" },
  { value: 5, label: "5th Grade" },
  { value: 6, label: "6th Grade" },
  { value: 7, label: "7th Grade" },
  { value: 8, label: "8th Grade" },
  { value: 9, label: "9th Grade" },
  { value: 10, label: "10th Grade" },
  { value: 11, label: "11th Grade" },
  { value: 12, label: "12th Grade" },
];

const CreateCourse = () => {
  const [formData, setFormData] = React.useState({
    courseName: "",
    gradeLevel: 1,
    teacherId: "",
  });
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const createCourse = async (course: {
    name: string;
    gradeLevel: number;
    teacherId: string;
  }) => {
    const response = await fetch("http://localhost:8080/api/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (!response.ok) {
      throw new Error("Failed to create course");
    }
    return response.json();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      setOpenSnackbar({
        open: true,
        message: `🎉 Course "${formData.courseName}" created successfully!`,
        severity: "success",
      });
    },
    onError: () => {
      setOpenSnackbar({
        open: true,
        message: "Failed to create course",
        severity: "error",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name: formData.courseName,
      gradeLevel: formData.gradeLevel,
      teacherId: formData.teacherId,
    });
    setOpenSnackbar({
      open: true,
      message: "Course created successfully!",
      severity: "success",
    });
  };

  const handleChange = (
    e?:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.SyntheticEvent,
    value?: string | number | undefined,
    name?: string | undefined
  ) => {
    if (e) {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      const { name, value } = target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (value && name) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
                <FormLabel>Course Name</FormLabel>
                <Input
                  value={formData.courseName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  sx={{ marginBottom: 2 }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <FormLabel>Grade Level</FormLabel>
                <Select
                  name="gradeLevel"
                  onChange={(e) => handleChange(e as React.SyntheticEvent)}
                  placeholder="Select grade level"
                >
                  {gradeLevels.map((grade) => (
                    <Option key={grade.value} value={grade.value}>
                      {grade.label}
                    </Option>
                  ))}
                </Select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <SearchTeacherField
                  selectTeacher={handleChange}
                  label="Teacher Search"
                  Name="teacherId"
                />
              </div>

              <Button
                variant="solid"
                disabled={!formData.courseName || !formData.gradeLevel}
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

export default CreateCourse;
