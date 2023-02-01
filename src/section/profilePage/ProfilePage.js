import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProfileSection from "../../components/profileSection/ProfileSection1";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { totalTweets } from "../../recoil-states";
// import Post from "../../components/post/Post";
// import ProfilePost from "../../components/profilePost/ProfilePost";
import Post from "../../components/post/Post";

function ProfilePage() {
  const navigate = useNavigate();
  const [profiles] = useRecoilState(totalTweets);
  const [Profiledata, setProfileData] = useState("");
  const { handlerName } = useParams();
  // console.log(handlerName);
  function findUserProfile(handlerName) {
    const profileData = profiles.find(
      (profiledata) => profiledata.handlerName === handlerName
    );
    // console.log(profileData);
    setProfileData(profileData);
  }
  useEffect(() => {
    findUserProfile(handlerName);
  }, [profiles,handlerName]);
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
              <span>{Profiledata?.name}</span>
            </h2>
            <p>{Profiledata?.tweets?.length} Tweets</p>
          </div>
          <ProfileSection Profiledata={Profiledata} />
          <div className="profilePost">{Profiledata && <Post profiledata={Profiledata} />}</div>
          {/* { Profiledata&& <ProfilePost Profiledata={Profiledata} />} */}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
