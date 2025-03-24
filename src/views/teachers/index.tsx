import { Suspense } from "react";
import Button from "@mui/joy/Button";
import { Link } from "@tanstack/react-router";
import { Typography } from "@mui/joy";
import ErrorBoundary from "../../utils/ErrorBoundary";
import TeachersTable from "./components/Table/TeachersTable";

const TeachersPage = () => {
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
      <ErrorBoundary
        fallback={
          <Typography sx={{ color: "red" }}>
            Failed to load teachers. Please try again later.
          </Typography>
        }
      >
        <Suspense fallback={<Typography>Loading Teachers...</Typography>}>
          <TeachersTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default TeachersPage;
