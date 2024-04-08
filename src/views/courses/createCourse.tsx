import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "@tanstack/react-router";
import SnackbarMain, { Severity } from "../../components/snackbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchTeacherField from "./components/teacherSearchField";
// import {} from '../../generated/graphql';

const CreateCourse = () => {
  const [courseName, setCourseName] = React.useState("");
  const [gradeLevel, setGradeLevel] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SnackbarMain
        open={openSnackbar.open}
        message={openSnackbar.message}
        severity={openSnackbar.severity as Severity}
      />
      <Typography variant="h4">Create Course</Typography>
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
          <TextField
            label="Course Name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
          <TextField
            label="Grade Level"
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            required
          />

          <SearchTeacherField />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={!courseName || !gradeLevel}
        >
          Create Course
        </Button>
      </form>
    </>
  );
};

export default CreateCourse;
