
import React, { useState } from "react";
import { sampleNotifications } from "../data/users";

function Notifications({ open, onClose }) {
  const [list, setList] = useState(sampleNotifications);

  function handleClear() {
    setList([]);
  }

  if (open === false) {
    return null;
  }

  let hasNotifications = false;

  if (list.length > 0) {
    hasNotifications = true;
  }

  return (
    <>
      {/* Close panel when clicking outside */}
      <div className="panel-overlay" onClick={onClose}></div>

      <div className="side-panel">

        {/* Panel header */}
        <div className="panel-header">
          <h4>Notifications</h4>

          <button className="icon-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {/* Notification list */}
        <div className="panel-list">

          {hasNotifications && (
            <button
              className="blue-text-btn clear-btn"
              onClick={handleClear}
            >
              Clear all
            </button>
          )}

          {list.length === 0 && (
            <p className="gray-text panel-empty">
              No new notifications.
            </p>
          )}

          {list.map((n) => {
            return (
              <div className="user-row" key={n.id}>

                <img
                  src={n.avatar}
                  alt=""
                  className="round-img"
                  width="44"
                  height="44"
                />

                <div className="user-row-text">
                  <b>{n.username}</b> {n.text}{" "}
                  <span className="gray-text">{n.time}</span>
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default Notifications;
