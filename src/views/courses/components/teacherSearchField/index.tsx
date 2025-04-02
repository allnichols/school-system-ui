import React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Autocomplete from "@mui/joy/Autocomplete";
import { useQuery } from "@tanstack/react-query";

type SearchTeacherFieldProps = {
  selectTeacher: (
    e?:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.SyntheticEvent,
    value?: string | number | undefined,
    name?: string | undefined
  ) => void;
  currentTeacher?: string;
  label?: string;
  Name?: string;
};

const fetchTeachers = async () => {
  const response = await fetch("http://localhost:8080/api/teachers");
  if (!response.ok) {
    throw new Error("Failed to fetch teachers");
  }
  return response.json();
};

const SearchTeacherField = ({
  selectTeacher,
  currentTeacher,
  label = "Teacher Search",
  Name = "teacher",
}: SearchTeacherFieldProps) => {
  const [options, setOptions] = React.useState<any>([]);

  const { isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: fetchTeachers,
    enabled: options.length === 0,
  });
  const handleOpen = async () => {
    if (options.length === 0) {
      try {
        const data = await fetchTeachers();
        setOptions(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    }
  };

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Autocomplete
        loading={isLoading}
        options={options || []}
        getOptionLabel={(option: any) => option.fullName}
        defaultValue={currentTeacher}
        onOpen={handleOpen}
        onChange={(_, value: any) => {
          if (value && typeof value !== "string") {
            selectTeacher(undefined, value.id, Name);
          }
        }}
      />
    </>
  );
};

export { SearchTeacherField };
