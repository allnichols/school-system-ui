import Table from "@mui/material/Table";
import styled from "@mui/material/styles/styled";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  GetAllCoursesDocument,
  GetAllCoursesQuery,
} from "../../generated/graphql";
import { useQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import { Link } from "@tanstack/react-router";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const CoursesPage = () => {
  const { loading, error, data } = useQuery<GetAllCoursesQuery>(
    GetAllCoursesDocument
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
  if (data?.getAllCourses?.length === 0) {
    return (
      <>
        <Button
          variant="outlined"
          // startIcon={<PersonAddIcon />}
          sx={{ marginBottom: 2 }}
        >
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to="/courses/create"
          >
            Create Course
          </Link>
        </Button>
        <p>No courses found</p>
      </>
    );
  }

  return (
    <>
      <Button
        variant="outlined"
        // startIcon={<PersonAddIcon />}
        sx={{ marginBottom: 2 }}
      >
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/courses/create"
        >
          Create Course
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="courses table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Course Name</StyledTableCell>
              <StyledTableCell align="right">Teacher</StyledTableCell>
              <StyledTableCell align="right">Students</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoursesPage;
