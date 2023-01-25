import React from "react";
import "./Feed.css";
import Post from "../../components/post/Post";
import TweetBox from "../../components/tweetBox/TweetBox";
import { totalTweets } from "../../recoil-states";
import { useRecoilState } from "recoil";
function Feed() {
  // let posts = JSON.parse(localStorage.getItem("tweet")) || [];
  const [
    tweetPosts,
    // setTweetPosts
  ] = useRecoilState(totalTweets);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <div>
          <p>For you</p>
          <p>Following</p>
        </div>
      </div>

      <TweetBox />

      {tweetPosts.map((post) => (
        <Post
          // key={post.text}
          // displayName={post.displayName}
          // username={post.username}
          // verified={post.verified}
          // text={post.text}
          // avatar={post.avatar}
          // image={post.image}
          key={post.name}
          profiledata={post}
        />
      ))}
    </div>
  );
}

export default Feed;
