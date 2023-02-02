import React, { useEffect, useState } from "react";
import "./TweetYourReply.css";
import ReplyDialogBox from "../replyDialogBox/ReplyDialogBox";
import { useRecoilState } from "recoil";
import { totalTweets } from "../../recoil-states";
import { useParams } from "react-router-dom";
import Post from "../post/Post";

function TweetYourReply() {
  const [allTweets] = useRecoilState(totalTweets);
  const [replyData, setReplyData] = useState("");
  const { handlerName } = useParams();
  // const [isVisible, setIsVisible] = useState(false);

  function findUserProfile(handlerName) {
    const profileData = allTweets.find(
      (profiledata) => profiledata.handlerName === handlerName
    );
    setReplyData(profileData);
  }
  useEffect(() => {
    findUserProfile(handlerName);
  }, [handlerName]);
  // function handleTweetUrReply() {
  //   setIsVisible(true);
  // }
  return (
    <>
      <div className="tweetUrReply">
        {allTweets.map((post, i) => (
          <Post key={i} profiledata={post} />
        ))}
      </div>
      {/* <div className="tweetPage">
        {replyData && <Post profiledata={replyData} />}
      </div> */}
      {/* {replyData && <ReplyDialogBox isVisible={isVisible} />} */}
      {replyData && <ReplyDialogBox isVisible={true} replyData={replyData}/>}
    </>
  );
}

export default TweetYourReply;
