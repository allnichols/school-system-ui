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
import { ButtonGroup } from "@mui/material";

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
          sx={{ mb: 2 }}
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
        sx={{ mb: 2 }}
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
          <TableBody>
            {data?.getAllCourses?.map((course) => {
              return (
                <StyledTableRow key={course?.id}>
                  <StyledTableCell component="th" scope="row">
                    {course?.courseName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    "Teacher goes here"
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {course?.gradeLevel}
                  </StyledTableCell>
                  <TableCell align="right">
                    <ButtonGroup
                      disableElevation
                      variant="outlined"
                      aria-label="Disabled button group"
                    >
                      <Button>
                        <Link
                          style={{
                            color: "inherit",
                            textDecoration: "none",
                          }}
                          to="/courses/$id"
                          params={{ id: course?.id ?? "" }}
                        >
                          View
                        </Link>
                      </Button>
                      <Button variant="outlined" color="error">
                        Delete
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoursesPage;
