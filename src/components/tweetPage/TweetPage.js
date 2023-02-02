import React, { useEffect, useState } from "react";
import "./TweetPage.css";
import {  useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { totalTweets } from "../../recoil-states";
import Post from "../post/Post";

function TweetPage() {
  const [profiles] = useRecoilState(totalTweets);
  const [Profiledata, setProfileData] = useState("");
  const { handleName } = useParams();
  function findUserProfile(handleName) {
    const profileData = profiles.find(
      (profiledata) => profiledata.handlerName === handleName
    );
    setProfileData(profileData);
  }
  useEffect(() => {
    findUserProfile(handleName);
  }, [handleName]);
  return (
  <div className="tweetPage">
    {Profiledata && <Post profiledata={Profiledata} />}
  </div>
  );
}

export default TweetPage;
