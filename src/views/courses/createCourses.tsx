import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "@tanstack/react-router";
import { useMutation } from "@apollo/client";

const CreateCourse = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const navigate = useNavigate({ from: "courses/create" });

  const [createCourse] = useMutation(CREATE_COURSE, {
    refetchQueries: [{ query: GET_ALL_COURSES }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCourse({
      variables: {
        course: {
          name,
          description,
        },
      },
    })
      .then((data) => {
        if (data?.data?.createCourse.id) {
          setName("");
          setDescription("");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained">
        Create Course
      </Button>
    </form>
  );
};
