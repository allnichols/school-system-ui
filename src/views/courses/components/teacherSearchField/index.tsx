import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQuery } from "@apollo/client";
import {
  GetAllTeachersDocument,
  GetAllTeachersQuery,
} from "../../../../generated/graphql";

type SearchTeacherFieldProps = {
  selectTeacher: (e: any) => void;
};

const SearchTeacherField = ({ selectTeacher }: SearchTeacherFieldProps) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const { data, loading, error } = useQuery(GetAllTeachersDocument);

  if (error) {
    return <div>Error loading teachers</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No teachers found</div>;
  }

  return (
    <Autocomplete
      id="teacher-search"
      options={data?.getAllTeachers || []}
      getOptionLabel={(option) => `${option?.firstName} ${option?.lastName}`}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Teacher Search" />}
      onSelect={(e) => selectTeacher(e)}
    />
  );
};

export default SearchTeacherField;
