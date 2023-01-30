import React, { useState } from "react";
import "./TweetBox.css";
import profilePic from "../../images/Amr.jpg";
// import profileImage from "../../images/Amr.jpg";
import WhatsHappeningTweets from "../whatsHappeningTweets/WhatsHappeningTweets";
import TweetFooter from "../tweetFooter/TweetFooter";
import ShowTweet from "../../atoms/showTweet/ShowTweet";
import { useRecoilState } from "recoil";
import { selectFile, totalTweets } from "../../recoil-states";

function TweetBox() {
  const [tweets, setTweets] = useRecoilState(totalTweets);
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    console.log("TweetMessage",tweetMessage)
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
          tweetCount: 100,
          retweetCount: 100,
          likesCount: 100,
          viewsCount: "102k",
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
          values={tweetMessage}
          handleChange={(e) => setTweetMessage(e.target.value)}
          tweetImage={tweetImage}
          handleTweetImage={(e) => setTweetImage(e.target.value)}
        />
        <TweetFooter handleClick={sendTweet} />
        <ShowTweet />
      </form>
    </div>
  );
}

export default TweetBox;
