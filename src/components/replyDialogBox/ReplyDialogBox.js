import React, { useEffect, useState } from "react";
import "./ReplyDialogBox.css";
import {
  // Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import TweetReply from "../tweetReply/TweetReply";
function ReplyDialogBox({ isVisible }) {
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);
  useEffect(()=>{
    setOpen(isVisible);
    },[isVisible]);
  return (
    <>
      <Dialog
        className="dialog"
        open={open}
        onClose={closeDialog}
        PaperProps={{
          style: {
            width: "40%",
            height: "60%",
            marginTop: "-12rem",
            marginLeft: "2rem",
            borderRadius: "1rem",
          },
        }}
      >
        <div className="dialogBox">
          <DialogTitle id="dialog-title" className="dialogTitle">
            <CloseIcon
              onClick={() => setOpen(false)}
              className="closeIcon"
              style={{ padding: ".5rem" }}
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <TweetReply />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button autoFocus onClick={() => setOpen(false)}>
            submit
          </Button> */}
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default ReplyDialogBox;
