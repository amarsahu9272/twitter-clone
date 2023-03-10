import React from "react";
import { Link } from "react-router-dom";
import "./SidebarOption.css";
function SidebarOption({ keys, active, text, Icon }) {
  return (
    keys === 6 ? (
      <Link to="/ProfilePage">
        <div key={keys} className={`sidebarOption ${active && "sidebarOption--active"}`}>
          <Icon />
          <h2>{text}</h2>
        </div>
      </Link>
    ) : (
      <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon />
        <h2>{text}</h2>
      </div>
    )
  );
}

export default SidebarOption;
