import React from 'react'
import "./ProfileSection1.css";
// import { Avatar } from "@mui/material";

// import profilePic from "../../images/Amr.jpg";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function ProfileSection1({Profiledata}) {


  return (
    <div>
      <div className="profileSection1"></div>
      <div className="profileSection1-Sub">
        <div>
          <img src={Profiledata.profilePic} alt="profilePhoto" />
        </div>
      </div>
      <div className="profileDetails">
        <div className="profile-h">
          <h2>{Profiledata.name}</h2>
          <p>{Profiledata.handlerName}</p>
        </div>
        <div className="profile-d">
        <p><CalendarMonthIcon className="CalendarIcon"/>Joined {Profiledata.joinedDate}</p>
        <p><span>{Profiledata.followers} Followers</span><span>{Profiledata.followings} Following</span></p>
        </div>
      </div>
      <div className="profile-f"><h4>Tweets</h4><h4>Tweets & replies</h4><h4>Media</h4><h4>Links</h4></div>
    </div>
  );
}

export default ProfileSection1
