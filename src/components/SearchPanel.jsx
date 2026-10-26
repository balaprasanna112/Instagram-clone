
import React, { useState } from "react";
import { allUsers, suggestedUsers } from "../data/users";

function SearchPanel({ open, posts, following, onFollow, onClose, onOpenPost }) {
  const [query, setQuery] = useState("");

  if (!open) {
    return null;
  }

  let searchText = query.trim().toLowerCase();

  let users = [
    ...allUsers.map((user) => ({
      username: user.username,
      name: user.fullName,
      avatar: user.avatar
    })),
    ...suggestedUsers.map((user) => ({
      username: user.username,
      name: user.info,
      avatar: user.avatar
    }))
  ];

  let userResults = users.filter((user) => {
    return (
      user.username.toLowerCase().includes(searchText) ||
      user.name.toLowerCase().includes(searchText)
    );
  });

  let postResults = posts.filter((post) => {
    return (
      post.username.toLowerCase().includes(searchText) ||
      post.caption.toLowerCase().includes(searchText) ||
      post.hashtags.join(" ").toLowerCase().includes(searchText)
    );
  });

  if (searchText === "") {
    userResults = [];
    postResults = [];
  }

  return (
    <>
      <div className="panel-overlay" onClick={onClose}></div>

      <div className="side-panel">
        <div className="panel-header">
          <h4>Search</h4>
          <button className="icon-btn" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="search-box">
          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search users, captions, #hashtags"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />

          {query && (
            <button onClick={() => setQuery("")}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          )}
        </div>

        <div className="panel-list">
          {searchText === "" && (
            <p className="gray-text panel-empty">Type something to search.</p>
          )}

          {searchText !== "" &&
            userResults.length === 0 &&
            postResults.length === 0 && (
              <p className="gray-text panel-empty">No results found.</p>
            )}

          {userResults.length > 0 && (
            <b className="result-title">Accounts</b>
          )}

          {userResults.map((user) => (
            <div className="user-row" key={user.username}>
              <img
                src={user.avatar}
                alt=""
                className="round-img"
                width="44"
                height="44"
              />

              <div className="user-row-text">
                <b>{user.username}</b>
                <div className="gray-text small-text">{user.name}</div>
              </div>

              <button
                className={
                  following[user.username]
                    ? "follow-btn following"
                    : "follow-btn"
                }
                onClick={() => onFollow(user.username)}
              >
                {following[user.username] ? "Following" : "Follow"}
              </button>
            </div>
          ))}

          {postResults.length > 0 && (
            <b className="result-title">Posts</b>
          )}

          {postResults.map((post) => (
            <div
              className="user-row clickable"
              key={post.id}
              onClick={onOpenPost}
            >
              <img src={post.image} alt="" className="result-thumb" />

              <div className="user-row-text">
                <b>{post.username}</b>
                <div className="gray-text small-text">
                  {post.caption.slice(0, 50)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPanel;
