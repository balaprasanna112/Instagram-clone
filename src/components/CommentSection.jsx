
import React, { useState } from "react";

function CommentSection({ post, showAll, onShowAll, onComment, inputRef }) {

  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState({});

  let commentsToShow = [];

  
  if (post.comments) {
    if (showAll === true) {
      commentsToShow = post.comments;
    } else {
      commentsToShow = post.comments.slice(-2);
    }
  }

  function handleCommentChange(e) {
    let value = e.target.value;
    setComment(value);
  }

 
  function handlePostComment(e) {
    e.preventDefault();

    let newComment = comment.trim();

    if (newComment === "") {
      return;
    }

    onComment(post.id, newComment);

    setComment("");
  }

  function handleCommentLike(id) {
    let newLikes = { ...likes };

    if (newLikes[id] === true) {
      newLikes[id] = false;
    } else {
      newLikes[id] = true;
    }

    setLikes(newLikes);
  }

  function isCommentLiked(id) {
    if (likes[id] === true) {
      return true;
    } else {
      return false;
    }
  }

  function getHeartClass(id) {
    if (isCommentLiked(id)) {
      return "bi bi-heart-fill liked small-heart";
    } else {
      return "bi bi-heart small-heart";
    }
  }

  let showViewAllButton = false;

  if (post.totalComments > 0 && showAll === false) {
    showViewAllButton = true;
  }

  let postButtonClass = "post-btn";

  if (comment.trim() === "") {
    postButtonClass = "post-btn faded";
  }

  return (
    <div className="comment-section">

      {}
      {showViewAllButton && (
        <button
          className="view-comments"
          onClick={onShowAll}
        >
          View all {post.totalComments.toLocaleString()} comments
        </button>
      )}

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

      <div className="post-time">
        {post.timeFull}
      </div>

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
