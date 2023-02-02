import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { postProfileClick } from "../../recoil-states";
import "./SidebarOption.css";
function SidebarOption({ keys, active, text, Icon }) {
  const setPostProfileClick = useSetRecoilState(postProfileClick);

  function handleHomeClick() {
    setPostProfileClick(false);
  }

  if (keys === 0) {
    return (
      <Link to="/">
        <div
          onClick={handleHomeClick}
          key={keys}
          className={`sidebarOption ${active && "sidebarOption--active"}`}
        >
          <Icon />
          <h2>{text}</h2>
        </div>
      </Link>
    );
  } else if (keys === 6) {
    if (keys === 6) {
      return (
        <Link to="/DemoProfilePage">
          <div
            key={keys}
            className={`sidebarOption ${active && "sidebarOption--active"}`}
          >
            <Icon />
            <h2>{text}</h2>
          </div>
        </Link>
      );
    }
  } else {
    return (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    );
  }
}

export default SidebarOption;
