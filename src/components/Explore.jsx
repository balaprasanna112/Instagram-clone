
import React, { useState } from "react";
import { exploreImages } from "../data/posts";

function Explore({ posts }) {
  const [selected, setSelected] = useState("");

  // Get images from posts and explore images
  let postImages = posts.map((p) => p.image);
  let images = [...postImages, ...exploreImages];

  // Open an image
  function handleImageClick(img) {
    setSelected(img);
  }

  // Close the image
  function handleClose() {
    setSelected("");
  }

  // Prevent closing when clicking the image
  function handleImageView(e) {
    e.stopPropagation();
  }

  return (
    <div>
      <h3 className="page-title">Explore</h3>

      <div className="grid-3">
        {images.map((img, i) => {
          let likes = ((i + 3) * 1371) % 9000 + 500;

          return (
            <div
              className="grid-item"
              key={i}
              onClick={() => handleImageClick(img)}
            >
              <img src={img} alt="explore" />

              <div className="grid-hover">
                <i className="bi bi-heart-fill"></i> {likes}
              </div>
            </div>
          );
        })}
      </div>

      {selected !== "" && (
        <div className="modal-overlay" onClick={handleClose}>
          <button className="story-close" onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </button>

          <img
            src={selected}
            alt="big"
            className="lightbox-img"
            onClick={handleImageView}
          />
        </div>
      )}
    </div>
  );
}

export default Explore;
