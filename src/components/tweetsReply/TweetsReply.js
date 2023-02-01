import React from "react";
import "./TweetsReply.css";

function TweetsReply({ tweets }) {
  const { TweetReplies } = tweets[0];
  return (
    <div>
      {TweetReplies.map((element, i) => {
        return <p key={i}>{element.tweetReplyText}</p>;
      })}
    </div>
  );
}

export default TweetsReply;
