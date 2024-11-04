import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { useMutation } from "@apollo/client";
import SnackbarMain, { Severity } from "../../components/snackbar";
import {
  CreateCourseDocument,
  GetAllCoursesDocument,
} from "../../generated/graphql";
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
  const [teacher, setTeacher] = React.useState("");
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [createCourse] = useMutation(CreateCourseDocument, {
    refetchQueries: [{ query: GetAllCoursesDocument }],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createCourse({
      variables: {
        course: {
          courseName,
          gradeLevel,
        },
      },
      onCompleted: (data) => {
        if (data?.createCourse?.id) {
          setCourseName("");
          setGradeLevel(1);
          setOpenSnackbar({
            open: true,
            message: "Course created successfully",
            severity: "success",
          });
        }
      },
      onError: (error) => {
        if (error) {
          setOpenSnackbar({
            open: true,
            message: "Error creating course",
            severity: "error",
          });
        }
      },
    });
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
          <FormControl>
            <InputLabel id="select-grade-level">Grade Level</InputLabel>
            <Select
              labelId="select-grade-level"
              id="select-grade-level"
              value={gradeLevel.toString()}
              label="Grade Level"
              onChange={(e: SelectChangeEvent) =>
                setGradeLevel(Number(e.target.value))
              }
            >
              {gradeLevels.map((grade) => (
                <MenuItem key={grade.value} value={grade.value}>
                  {grade.label}
                </MenuItem>
              ))}
            </Select>
            <SearchTeacherField selectTeacher={setTeacher} />
            {/* < */}
          </FormControl>
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
