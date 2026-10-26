
import React from "react";

function MobileNavbar({ page, currentUser, onMenu, onToggleDrawer }) {

  function handleHome() {
    onMenu("home");
  }

  function handleNotifications() {
    onMenu("notifications");
  }

  function handleSearch() {
    onMenu("search");
  }

  function handleCreate() {
    onMenu("create");
  }

  function handleReels() {
    onMenu("reels");
  }

  function handleProfile() {
    onMenu("profile");
  }

  let homeClass = "mobile-icon";
  let reelsClass = "mobile-icon";

  if (page === "home") {
    homeClass = "mobile-icon on";
  }

  if (page === "reels") {
    reelsClass = "mobile-icon on";
  }

  return (
    <>
      {/* Top navigation */}
      <div className="mobile-top">

        <button className="mobile-icon" onClick={onToggleDrawer}>
          <i className="bi bi-list"></i>
        </button>

        <span className="mobile-logo" onClick={handleHome}>
          Instagram
        </span>

        <button className="mobile-icon" onClick={handleNotifications}>
          <i className="bi bi-heart"></i>
        </button>

      </div>

      {/* Bottom navigation */}
      <div className="mobile-bottom">

        <button className={homeClass} onClick={handleHome}>
          <i className="bi bi-house-door"></i>
        </button>

        <button className="mobile-icon" onClick={handleSearch}>
          <i className="bi bi-search"></i>
        </button>

        <button className="mobile-icon" onClick={handleCreate}>
          <i className="bi bi-plus-square"></i>
        </button>

        <button className={reelsClass} onClick={handleReels}>
          <i className="bi bi-camera-reels"></i>
        </button>

        <button className="mobile-icon" onClick={handleProfile}>
          <img
            src={currentUser.avatar}
            alt="me"
            className="round-img"
            width="26"
            height="26"
          />
        </button>

      </div>
    </>
  );
}

export default MobileNavbar;
