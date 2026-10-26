
import React from "react";

function Settings({ settings, onChange, onReset, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box small-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <span></span>
          <b>Settings</b>
          <button className="icon-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="modal-body">
          <label className="setting-row">
            <span>
              <i className="bi bi-moon"></i> Dark mode
            </span>
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.dark}
              onChange={(e) => onChange("dark", e.target.checked)}
            />
          </label>

          <label className="setting-row">
            <span>
              <i className="bi bi-lock"></i> Private account
            </span>
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.privateAccount}
              onChange={(e) => onChange("privateAccount", e.target.checked)}
            />
          </label>

          <label className="setting-row">
            <span>
              <i className="bi bi-bell"></i> Push notifications
            </span>
            <input
              type="checkbox"
              className="form-check-input"
              checked={settings.notifications}
              onChange={(e) => onChange("notifications", e.target.checked)}
            />
          </label>

          <button
            className="small-btn gray-btn full reset-btn"
            onClick={onReset}
          >
            Reset all demo data
          </button>

          <p className="gray-text small-text note-text">
            This is a my own  project. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
