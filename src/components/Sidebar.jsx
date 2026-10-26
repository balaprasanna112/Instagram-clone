
import React from "react";

const menuItems = [
  { name: "home", label: "Home", icon: "house-door" },
  { name: "search", label: "Search", icon: "search" },
  { name: "explore", label: "Explore", icon: "compass" },
  { name: "reels", label: "Reels", icon: "camera-reels" },
  { name: "messages", label: "Messages", icon: "send" },
  { name: "notifications", label: "Notifications", icon: "heart" },
  { name: "create", label: "Create", icon: "plus-square" },
];

function Sidebar({ page, panel, open, currentUser, unreadMessages, onMenu }) {
  let active = page;

  if (panel) {
    active = panel;
  }

  return (
    <div className={open ? "sidebar open" : "sidebar"}>
      <div className="sidebar-logo" onClick={() => onMenu("home")}>
        <i className="bi bi-instagram logo-icon"></i>
        <span className="logo-text">Instagram</span>
      </div>

      {menuItems.map((item) => (
        <button
          key={item.name}
          className={active === item.name ? "menu-item active" : "menu-item"}
          onClick={() => onMenu(item.name)}
        >
          <i className={"bi bi-" + item.icon}></i>
          <span>{item.label}</span>

          {item.name === "messages" && unreadMessages > 0 && (
            <span className="count-badge">{unreadMessages}</span>
          )}
        </button>
      ))}

      <button
        className={active === "profile" ? "menu-item active" : "menu-item"}
        onClick={() => onMenu("profile")}
      >
        <img
          src={currentUser.avatar}
          alt="me"
          className="round-img menu-avatar"
        />
        <span>Profile</span>
      </button>

      <div className="sidebar-bottom">
        <button className="menu-item" onClick={() => onMenu("more")}>
          <i className="bi bi-list"></i>
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
