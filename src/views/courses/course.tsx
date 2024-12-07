import { Suspense } from "react";
import { useParams } from "@tanstack/react-router";
import { useFetchCourseById } from "./hooks/useFetchCourseById";
import { gradeLevels } from "./utils";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { SearchTeacherField } from "./components/teacherSearchField";

const Course = () => {
  const { id } = useParams({ from: "/courses/$id" });
  const { data } = useFetchCourseById(id);

  const selectTeacher = (teacherId: string) => {
    console.log(teacherId);
  };

  const teacherName =
    data?.getCourseById?.teacher?.firstName +
    " " +
    data?.getCourseById?.teacher?.lastName;

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
      <SearchTeacherField
        selectTeacher={selectTeacher}
        currentTeacher={teacherName}
        label="Teacher"
      />
      <p>
        {data.getCourseById?.teacher
          ? `${data.getCourseById.teacher.firstName} ${data.getCourseById.teacher.lastName}`
          : "There is not teacher attached to this class."}
      </p>
    </Suspense>
  );
};

export { Course };
