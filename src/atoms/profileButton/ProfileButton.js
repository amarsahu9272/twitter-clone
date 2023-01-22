import React from "react";
import { Avatar } from "@mui/material";
import "./ProfileButton.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import profileImge from "../../images/Amr.jpg";

function ProfileButton() {
  return (
    <div className="profile">
      <div className="profile-btn">
        <div className="avatar-p">
          <Avatar src={profileImge} />
        </div>
        <div className="profile-tag">
          <h3>
            Amar Sahu
            <p className="post__headerSpecial"> @amar123</p>
          </h3>
          <span>
            <MoreHorizIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileButton;
