import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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
  console.log("currentTeacher", currentTeacher);
  const [options, setOptions] = React.useState<any>([]);

  const handleOpen = () => {
    console.log("open");
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
