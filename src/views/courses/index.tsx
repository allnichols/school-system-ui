import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { Link } from "@tanstack/react-router";
import { Typography } from "@mui/joy";
import { useQuery } from "@tanstack/react-query";

const CoursesPage = () => {
  return (
    <>
      <Typography level="h1" sx={{ mb: 4, mt: 3 }}>
        Courses
      </Typography>
      <Button variant="solid" sx={{ marginBottom: 2 }}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/courses/create"
        >
          Add Course
        </Link>
      </Button>
      <Sheet
        variant="soft"
        sx={{ pt: 1, borderRadius: "md", border: "1px solid lightgrey" }}
      >
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
              <th>Course Name</th>
              <th>Teacher</th>
              <th>Grade Level</th>
            </tr>
          </thead>
          <tbody>{/* Add rows dynamically here */}</tbody>
        </Table>
      </Sheet>
    </>
  );
};

export default CoursesPage;
