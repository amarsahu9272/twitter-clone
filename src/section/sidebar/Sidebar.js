import React from "react";
import "./Sidebar.css";
import { sideBarIcons } from "../../const";
import TwitterIconn from "../../atoms/twitterIconn/TwitterIconn";
import SidebarOption from "../../atoms/sidebarOption/SidebarOption";
// import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import ProfileButton from "../../atoms/profileButton/ProfileButton";
import DialogBox from "../../components/dialogbox/DialogBox";
function Sidebar() {
  return (
    <div className="sidebar">
      {/* <TwitterIcon /> */}
      <TwitterIconn />
      {sideBarIcons.map((icon, i) => (
        <SidebarOption
          keys={i}
          active={icon.active}
          Icon={icon.Icons}
          text={icon.text}
        />
      ))}
      <DialogBox />
      <ProfileButton />
    </div>
  );
}

export default Sidebar;
