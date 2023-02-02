import React from "react";
import profileImge from "../../images/Amr.jpg";
import "./WhatsHappeningTweets.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectFile } from "../../recoil-states";
import CloseIcon from "@mui/icons-material/Close";

function WhatsHappeningTweets({
  values,
  handleChange,
  placeHolder,
  tweetImage,
  handleTweetImage,
}) {
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);

  return (
    <>
      <div className="WhatsHappeningTweets">
        <Link to="/DemoProfilePage">
          <Avatar src={profileImge} className="avatar" />
        </Link>
        <input
          onChange={handleChange}
          value={values}
          placeholder={placeHolder}
          type="text"
        />
      </div>
      {selectedFile && (
        <div className="selectImage">
          <div onClick={() => setSelectedFile(null)}>
            <div className="cancelSelectImg">
              <CloseIcon />
            </div>
          </div>
          <img src={selectedFile} alt="selected File" />
        </div>
      )}
    </>
  );
}

export default WhatsHappeningTweets;
