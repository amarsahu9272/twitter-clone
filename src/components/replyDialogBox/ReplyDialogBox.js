import React, { useEffect, useState } from "react";
import "./ReplyDialogBox.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import TweetReply from "../tweetReply/TweetReply";
import { Link } from "react-router-dom";
function ReplyDialogBox({ isVisible, replyData }) {
  const {
    profilePic,
    name,
    verified,
    handlerName,
    // organization,
    // followers,
    // followings,
    joinedDate,
    tweets,
  } = replyData;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isVisible);
  }, [isVisible]);
  return (
    <>
      <Dialog
        className="dialog"
        open={open}
        onClose={() => setOpen(false)}
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
            <Link to="/">
              <CloseIcon
                onClick={() => setOpen(false)}
                className="relpyCloseIcon"
                style={{ padding: ".5rem" }}
              />
            </Link>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="dialog-description"
              className="dialogContent"
            >
              <div className="replyDialog">
                <div className="reply">
                  <div className="replyAvatar">
                    <Avatar src={profilePic} />
                  </div>
                  <div className="replyBody">
                    <div className="replyHeader">
                      <div className="replyHeaderText">
                        <h3>
                          {name}{" "}
                          <span className="replyHeaderSpecial">
                            {verified && (
                              <VerifiedUserIcon className="replyBadge" />
                            )}
                            {handlerName} - {joinedDate}
                          </span>
                        </h3>
                      </div>
                      <div className="replyHeaderDescription">
                        <p>{tweets[0].tweetText}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <TweetReply />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions></DialogActions>
        </div>
      </Dialog>
    </>
  );
}

export default ReplyDialogBox;
