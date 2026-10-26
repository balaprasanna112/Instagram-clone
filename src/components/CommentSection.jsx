
import React, { useState } from "react";

function CommentSection({ post, showAll, onShowAll, onComment, inputRef }) {

  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState({});

  let commentsToShow = [];

  // Get the comments from the post
  if (post.comments) {
    if (showAll === true) {
      commentsToShow = post.comments;
    } else {
      commentsToShow = post.comments.slice(-2);
    }
  }

  // Handle the comment input
  function handleCommentChange(e) {
    let value = e.target.value;
    setComment(value);
  }

  // Add a new comment
  function handlePostComment(e) {
    e.preventDefault();

    let newComment = comment.trim();

    if (newComment === "") {
      return;
    }

    onComment(post.id, newComment);

    setComment("");
  }

  // Like or unlike a comment
  function handleCommentLike(id) {
    let newLikes = { ...likes };

    if (newLikes[id] === true) {
      newLikes[id] = false;
    } else {
      newLikes[id] = true;
    }

    setLikes(newLikes);
  }

  // Check whether a comment is liked
  function isCommentLiked(id) {
    if (likes[id] === true) {
      return true;
    } else {
      return false;
    }
  }

  // Get the correct heart icon
  function getHeartClass(id) {
    if (isCommentLiked(id)) {
      return "bi bi-heart-fill liked small-heart";
    } else {
      return "bi bi-heart small-heart";
    }
  }

  // Check whether to show the View All button
  let showViewAllButton = false;

  if (post.totalComments > 0 && showAll === false) {
    showViewAllButton = true;
  }

  // Get the text for the Post button
  let postButtonClass = "post-btn";

  if (comment.trim() === "") {
    postButtonClass = "post-btn faded";
  }

  return (
    <div className="comment-section">

      {/* View all comments button */}
      {showViewAllButton && (
        <button
          className="view-comments"
          onClick={onShowAll}
        >
          View all {post.totalComments.toLocaleString()} comments
        </button>
      )}

      {/* Display the comments */}
      {commentsToShow.map((c) => {

        return (
          <div className="comment-line" key={c.id}>

            <span>
              <b>{c.username}</b> {c.text}
            </span>

            <button
              type="button"
              onClick={() => handleCommentLike(c.id)}
            >
              <i className={getHeartClass(c.id)}></i>
            </button>

          </div>
        );
      })}

      {/* Display post time */}
      <div className="post-time">
        {post.timeFull}
      </div>

      {/* Add a new comment */}
      <form
        className="add-comment"
        onSubmit={handlePostComment}
      >

        <i className="bi bi-emoji-smile"></i>

        <input
          type="text"
          placeholder="Add a comment..."
          value={comment}
          ref={inputRef}
          onChange={handleCommentChange}
        />

        <button
          type="submit"
          className={postButtonClass}
        >
          Post
        </button>

      </form>

    </div>
  );
}

export default CommentSection;
