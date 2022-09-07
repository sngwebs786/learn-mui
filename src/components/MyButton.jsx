import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import '../css/MyButton.css'
export default function MyButton() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      <Button className="my-btn" variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}
