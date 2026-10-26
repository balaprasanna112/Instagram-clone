
import React from "react";

function MoreMenu({
  savedCount,
  onClose,
  onSettings,
  onSaved,
  onSwitch,
  onLogout
}) {
  let showSavedCount = false;

  if (savedCount > 0) {
    showSavedCount = true;
  }

  return (
    <>
      {/* Close menu when clicking outside */}
      <div className="panel-overlay" onClick={onClose}></div>

      <div className="more-menu">

        <button className="more-item" onClick={onSettings}>
          <i className="bi bi-gear"></i> Settings
        </button>

        <button className="more-item" onClick={onSaved}>
          <i className="bi bi-bookmark"></i> Saved

          {showSavedCount && (
            <span className="gray-text">
              ({savedCount})
            </span>
          )}
        </button>

        <button className="more-item" onClick={onSwitch}>
          <i className="bi bi-arrow-left-right"></i> Switch account
        </button>

        <div className="more-divider"></div>

        <button className="more-item" onClick={onLogout}>
          <i className="bi bi-box-arrow-right"></i> Log out
        </button>

      </div>
    </>
  );
}

export default MoreMenu;
