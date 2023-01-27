import React from "react";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfileSection from "../../components/profileSection/ProfileSection1"
import { useNavigate } from "react-router-dom";


function ProfilePage() {
  const navigate =useNavigate()
 
  return (
    <div className="profilePage">
      <div className="profileHeader">
        <div>
          <h2>
            <span>
              <ArrowBackIcon className="arrowIcon"  
              onClick={()=>navigate(-1)}
              />
            </span>
            <span>Amar Sahu</span>
          </h2>
          <p>Tweets</p>
        </div>
        <ProfileSection />
        <div className="block1"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
