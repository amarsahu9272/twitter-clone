import React from "react";
import profileImge from "../../images/Amr.jpg";
import "./WhatsHappeningTweets.css";
import { Avatar } from "@mui/material";

function WhatsHappeningTweets({
  values,
  handleChange,
  tweetImage,
  handleTweetImage,
}) {
  return (
    <>
      <div className="WhatsHappeningTweets">
        <Avatar src={profileImge} />
        <input
          onChange={handleChange}
          value={values}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      <input
        value={tweetImage}
        onChange={handleTweetImage}
        className="WhatsHappeningTweetsimg"
        placeholder="Optional: Enter image URL"
        type="text"
      />
    </>
  );
}

export default WhatsHappeningTweets;
