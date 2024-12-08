import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  GetAllTeachersDocument,
  SearchTeachersDocument,
  SearchTeachersQuery,
  Teacher,
} from "../../../../generated/graphql";

type SearchTeacherFieldProps = {
  selectTeacher:
    | React.Dispatch<React.SetStateAction<string>>
    | ((teacherId: string) => void);
  currentTeacher?: string;
  label?: string;
};

const SearchTeacherField = ({
  selectTeacher,
  currentTeacher,
  label = "Teacher Search",
}: SearchTeacherFieldProps) => {
  const [options, setOptions] = React.useState<any>([]);
  const [getAllTeachers] = useLazyQuery(GetAllTeachersDocument, {
    onCompleted: (data) => {
      const teacherOptions = data.getAllTeachers?.map((teacher) => {
        return {
          id: teacher?.id,
          fullName: teacher?.fullName,
        };
      });
      setOptions(teacherOptions);
    },
  });

  const handleOpen = () => {
    getAllTeachers();
  };

  return (
    <Autocomplete
      freeSolo
      options={options || []}
      getOptionLabel={(option: any) => option.fullName}
      defaultValue={currentTeacher}
      onOpen={handleOpen}
      onChange={(_, value: any) => {
        if (value && typeof value !== "string") {
          selectTeacher(value.id);
        }
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export { SearchTeacherField };
