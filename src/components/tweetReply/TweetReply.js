import React, { useState } from "react";
import "./TweetReply.css";
import WhatsHappeningTweets from "../../components/whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooterIcons from "../../atoms/tweetFooterIcons/TweetFooterIcons";
import TwitterButton from "../../atoms/twitterButton/TwitterButton";

function TweetReply({ postBody }) {
  const [tweetReply, setTweetReply] = useState("");
  return (
    <div className="tweetReplyContainer">
      <form onSubmit="">
        <div className="tweetReplyWrapper">
          <WhatsHappeningTweets
            btnStyle="tweetReply"
            placeHolder="Tweet your reply"
            values={tweetReply}
            handleChange={(e) => setTweetReply(e.target.value)}
          />
          <div className="tweetFooter">
            <TweetFooterIcons />
            <TwitterButton
              // onClickAction={handleReply}
              btnText="Reply"
              variant="outlined"
              btnStyle="tweetBoxButton"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetReply;
