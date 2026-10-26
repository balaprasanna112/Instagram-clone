
import React from "react";

function SavedPosts({ posts, onUnsave }) {
  let saved = posts.filter((post) => post.saved);

  return (
    <div>
      <h3 className="page-title">Saved</h3>

      {saved.length === 0 ? (
        <p className="gray-text">Nothing saved yet. Click the bookmark icon on a post to save it.</p>
      ) : (
        <div className="grid-3">
          {saved.map((post) => (
            <div className="grid-item" key={post.id}>
              <img src={post.image} alt="" />

              <button className="unsave-btn" onClick={() => onUnsave(post.id)}>
                <i className="bi bi-bookmark-fill"></i> Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPosts;
