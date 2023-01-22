import React from "react";
import "./WhatsHappening.css";
import {whatsHappenigData} from '../../const'
function WhatsHappening() {
  return (
    <div className="whatsHappeningContainer">
    <h2>What's happening</h2>
    {/* <TwitterEmbedded/> */}
    <div className="trends-p">
      {whatsHappenigData.map((wData, i) => (
        <div className="trending" key={i}>
          <div className="trends">
            <span>{wData.trends}</span>
            <h3>#{wData.trending}</h3>
            <span>{wData.noTweet} Tweets</span>
          </div>
          <p>...</p>
        </div>
      ))}
    </div>
    <a href="https://twitter.com/nanapatekar9272">Show more</a>
  </div>
  );
}

export default WhatsHappening;
