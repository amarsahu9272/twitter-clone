import React from "react";
import "./Sidebar.css";
import { sideBarIcons } from "../../const";
import TwitterIconn from "../../atoms/twitterIconn/TwitterIconn";
import SidebarOption from "../../atoms/sidebarOption/SidebarOption";
import TwitterButton from "../../atoms/twitterButton/TwitterButton";
import ProfileButton from "../../atoms/profileButton/ProfileButton";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* <TwitterIcon /> */}
      <TwitterIconn />
      {sideBarIcons.map((icon, i) => (
        <SidebarOption
          active={icon.active}
          Icon={icon.Icons}
          text={icon.text}
        />
      ))}
      <Link to='/dialogbox/DialogBox'>
        <TwitterButton
          onClick=""
          btnText="Tweet"
          variant="outlined"
          btnStyle="sidebar__tweet"
        />
      </Link>
      <ProfileButton />
    </div>
  );
}

export default Sidebar;
