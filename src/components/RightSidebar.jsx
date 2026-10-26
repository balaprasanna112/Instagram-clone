
import React from "react";
import { suggestedUsers } from "../data/users";
import "../styles/RightSidebar.css";

function RightSidebar({ currentUser, following, onFollow, onSwitch }) {
  function handleFollow(username) {
    onFollow(username);
  }

  return (
    <div className="right-sidebar">
      <div className="me-row">
        <img
          src={currentUser.avatar}
          alt="me"
          className="round-img"
          width="44"
          height="44"
        />

        <div className="me-text">
          <b>
            {currentUser.username}
            {currentUser.verified && (
              <i className="bi bi-patch-check-fill verified-badge"></i>
            )}
          </b>
          <div className="gray-text">{currentUser.fullName}</div>
        </div>

        <button className="blue-text-btn" onClick={onSwitch}>
          Switch
        </button>
      </div>

      <div className="suggest-title">
        <b className="gray-text">Suggested for you</b>
        <button className="see-all">See All</button>
      </div>

      {suggestedUsers.map((user) => (
        <div className="suggest-row" key={user.username}>
          <img
            src={user.avatar}
            alt=""
            className="round-img"
            width="36"
            height="36"
          />

          <div className="me-text">
            <b>{user.username}</b>
            <div className="gray-text small-text">{user.info}</div>
          </div>

          <button
            className={
              following[user.username] ? "follow-btn following" : "follow-btn"
            }
            onClick={() => handleFollow(user.username)}
          >
            {following[user.username] ? "Following" : "Follow"}
          </button>
        </div>
      ))}

      <div className="footer-links">
        About · Help · Press · API · Jobs · Privacy · Terms · Locations · Language
      </div>

      <div className="footer-links">
        © 2025 INSTAGRAM CLONE (COLLEGE PROJECT)
      </div>
    </div>
  );
}

export default RightSidebar;
