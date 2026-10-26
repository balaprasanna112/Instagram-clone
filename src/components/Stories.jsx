
import React, { useState, useRef } from "react";
import { readImage } from "../utils";

function Stories({ stories, viewed, currentUser, onOpen, onAddStory }) {
  const [showAdd, setShowAdd] = useState(false);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const rowRef = useRef(null);

  function scrollRight() {
    rowRef.current.scrollBy({ left: 250, behavior: "smooth" });
  }

  function handleFile(e) {
    let file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }

    setError("");
    readImage(file, setPreview);
  }

  function closeAdd() {
    setShowAdd(false);
    setPreview("");
    setError("");
  }

  function shareStory() {
    if (preview === "") {
      setError("Please choose an image first.");
      return;
    }

    onAddStory(preview);
    closeAdd();
  }

  return (
    <div className="stories-wrapper">
      <div className="stories-row" ref={rowRef}>
        <div className="story-item" onClick={() => setShowAdd(true)}>
          <div className="story-ring no-ring">
            <img
              src={currentUser.avatar}
              alt="you"
              className="round-img story-img"
            />
            <span className="story-plus">
              <i className="bi bi-plus"></i>
            </span>
          </div>
          <span className="story-name">Your story</span>
        </div>

        {stories.map((story, index) => (
          <div
            className="story-item"
            key={story.id}
            onClick={() => onOpen(index)}
          >
            <div
              className={
                viewed.includes(story.id) ? "story-ring seen" : "story-ring"
              }
            >
              <img
                src={story.avatar}
                alt={story.username}
                className="round-img story-img"
              />
            </div>
            <span className="story-name">{story.username}</span>
          </div>
        ))}
      </div>

      <button className="stories-next" onClick={scrollRight}>
        <i className="bi bi-chevron-right"></i>
      </button>

      {showAdd && (
        <div className="modal-overlay" onClick={closeAdd}>
          <div
            className="modal-box small-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <button
                className="blue-text-btn gray-text"
                onClick={closeAdd}
              >
                Cancel
              </button>

              <b>Add to your story</b>

              <button className="blue-text-btn" onClick={shareStory}>
                Share
              </button>
            </div>

            <div className="modal-body center">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="story-preview"
                />
              ) : (
                <div className="empty-preview">
                  <i className="bi bi-images"></i>
                  <p>Choose a photo for your story</p>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="form-control mt-3"
              />

              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stories;
