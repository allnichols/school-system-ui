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
  const [options, setOptions] = React.useState<
    SearchTeachersQuery["searchTeachers"]
  >([]);
  const [searchUsers] = useLazyQuery(SearchTeachersDocument, {
    onCompleted: (data) => {
      setOptions(data?.searchTeachers);
    },
  });

  const handleInputChange = (value: string) => {
    if (value.length >= 1) {
      searchUsers({
        variables: {
          name: value,
        },
      });
    }
  };

  return (
    <Autocomplete
      freeSolo
      options={options || []}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option?.fullName || ""
      }
      onInputChange={(_, value) => handleInputChange(value)}
      onChange={(_, value) => {
        if (typeof value !== "string" && value?.id) {
          selectTeacher(value.id);
        }
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
};

export { SearchTeacherField };
