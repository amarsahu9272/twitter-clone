import React, { useState } from "react";
import "./Post.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { postProfileClick, profileDataAtom } from "../../recoil-states";
import { Link } from "react-router-dom";
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
  // const tweets = tweets
  // const [Tweets,setTweets]=useState(tweets)
  let [comment, setComment] = useState(tweets[0].tweetCount);
  let [retweet, setRetweet] = useState(tweets[0].retweetCount);
  let [like, setLike] = useState(tweets[0].likesCount);
  let [share, setShare] = useState(0);
  let [True, setTrue] = useState(false);

  const setProfileData = useSetRecoilState(profileDataAtom);
  const setPostProfileData =useSetRecoilState(postProfileClick)
  const handleProfileClick = () => {
    // console.log(profiledata);
    setProfileData(profiledata);
    setPostProfileData(false)
  };
  const handlePostBody=()=>{
    setPostProfileData(true)
  }
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
      <Link to={`/${handlerName}`}>
        <div className="postAvatar" onClick={handleProfileClick}>
          <Avatar src={profilePic} />
        </div>
      </Link>
      <div className="postBody" onClick={handlePostBody}>
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
        <div className="postFooter">
          <div className="comment">
            <ChatBubbleOutlineIcon
              onClick={comments}
              fontSize="small"
              className="chatBubble"
              style={{ padding: ".5rem" }}
            />
            <span className="postIcon" value={comment}>
              {comment}
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
      </div>
    </div>
  );
}

export default Post;
