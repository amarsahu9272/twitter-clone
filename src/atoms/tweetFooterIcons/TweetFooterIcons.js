import React from "react";
import "./TweetFooterIcons.css";
import { tweetBoxIcon } from "../../const";
function TweetFooterIcons() {
  return (
    <div className="tweetFooterIcons">
      {tweetBoxIcon.map((icon, i) => (
        <p key={i} style={{ padding: ".4rem" }}>{<icon.Icon />}</p>
      ))}
    </div>
  );
}

export default TweetFooterIcons;
