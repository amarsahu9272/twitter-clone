import React from "react";
import "./Sidebar.css";
import { sideBarIcons } from "../../const";
import TwitterIconn from "../../atoms/twitterIconn/TwitterIconn";
import SidebarOption from "../../atoms/sidebarOption/SidebarOption";
// import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import ProfileButton from "../../atoms/profileButton/ProfileButton";
import DialogBox from "../../components/dialogbox/DialogBox";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { postProfileClick } from "../../recoil-states";
function Sidebar() {
  const setPostProfileClick = useSetRecoilState(postProfileClick);

  function handleTwitterIconClick() {
    setPostProfileClick(false);
  }
  return (
    <div className="sidebar">
      {/* <TwitterIcon /> */}
      <div onClick={handleTwitterIconClick}>
        <Link to="/">
          <TwitterIconn />
        </Link>
      </div>
      {sideBarIcons.map((icon, i) => (
        <div key={i}>
          {" "}
          <SidebarOption
            keys={i}
            active={icon.active}
            Icon={icon.Icons}
            text={icon.text}
          />
        </div>
      ))}
      <DialogBox />
      <ProfileButton />
    </div>
  );
}

export default Sidebar;
