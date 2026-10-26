
import React, { useState, useRef } from "react";
import CommentSection from "./CommentSection";
import { copyText } from "../utils";

function Post({
  post,
  currentUser,
  isFollowing,
  onLike,
  onSave,
  onComment,
  onShare,
  onFollow,
  onToast
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const inputRef = useRef(null);

  let isMine = false;

  if (post.username === currentUser.username) {
    isMine = true;
  }

  // Like the post by double-clicking the image
  function handleDoubleClick() {
    if (post.liked === false) {
      onLike(post.id);
    }

    setShowHeart(true);

    setTimeout(() => {
      setShowHeart(false);
    }, 800);
  }

  // Open comments and focus the input
  function handleCommentClick() {
    setShowAll(true);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // Copy the post link
  function handleCopyLink() {
    let link = window.location.origin + "/post/" + post.id;

    copyText(link);
    onToast("Link copied to clipboard");

    setShowMenu(false);
  }

  // Report the post
  function handleReport() {
    onToast("Thanks for letting us know. (Simulated report)");
    setShowMenu(false);
  }

  // Close the menu
  function handleCloseMenu() {
    setShowMenu(false);
  }

  // Get the heart icon class
  let heartClass = "bi bi-heart";

  if (post.liked) {
    heartClass = "bi bi-heart-fill liked";
  }

  // Get the save icon class
  let saveClass = "bi bi-bookmark";

  if (post.saved) {
    saveClass = "bi bi-bookmark-fill";
  }

  return (
    <div className="post">

      {/* Post header */}
      <div className="post-header">
        <img
          src={post.avatar}
          alt={post.username}
          className="round-img post-avatar"
        />

        <div className="post-user">
          <div>
            <b>{post.username}</b>

            {post.verified && (
              <i className="bi bi-patch-check-fill verified-badge"></i>
            )}

            <span className="gray-text"> • {post.timeAgo}</span>
          </div>

          {post.location && (
            <div className="gray-text post-location">
              {post.location}
            </div>
          )}
        </div>

        <button
          className="icon-btn"
          onClick={() => setShowMenu(true)}
        >
          <i className="bi bi-three-dots"></i>
        </button>
      </div>

      {/* Post image */}
      <div
        className="post-image-box"
        onDoubleClick={handleDoubleClick}
      >
        <img
          src={post.image}
          alt="post"
          className="post-image"
        />

        {showHeart && (
          <i className="bi bi-heart-fill big-heart"></i>
        )}
      </div>

      {/* Like, comment, share and save buttons */}
      <div className="post-actions">
        <div>
          <button
            className="icon-btn"
            onClick={() => onLike(post.id)}
          >
            <i className={heartClass}></i>
          </button>

          <button
            className="icon-btn"
            onClick={handleCommentClick}
          >
            <i className="bi bi-chat"></i>
          </button>

          <button
            className="icon-btn"
            onClick={() => onShare(post)}
          >
            <i className="bi bi-send"></i>
          </button>
        </div>

        <button
          className="icon-btn"
          onClick={() => onSave(post.id)}
        >
          <i className={saveClass}></i>
        </button>
      </div>

      {/* Post likes */}
      <div className="post-likes">
        {post.likedBy ? (
          <span>
            Liked by <b>{post.likedBy}</b> and{" "}
            <b>{post.likes.toLocaleString()} others</b>
          </span>
        ) : (
          <b>{post.likes.toLocaleString()} likes</b>
        )}
      </div>

      {/* Post caption and hashtags */}
      <div className="post-caption">
        <b>{post.username}</b> {post.caption}

        {post.hashtags.map((hashtag) => {
          return (
            <span className="hashtag" key={hashtag}>
              {" "}{hashtag}
            </span>
          );
        })}
      </div>

      {/* Comments */}
      <CommentSection
        post={post}
        showAll={showAll}
        onShowAll={() => setShowAll(true)}
        onComment={onComment}
        inputRef={inputRef}
      />

      {/* Three-dot menu */}
      {showMenu && (
        <div
          className="modal-overlay"
          onClick={handleCloseMenu}
        >
          <div
            className="modal-box menu-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {!isMine && (
              <button
                className="menu-row red"
                onClick={() => {
                  onFollow(post.username);
                  setShowMenu(false);
                }}
              >
                {isFollowing ? "Unfollow" : "Follow"}
              </button>
            )}

            <button
              className="menu-row"
              onClick={() => {
                onSave(post.id);
                setShowMenu(false);
              }}
            >
              {post.saved ? "Remove from saved" : "Save"}
            </button>

            <button
              className="menu-row"
              onClick={() => {
                setShowMenu(false);
                onShare(post);
              }}
            >
              Share to...
            </button>

            <button
              className="menu-row"
              onClick={handleCopyLink}
            >
              Copy link
            </button>

            <button
              className="menu-row red"
              onClick={handleReport}
            >
              Report
            </button>

            <button
              className="menu-row"
              onClick={handleCloseMenu}
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

export default Post;
