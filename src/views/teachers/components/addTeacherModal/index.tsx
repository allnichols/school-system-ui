import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

type AddTeacherModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleAddTeacher: (
    firstName: string,
    lastName: string,
    email: string,
    dob: Date | null
  ) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};

const AddTeacherModal = ({
  isOpen,
  handleClose,
  handleAddTeacher,
}: AddTeacherModalProps) => {
  const [dob, setDob] = React.useState<Date | null>(new Date());
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (name === "firstName") setFirstName(value);
    if (name === "lastName") setLastName(value);
    if (name === "email" && emailRegex.test(value)) setEmail(value);
  };

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Add Teacher
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              label="First Name"
              name="firstName"
              onChange={handleChange}
              value={firstName}
            />
            <TextField
              required
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <TextField
              required
              label="Email"
              name="email"
              onChange={handleChange}
              value={email}
            />
            <DatePicker
              label="Date of Birth"
              value={dob ? dayjs(dob) : null}
              onChange={(value) => {
                setDob(value?.toDate() || null);
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={() => handleAddTeacher(firstName, lastName, email, dob)}
              disabled={!firstName || !lastName || !email || !dob}
            >
              Add Teacher
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handleClose();
                setFirstName("");
                setLastName("");
                setEmail("");
                setDob(null);
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTeacherModal;
