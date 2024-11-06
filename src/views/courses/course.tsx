import { Suspense } from "react";
import { useParams } from "@tanstack/react-router";
import { useFetchCourseById } from "./hooks/useFetchCourseById";
import { gradeLevels } from "./utils";
import { Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const Course = () => {
  const { id } = useParams({ from: "/courses/$id" });
  const { data } = useFetchCourseById(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>{data.getCourseById?.courseName}</h1>
      <InputLabel id="demo-simple-select-label">Grade Level</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.getCourseById?.gradeLevel}
        label="Age"
      >
        {gradeLevels.map((gradeLevel) => {
          return (
            <MenuItem value={gradeLevel.value}>{gradeLevel.label}</MenuItem>
          );
        })}
      </Select>
      <TextField variant="standard" placeholder="Teacher" />
      <p>
        {data.getCourseById?.teacher
          ? `${data.getCourseById.teacher.firstName} ${data.getCourseById.teacher.lastName}`
          : "There is not teacher attached to this class."}
      </p>
    </Suspense>
  );
};

export { Course };
