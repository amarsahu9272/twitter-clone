import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Avatar } from "@mui/material";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { postProfileClick, profileDataAtom } from "../../recoil-states";
import { Link } from "react-router-dom";
import TweetsReply from "../tweetsReply/TweetsReply";
import PostFooterIcon from "../postFooterIcon/PostFooterIcon";

function Post({ profiledata }) {
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
  } = profiledata;

  
  const setProfileData = useSetRecoilState(profileDataAtom);
  const setPostProfileData = useSetRecoilState(postProfileClick);
  const postProfileClicks = useRecoilValue(postProfileClick);
  const handleProfileClick = () => {
    setProfileData(profiledata);
    setPostProfileData(false);
  };
  const handlePostBody = () => {
    setPostProfileData(true);
  };

  return (
    <div className="post">
      <Link to={`/${handlerName}`}>
        <div className="postAvatar" onClick={handleProfileClick}>
          <Avatar src={profilePic} />
        </div>
      </Link>
      <div className="postBody">
        <div onClick={handlePostBody}>
          <Link to={`/TweetPage/${handlerName}`}>
            <div className="postHeader">
              <div className="postHeaderText">
                <h3>
                  {name}{" "}
                  <span className="postHeaderSpecial">
                    {verified && <VerifiedUserIcon className="postBadge" />}
                    {handlerName} - {joinedDate}
                  </span>
                </h3>
              </div>
              <div className="postHeaderDescription">
                <p>{tweets[0].tweetText}</p>
              </div>
            </div>
            {tweets[0].tweetPic && (
              <img className="img" src={tweets[0].tweetPic} alt="" />
            )}
          </Link>
        </div>
        <PostFooterIcon tweets={tweets}/>
        {postProfileClicks && <TweetsReply tweets={tweets} />}
      </div>
    </div>
  );
}

export default Post;
