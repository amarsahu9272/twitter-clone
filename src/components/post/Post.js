import React, { useState } from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
function Post({ displayName, username, verified, text, image, avatar }) {
  let [comment, setComment] = useState(1);
  let [retweet, setRetweet] = useState(2);
  let [like, setLike] = useState(3);
  let [share, setShare] = useState(4);

  
  const comments = () => {
    setComment(comment++);
  };
  const retweets = () => {
    setRetweet(retweet++);
  };
  const likes = () => {
    setLike(like++);
  };
  const shares = () => {
    setShare(share++);
  };
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src={avatar} />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {displayName}{" "}
              <span className="postHeaderSpecial">
                {verified && <VerifiedUserIcon className="postBadge" />} @
                {username}
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p>{text}</p>
          </div>
        </div>
        <img className="img" src={image} alt="" />
        <div className="postFooter">
          {/* <ChatBubbleOutlineIcon
            fontSize="small"
            className="chatBubble"
            style={{ padding: ".5rem" }}
          />
          <RepeatIcon
            fontSize="small"
            className="repeatIcon"
            style={{ padding: ".5rem" }}
          />
          <FavoriteBorderIcon
            fontSize="small"
            className="FavouriteIcon"
            style={{ padding: ".5rem" }}
          />
          <PublishIcon
            fontSize="small"
            className="publishIcon"
            style={{ padding: ".5rem" }}
          /> */}
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
      </div>
    </div>
  );
}

export default Post;