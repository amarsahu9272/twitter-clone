import React, { useRef } from "react";
import "./TweetFooterIcons.css";
import { tweetBoxIcon } from "../../const";
import { useRecoilState } from "recoil";
import { selectFile } from "../../recoil-states";
function TweetFooterIcons() {
  const [selectedFile, setSelectedFile] = useRecoilState(selectFile);
  const filePickerRef = useRef("");

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <div className="tweetFooterIcons">
      {tweetBoxIcon.map((icon, i) =>
        i === 0 ? (
          <>
            <p
              key={i+1}
              style={{ padding: ".4rem" }}
              onClick={() => filePickerRef.current.click()}
            >
              {<icon.Icon />}
            </p>

            <input
              key={i}
              type="file"
              hidden
              onChange={addImageToPost}
              ref={filePickerRef}
            />
          </>
        ) : (
          <p key={i} style={{ padding: ".4rem" }}>
            {<icon.Icon />}
          </p>
        )
      )}
    </div>
  );
}

export default TweetFooterIcons;
