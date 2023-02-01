import React, { useEffect, useState } from "react";
import "./TweetPage.css";
import {  useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { totalTweets } from "../../recoil-states";
import ProfilePost from "../profilePost/ProfilePost";
import Post from "../post/Post";

function TweetPage() {
//   const navigate = useNavigate();
  const [profiles] = useRecoilState(totalTweets);
  const [Profiledata, setProfileData] = useState("");
  const { handleName } = useParams();
  function findUserProfile(handleName) {
    const profileData = profiles.find(
      (profiledata) => profiledata.handlerName === handleName
    );
    // console.log(profileData);
    setProfileData(profileData);
  }
  useEffect(() => {
    findUserProfile(handleName);
    return
  }, [profiles,handleName]);
  return (
  <div className="tweetPage">
    {Profiledata && <Post profiledata={Profiledata} />}
  {/* {Profiledata && <ProfilePost Profiledata={Profiledata} />} */}
  </div>
  );
}

export default TweetPage;
