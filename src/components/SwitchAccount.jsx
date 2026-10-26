
import React from "react";

function SwitchAccount({ accounts, current, onSelect, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box small-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <span></span>
          <b>Switch account</b>

          <button className="icon-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body list-body">
          {accounts.map((account) => (
            <div
              className="user-row clickable"
              key={account.username}
              onClick={() => onSelect(account.username)}
            >
              <img
                src={account.avatar}
                alt=""
                className="round-img"
                width="48"
                height="48"
              />

              <div className="user-row-text">
                <b>{account.username}</b>
                <div className="gray-text">{account.fullName}</div>
              </div>

              {account.username === current && (
                <i className="bi bi-check-circle-fill blue-check"></i>
              )}
            </div>
          ))}
        </div>

        <p className="gray-text small-text note-text">
          Demo accounts only. Nothing here is a real login.
        </p>
      </div>
    </div>
  );
}

export default SwitchAccount;
