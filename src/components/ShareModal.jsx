
import React, { useState } from "react";
import { allUsers } from "../data/users";
import { copyText } from "../utils";

function ShareModal({ post, onClose, onToast }) {
  const [sent, setSent] = useState({});

  function handleSend(username) {
    setSent({ ...sent, [username]: true });
    onToast("Post sent to " + username);
  }

  function handleCopyLink() {
    copyText(window.location.origin + "/post/" + post.id);
    onToast("Link copied to clipboard");
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box small-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <span></span>
          <b>Share</b>
          <button className="icon-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body list-body">
          {allUsers.slice(0, 6).map((user) => (
            <div className="user-row" key={user.username}>
              <img
                src={user.avatar}
                alt=""
                className="round-img"
                width="44"
                height="44"
              />

              <div className="user-row-text">
                <b>{user.username}</b>
                <div className="gray-text">{user.fullName}</div>
              </div>

              <button
                className={
                  sent[user.username]
                    ? "small-btn gray-btn"
                    : "small-btn blue-btn"
                }
                disabled={sent[user.username]}
                onClick={() => handleSend(user.username)}
              >
                {sent[user.username] ? "Sent" : "Send"}
              </button>
            </div>
          ))}
        </div>

        <div className="modal-footer-row">
          <button className="small-btn gray-btn full" onClick={handleCopyLink}>
            <i className="bi bi-link-45deg"></i> Copy link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
