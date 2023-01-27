import React from "react";
import profileImge from "../../images/Amr.jpg";
import "./WhatsHappeningTweets.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";


function WhatsHappeningTweets({
  values,
  handleChange,
  tweetImage,
  handleTweetImage,
}) {
  return (
    <>
      <div className="WhatsHappeningTweets">
        <Link to="/ProfilePage">
          <Avatar src={profileImge} className="avatar" />
        </Link>
        <input
          onChange={handleChange}
          value={values}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      {/* <input
        value={tweetImage}
        onChange={handleTweetImage}
        className="WhatsHappeningTweetsimg"
        placeholder="Optional: Enter image URL"
        type="text"
      /> */}
    </>
  );
}

export default WhatsHappeningTweets;
