
import React, { useState } from "react";
import { profilePosts, profileReels, profileTagged } from "../data/posts";
import { copyText, formatCount, loadData, saveData } from "../utils";

function Profile({ currentUser, posts, following, onToast }) {
  const [tab, setTab] = useState("posts");
  const [editing, setEditing] = useState(false);

  const [bio, setBio] = useState(() =>
    loadData("bio_" + currentUser.username, currentUser.bio)
  );

  const [bioText, setBioText] = useState(bio);

  let myPosts = posts.filter((post) => {
    if (post.username === currentUser.username) {
      return true;
    } else {
      return false;
    }
  });

  let myImages = myPosts.map((post) => post.image);
  myImages = [...myImages, ...profilePosts];

  let followedCount = Object.values(following).filter((value) => {
    return value === true;
  }).length;

  function handleSaveBio() {
    let newBio = bioText;

    setBio(newBio);
    saveData("bio_" + currentUser.username, newBio);
    setEditing(false);
    onToast("Profile updated");
  }

  function handleEdit() {
    if (editing === true) {
      setEditing(false);
      setBioText(bio);
    } else {
      setEditing(true);
      setBioText(bio);
    }
  }

  function handleShareProfile() {
    let profileLink =
      window.location.origin + "/" + currentUser.username;

    copyText(profileLink);
    onToast("Profile link copied");
  }

  let images = myImages;

  if (tab === "reels") {
    images = profileReels;
  } else if (tab === "tagged") {
    images = profileTagged;
  }

  // Set the active tab style
  let postsClass = "tab";
  let reelsClass = "tab";
  let taggedClass = "tab";

  if (tab === "posts") {
    postsClass = "tab on";
  } else if (tab === "reels") {
    reelsClass = "tab on";
  } else if (tab === "tagged") {
    taggedClass = "tab on";
  }

  return (
    <div>

      <div className="profile-top">
        <img
          src={currentUser.avatar}
          alt=""
          className="round-img profile-avatar"
        />

        <div>
          <div className="profile-name">
            <h4>{currentUser.username}</h4>

            {currentUser.verified && (
              <i className="bi bi-patch-check-fill verified-badge"></i>
            )}

            <button
              className="small-btn gray-btn"
              onClick={handleEdit}
            >
              {editing ? "Cancel" : "Edit profile"}
            </button>

            <button
              className="small-btn gray-btn"
              onClick={handleShareProfile}
            >
              Share profile
            </button>
          </div>

          <div className="profile-stats">
            <span>
              <b>{myImages.length}</b> posts
            </span>

            <span>
              <b>{formatCount(currentUser.followers)}</b> followers
            </span>

            <span>
              <b>{currentUser.following + followedCount}</b> following
            </span>
          </div>

          <b>{currentUser.fullName}</b>

        
          {editing === true ? (
            <div className="bio-edit">
              <textarea
                value={bioText}
                onChange={(e) => setBioText(e.target.value)}
                maxLength={150}
              ></textarea>

              <button
                className="small-btn blue-btn"
                onClick={handleSaveBio}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="profile-bio">{bio}</div>
          )}
        </div>
      </div>

      <div className="profile-tabs">
        <button
          className={postsClass}
          onClick={() => setTab("posts")}
        >
          <i className="bi bi-grid-3x3"></i> POSTS
        </button>

        <button
          className={reelsClass}
          onClick={() => setTab("reels")}
        >
          <i className="bi bi-camera-reels"></i> REELS
        </button>

        <button
          className={taggedClass}
          onClick={() => setTab("tagged")}
        >
          <i className="bi bi-person-square"></i> TAGGED
        </button>
      </div>

      <div className="grid-3">
        {images.map((img, index) => {
          let itemClass = "grid-item";

          if (tab === "reels") {
            itemClass = "grid-item tall";
          }

          return (
            <div className={itemClass} key={index}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
