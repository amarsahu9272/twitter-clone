import React, { useState } from "react";
import "./WhatsHappening.css";
import { whatsHappenigData } from "../../const";
import { useSetRecoilState } from "recoil";
import { isInterestAtom } from "../../recoil-states";
import { Popover } from "@mui/material";
function WhatsHappening() {
  let [whatHappeningData, setWhatHappeningData] = useState(whatsHappenigData);
  const [anchor, setAnchor] = useState(null);
  const setUserIntersted = useSetRecoilState(isInterestAtom);
  const popoverProfileButton = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleInterest = (wData) => {
    // var updatedData= [...whatHappeningData]
    // console.log( udatedData[i].isNotInterested)
    // updatedData[i].isNotInterested=true
    // setWhatHappeningData(updatedData)
    console.log(wData.id);
    const indexOfClickedHappen = whatHappeningData.findIndex(
      (index) => index.id === wData.id
    );
    console.log(indexOfClickedHappen);
    whatHappeningData[indexOfClickedHappen].isNotInterested = true;
    // !whatHappeningData[indexOfClickedHappen].isNotInterested;
    setWhatHappeningData([...whatHappeningData]);
    setUserIntersted(false);
    setAnchor(null);
  };

  return (
    <div className="whatsHappeningContainer">
      <h2>What's happening</h2>
      {/* <TwitterEmbedded/> */}
      <div className="trends-p">
        {whatHappeningData.map(
          (wData, i) =>
            !wData.isNotInterested && (
              <div key={whatHappeningData.id} className="trending">
                <div className="trends">
                  <span>{wData.trends}</span>
                  <h3>#{wData.trending}</h3>
                  <span>{wData.noTweet} Tweets</span>
                </div>
                <p key={i + 1} onClick={popoverProfileButton}>
                  ...
                </p>
                <Popover
                  key={i + 2}
                  open={Boolean(anchor)}
                  anchorEl={anchor}
                  onClose={() => setAnchor(null)}
                  PaperProps={{
                    style: {
                      marginLeft: "-8rem",
                      borderRadius: "1rem",
                    },
                  }}
                >
                  <div className="popoverContent-w">
                    <div onClick={() => handleInterest(wData)}>
                      Not interested in this
                    </div>
                    <div onClick={() => handleInterest(wData)}>
                      This trend is harful or spammy
                    </div>
                  </div>
                </Popover>
              </div>
            )
        )}
      </div>
      <a href="https://twitter.com/nanapatekar9272">Show more</a>
    </div>
  );
}

export default WhatsHappening;
