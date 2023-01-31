import React from "react";
import profilePic from "../../images/Amr.jpg";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function DemoProfilePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="profilePage">
        <div className="profileHeader">
          <div>
            <h2>
              <span>
                <ArrowBackIcon
                  className="arrowIcon"
                  onClick={() => navigate(-1)}
                />
              </span>
              <span>Amar Sahu</span>
            </h2>
            <p>Tweets</p>
          </div>
          <div>
            <div className="profileSection1"></div>
            <div className="profileSection1-Sub">
              <div>
                <img src={profilePic} alt="profilePhoto" />
              </div>
            </div>
            <div className="profileDetails">
              <div className="profile-h">
                <h2>Amar sahu</h2>
                <p>@amarsahu</p>
              </div>
              <div className="profile-d">
                <p>
                  <CalendarMonthIcon className="CalendarIcon" />
                  Joined
                </p>
                <p>
                  <span> Followers</span>
                  <span> Following</span>
                </p>
              </div>
            </div>
            <div className="profile-f">
              <h4>Tweets</h4>
              <h4>Tweets & replies</h4>
              <h4>Media</h4>
              <h4>Links</h4>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default DemoProfilePage;
