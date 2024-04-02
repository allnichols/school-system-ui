import Table from "@mui/material/Table";
import styled from "@mui/material/styles/styled";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useQuery, gql } from "@apollo/client";

const GET_TEACHERS = gql`
  query {
    getAllTeachers {
      id
      firstName
      lastName
      email
    }
  }
`;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const TeachersPage = () => {
  const { loading, error, data } = useQuery(GET_TEACHERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="teachers table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: "bold" }}>Name</StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
              Email
            </StyledTableCell>
            <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.getAllTeachers.map((teacher: any) => (
            <StyledTableRow key={teacher.id}>
              <TableCell component="th" scope="row">
                {teacher.firstName + " " + teacher.lastName}
              </TableCell>
              <TableCell align="right">{teacher.email}</TableCell>
              <TableCell align="right">
                <ButtonGroup
                  disableElevation
                  variant="outlined"
                  aria-label="Disabled button group"
                >
                  <Button>View</Button>
                  <Button>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeachersPage;
