import { Suspense, useState } from "react";
import { useParams } from "@tanstack/react-router";
import { useFetchCourseById } from "./hooks/useFetchCourseById";
import { gradeLevels } from "./utils";

const Course = () => {
  const { id } = useParams({ from: "/courses/$id" });
  const [options, setOptions] = useState<any>([]);

  const selectTeacher = (teacherId: any) => {
    console.log(teacherId);
  };

  // const teacherName = data.getCourseById?.teacher
  //   ? data.getCourseById.teacher.fullName
  //   : "No Teacher assigned to this course";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <InputLabel id="demo-simple-select-label">Grade Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.getCourseById?.gradeLevel}
          label="Age"
        >
          {gradeLevels.map((gradeLevel) => {
            return (
              <MenuItem key={gradeLevel.value} value={gradeLevel.value}>
                {gradeLevel.label}
              </MenuItem>
            );
          })}
        </Select>

        <Autocomplete
          sx={{ width: 300 }}
          freeSolo
          options={options || []}
          defaultValue={teacherName}
          renderInput={(params) => <TextField {...params} label="Teacher" />}
          getOptionLabel={(option: any) =>
            typeof option === "string" ? option : option.fullName
          }
        />
        <p>
          {data.getCourseById?.teacher
            ? `${data.getCourseById.teacher.fullName}`
            : "There is not teacher attached to this class."}
        </p> */}
    </Suspense>
  );
};

export { Course };
