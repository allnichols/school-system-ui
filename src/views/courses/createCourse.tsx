import React from "react";
import {
  Typography,
  Box,
  Button,
  Input,
  Select,
  Option,
  FormControl,
} from "@mui/joy";
import SnackbarMain, { Severity } from "../../components/snackbar";
import { SearchTeacherField } from "./components/teacherSearchField";

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
  const [courseName, setCourseName] = React.useState("");
  const [gradeLevel, setGradeLevel] = React.useState(1);
  const [teacherId, setTeacherId] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here
    setOpenSnackbar({
      open: true,
      message: "Course created successfully!",
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
      <Typography level="h4" component="h1" sx={{ marginBottom: "1rem" }}>
        Create Course
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginBottom: "1rem",
            width: "50%",
          }}
        >
          <FormControl>
            <Input
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <Select
              value={gradeLevel.toString()}
              onChange={(e, newValue) => setGradeLevel(Number(newValue))}
              placeholder="Select Grade Level"
            >
              {gradeLevels.map((grade) => (
                <Option key={grade.value} value={grade.value.toString()}>
                  {grade.label}
                </Option>
              ))}
            </Select>
          </FormControl>
          <SearchTeacherField selectTeacher={setTeacherId} />
        </Box>

        <Button
          type="submit"
          variant="solid"
          disabled={!courseName || !gradeLevel}
        >
          Create Course
        </Button>
      </form>
    </>
  );
};

export default CreateCourse;
