import React, { useEffect, useState } from "react";
import "./TweetsReply.css";

function TweetsReply({ tweets, postClick }) {
  const { TweetReplies } = tweets[0];
  const [postTrue, setPostTrue] = useState(false);

  useEffect(() => {
    setPostTrue(postClick);
  }, [postClick]);
  return (
    postTrue && (
      <div>
        {TweetReplies.map((element, i) => {
          return <p key={i}>{element.tweetReplyText}</p>;
        })}
      </div>
    )
  );
}

export default TweetsReply;
