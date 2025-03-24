import * as React from "react";
import { Box, Typography, Button, Input, FormLabel } from "@mui/joy";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

type AddTeacherModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleAddTeacher: (
    firstName: string,
    lastName: string,
    email: string,
    dob: string | null
  ) => void;
};

const AddTeacherModal = ({
  isOpen,
  handleClose,
  handleAddTeacher,
}: AddTeacherModalProps) => {
  const [dob, setDob] = React.useState<string | null>(null);
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
    <Modal open={isOpen} onClose={handleClose}>
      <ModalDialog>
        <Typography level="h4" component="h2">
          Add Teacher
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Box>
            <FormLabel required>First Name</FormLabel>
            <Input
              name="firstName"
              onChange={handleChange}
              value={firstName}
              required
            />
          </Box>
          <Box>
            <FormLabel required>Last Name</FormLabel>
            <Input
              name="lastName"
              onChange={handleChange}
              value={lastName}
              required
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Box>
            <FormLabel required>Email</FormLabel>
            <Input
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </Box>
          <DatePicker
            label="Date of Birth"
            value={dob ? dayjs(dob) : null}
            onChange={(value: any) => {
              setDob(value?.toDate().toString() || null);
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: 2,
          }}
        >
          <Button
            variant="solid"
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
      </ModalDialog>
    </Modal>
  );
};

export default AddTeacherModal;
