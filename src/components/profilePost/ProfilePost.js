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
    <div className="post">
      <div className="postAvatar">
        <Avatar src={profilePic} />
      </div>

      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {name}
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
        <div className="postFooter">
          <div className="comment">
            <ChatBubbleOutlineIcon
              onClick={comments}
              fontSize="small"
              className="chatBubble"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={comment}>
              {comment}K
            </span>
          </div>
          <div className="retweet">
            <RepeatIcon
              onClick={retweets}
              fontSize="small"
              className="repeatIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={retweet}>
              {retweet}K
            </span>
          </div>
          {!True ? (
            <div className="like">
              <FavoriteBorderIcon
                onClick={likes}
                fontSize="small"
                className="FavouriteIcon"
                style={{ padding: ".5rem" }}
              />
              <span className="postIcon" value={like}>
                {like}K
              </span>
            </div>
          ) : (
            <div className="like">
              <FavoriteIcon
                onClick={likes}
                fontSize="small"
                className="FavouriteIconClick"
                style={{ padding: ".5rem" }}
              />
              <span className="postIcon" value={like}>
                {like}K
              </span>
            </div>
          )}
          <div className="share">
            <PublishIcon
              onClick={shares}
              fontSize="small"
              className="publishIcon"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={share}>
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
