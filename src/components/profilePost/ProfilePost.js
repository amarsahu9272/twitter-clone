import React, { useState } from "react";
import "./ProfilePost.css";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import { useRecoilValue } from "recoil";
import TweetsReply from "../tweetsReply/TweetsReply";
import { postProfileClick } from "../../recoil-states";
function ProfilePost({ Profiledata }) {
  const postProfileClicks = useRecoilValue(postProfileClick);
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
  } = Profiledata;
  let [comment, setComment] = useState(tweets[0].tweetCount);
  let [retweet, setRetweet] = useState(tweets[0].retweetCount);
  let [like, setLike] = useState(tweets[0].likesCount);
  let [share, setShare] = useState(4);
  let [True, setTrue] = useState(false);

  //   const setProfileData = useSetRecoilState(profileDataAtom);
  //   const handleProfileClick = () => {
  //     // console.log(profiledata);
  //     setProfileData(profiledata);
  //   };
  const comments = () => {
    setComment(comment + 1);
  };
  const retweets = () => {
    setRetweet(retweet + 1);
  };
  const likes = () => {
    !True ? setLike(like + 1) : setLike(like - 1);
    setTrue(!True);
  };
  const shares = () => {
    setShare(share + 1);
  };
  return (
    <div className="profilePost">
      <div className="postAvatar">
        <Avatar src={profilePic} />
      </div>

      <div className="profilePostBody">
        <div className="profilePostHeader">
          <div className="profilePostHeaderText">
            <h3>
              {name}
              <span className="profilePostHeaderSpecial">
                {verified && <VerifiedUserIcon className="postBadge" />}
                {handlerName} - {joinedDate}
              </span>
            </h3>
          </div>
          <div className="profilePostHeaderDescription">
            <p>{tweets[0].tweetText}</p>
          </div>
        </div>
        {tweets[0].tweetPic && (
          <img className="profilePostImg" src={tweets[0].tweetPic} alt="" />
        )}
        <div className="profilePostFooter">
          <div className="profilePostcomment">
            <ChatBubbleOutlineIcon
              onClick={comments}
              fontSize="small"
              className="profilePostchatBubble"
              style={{ padding: ".5rem" }}
            />
            <span className="profilePostIcon" value={comment}>
              {comment}K
            </span>
          </div>
          <div className="profilePostretweet">
            <RepeatIcon
              onClick={retweets}
              fontSize="small"
              className="profilePostrepeatIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="profilePostIcon" value={retweet}>
              {retweet}K
            </span>
          </div>
          {!True ? (
            <div className="profilePostlike">
              <FavoriteBorderIcon
                onClick={likes}
                fontSize="small"
                className="profilePostFavouriteIcon"
                style={{ padding: ".5rem" }}
              />
              <span className="profilePostIcon" value={like}>
                {like}K
              </span>
            </div>
          ) : (
            <div className="profilePostlike">
              <FavoriteIcon
                onClick={likes}
                fontSize="small"
                className="profilePostFavouriteIconClick"
                style={{ padding: ".5rem" }}
              />
              <span className="profilePostIcon" value={like}>
                {like}K
              </span>
            </div>
          )}
          <div className="profilePostshare">
            <PublishIcon
              onClick={shares}
              fontSize="small"
              className="profilePostpublishIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="profilePostIcon" value={share}>
              {share}K
            </span>
          </div>
        </div>
        {postProfileClicks && <TweetsReply tweets={tweets}/>}
      </div>
    </div>
  );
}

export default ProfilePost;
