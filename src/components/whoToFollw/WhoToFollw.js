import React from "react";
import profileImge from "../../images/Amr.jpg";
import "./WhoToFollw.css";
import { Avatar } from "@mui/material";
import TwitterButton from '../../atoms/twitterButton/TwitterButton'
import { whomfollow } from "../../const";
function WhoToFollw() {
  return (
    <div className="whoToFollwContainer">
      <h2>Who to follow</h2>
      {/* <TwitterEmbedded/> */}
      <div className="follow-p">
        {whomfollow.map((fData, i) => (
          <div className="following">
            <Avatar src={profileImge} />
            <div className="follows" key={i}>
              <h3>{fData.followName}</h3>
              <p>{fData.followUserName}</p>
              <span>{fData.folloDesignation}</span>
            </div>
            <TwitterButton
              onClickAction=""
              btnText="Follow"
              variant="outlined"
              btnStyle="followButton"
            />
          </div>
        ))}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}

export default WhoToFollw;
