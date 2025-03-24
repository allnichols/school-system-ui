import React, { Suspense } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { Link } from "@tanstack/react-router";
import { Typography } from "@mui/joy";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

const TeachersPage = () => {
  const { isPending, error, data, isFetching } = useSuspenseQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/api/teachers");
      return await response.json();
    },
  });

  console.log({ isPending, error, data, isFetching });

  return (
    <>
      <Typography level="h1" sx={{ mb: 4, mt: 3 }}>
        Teachers
      </Typography>
      <Button variant="solid" sx={{ marginBottom: 2 }}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/teachers/create"
        >
          Add Teacher
        </Link>
      </Button>
      <Sheet
        variant="soft"
        sx={{ pt: 1, borderRadius: "md", border: "1px solid lightgrey" }}
      >
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <Table
            stripe="odd"
            hoverRow
            sx={{
              captionSide: "top",
              "& tbody": { bgcolor: "background.surface" },
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((teacher: any) => (
                <tr key={teacher.id}>
                  <td>{`${teacher.firstName} ${teacher.lastName}`}</td>
                  <td>{teacher.email}</td>
                  <td>
                    <Link to={`/teachers/${teacher.id}`}>Edit</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Suspense>
      </Sheet>
    </>
  );
};

export default TeachersPage;
