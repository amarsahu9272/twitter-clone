import React, { useState } from "react";
import "./PostFooterIcon.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import ReplyDialogBox from "../replyDialogBox/ReplyDialogBox";

function PostFooterIcon({tweets}) {
  const [isVisible, setIsVisible] = useState(false);
  let [comment, setComment] = useState(tweets[0].tweetCount);
  let [retweet, setRetweet] = useState(tweets[0].retweetCount);
  let [like, setLike] = useState(tweets[0].likesCount);
  let [share, setShare] = useState(0);
  let [True, setTrue] = useState(false);

  const comments = () => {
    setComment(comment + 1);
    setIsVisible(true);
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
    <>
      <div className="postFooter">
        <div className="comment">
          <ChatBubbleOutlineIcon
            onClick={comments}
            fontSize="small"
            className="chatBubble"
            style={{ padding: ".5rem" }}
          />
          <ReplyDialogBox isVisible={isVisible} />
          <span className="postIcon" value={comment}>
            {comment}
          </span>
        </div>
        {/* <ReplyDialogBox isVisible={isVisible} /> */}
        <div className="retweet">
          <RepeatIcon
            onClick={retweets}
            fontSize="small"
            className="repeatIcon"
            style={{ padding: ".5rem" }}
          />
          <span className="postIcon" value={retweet}>
            {retweet}
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
              {like}
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
              {like}
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
            {share}
          </span>
        </div>
      </div>
    </>
  );
}

export default PostFooterIcon;
