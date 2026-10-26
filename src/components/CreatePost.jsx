
import React, { useState } from "react";
import { readImage } from "../utils";

function CreatePost({ currentUser, onPublish, onClose }) {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [error, setError] = useState("");

  function handleFile(e) {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file (jpg, png...).");
      return;
    }

    setError("");
    readImage(file, setImage);
  }

  function handlePublish() {
    if (image === "") {
      setError("Please choose an image first.");
      return;
    }

    if (caption.trim() === "") {
      setError("Please write a caption.");
      return;
    }

    onPublish(image, caption.trim());
  }

  let preview;

  if (image !== "") {
    preview = (
      <img src={image} alt="preview" className="create-preview" />
    );
  } else {
    preview = (
      <div className="empty-preview">
        <i className="bi bi-images"></i>
        <p>Select a photo from your computer</p>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box create-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <button
            className="blue-text-btn gray-text"
            onClick={onClose}
          >
            Cancel
          </button>

          <b>Create new post</b>

          <button className="blue-text-btn" onClick={handlePublish}>
            Publish
          </button>
        </div>

        <div className="create-body">
          <div className="create-left">
            {preview}

            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              className="form-control mt-2"
            />
          </div>

          <div className="create-right">
            <div className="user-row">
              <img
                src={currentUser.avatar}
                alt=""
                className="round-img"
                width="32"
                height="32"
              />
              <b>{currentUser.username}</b>
            </div>

            <textarea
              placeholder="Write a caption... (use #hashtags)"
              value={caption}
              maxLength={300}
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>

            <div className="gray-text count-text">
              {caption.length}/300
            </div>

            {error !== "" && <p className="error-text">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
