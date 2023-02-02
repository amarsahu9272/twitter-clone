import React, { useState } from "react";
import "./TweetBox.css";
import profilePic from "../../images/Amr.jpg";
// import profileImage from "../../images/Amr.jpg";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
import ShowTweet from "../../atoms/showTweet/ShowTweet";
import { useRecoilState } from "recoil";
import { selectFile, totalTweets } from "../../recoil-states";

function TweetBox({showMore}) {
  const [tweets, setTweets] = useRecoilState(totalTweets);
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    // console.log("TweetMessage",tweetMessage)
    let obj = {
      profilePic: profilePic,
      name: "Amar",
      verified: true,
      handlerName: "@amarsahu",
      organization: "Student Organization",
      followers: 40,
      followings: 4,
      joinedDate: "21 Jan 2023",
      tweets: [
        {
          tweetText: tweetMessage,
          tweetPic: selectedFile,
          tweetCount: 0,
          retweetCount: 0,
          likesCount: 0,
          viewsCount: "0",
          TweetReplies: [
            {
              name: "Arjun ranavat",
              handlerName: "@Arjun6787",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
            {
              name: "charls Darvin",
              handlerName: "@charls",
              tweetReplyText:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },
          ],
        },
      ],
    };
    setTweetMessage("");
    setTweetImage("");
    setTweets([obj, ...tweets]);
    // console.log([obj, ...tweets])
    setSelectedFile(null);
  };
  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <WhatsHappeningTweets
          btnStyle="WhatsHappeningTweets"
          placeHolder="What's happening?"
          values={tweetMessage}
          handleChange={(e) => setTweetMessage(e.target.value)}
          tweetImage={tweetImage}
          handleTweetImage={(e) => setTweetImage(e.target.value)}
        />
        <TweetFooter handleClick={sendTweet} />
        {!showMore?<ShowTweet />:""}
      </form>
    </div>
  );
}

export default TweetBox;
