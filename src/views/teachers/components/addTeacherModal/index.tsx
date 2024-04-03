import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type AddTeacherModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  handleAddTeacher: () => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddTeacherModal = ({
  isOpen,
  handleClose,
  handleAddTeacher,
}: AddTeacherModalProps) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField required label="First Name" />
          <TextField required label="Last Name" />
          <TextField required label="Email" />
        </Box>
      </Modal>
    </div>
  );
};

export default AddTeacherModal;
