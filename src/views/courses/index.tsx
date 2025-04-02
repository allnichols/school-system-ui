import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import { Link } from "@tanstack/react-router";
import { Typography } from "@mui/joy";
import CoursesTable from "./components/table/CoursesTable";
import ErrorBoundary from "../../utils/ErrorBoundary";
import { Suspense } from "react";

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
      <ErrorBoundary
        fallback={
          <Typography sx={{ color: "red" }}>
            Failed to load courses. Please try again later.
          </Typography>
        }
      >
        <Suspense fallback={<Typography>Loading Courses...</Typography>}>
          <CoursesTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default CoursesPage;
