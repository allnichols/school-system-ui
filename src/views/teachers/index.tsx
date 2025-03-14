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
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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

const TeachersPage = () => {
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<PersonAddIcon />}
        sx={{ marginBottom: 2 }}
      >
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/teachers/create"
        >
          Add Teacher
        </Link>
      </Button>
      <TableContainer component={Paper}>
        <Table aria-label="teachers table" size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ fontWeight: "bold" }}>
                Name
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
                Email
              </StyledTableCell>
              <StyledTableCell align="right" sx={{ fontWeight: "bold" }}>
                Actions
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TeachersPage;
