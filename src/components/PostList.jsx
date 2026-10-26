import React from "react";
import Post from "./Post";

// The whole feed: one <Post /> for every post in the list
function PostList({ posts, currentUser, following, onLike, onSave, onComment, onShare, onFollow, onToast }) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          currentUser={currentUser}
          isFollowing={following[post.username]}
          onLike={onLike}
          onSave={onSave}
          onComment={onComment}
          onShare={onShare}
          onFollow={onFollow}
          onToast={onToast}
        />
      ))}

      <div className="caught-up">
        <i className="bi bi-check-circle-fill"></i>
        <h5>You're caught up</h5>
        <p className="gray-text">You've seen all new posts from the past 3 days.</p>
      </div>
    </div>
  );
}

export default PostList;
