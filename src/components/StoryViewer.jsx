
import React, { useState, useEffect } from "react";

function StoryViewer({ stories, index, onChange, onClose, onViewed, onToast }) {
  const story = stories[index];

  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reply, setReply] = useState("");
  const [likedMap, setLikedMap] = useState({});

  function goNext() {
    if (index < stories.length - 1) {
      onChange(index + 1);
    } else {
      onClose();
    }
  }

  function goPrev() {
    if (index > 0) {
      onChange(index - 1);
    } else {
      setProgress(0);
    }
  }

  useEffect(() => {
    setProgress(0);
    setReply("");

    if (story) {
      onViewed(story.id);
    }
  }, [index]);

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setProgress((value) => value + 2);
    }, 100);

    return () => clearInterval(timer);
  }, [paused, index]);

  useEffect(() => {
    if (progress >= 100) {
      goNext();
    }
  }, [progress]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") {
        goNext();
      }

      if (e.key === "ArrowLeft") {
        goPrev();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [index]);

  if (!story) {
    return null;
  }

  function handleLike() {
    setLikedMap({
      ...likedMap,
      [story.id]: !likedMap[story.id]
    });
  }

  function handleReply(e) {
    e.preventDefault();

    if (reply.trim() === "") {
      return;
    }

    onToast("Reply sent to " + story.username);
    setReply("");
  }

  return (
    <div className="modal-overlay story-overlay" onClick={onClose}>
      <button className="story-close" onClick={onClose}>
        <i className="bi bi-x-lg"></i>
      </button>

      <button
        className="story-arrow left"
        disabled={index === 0}
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className="story-box" onClick={(e) => e.stopPropagation()}>
        <div className="story-bars">
          {stories.map((item, i) => (
            <div className="story-bar" key={item.id}>
              <div
                className="story-bar-fill"
                style={{
                  width:
                    i < index
                      ? "100%"
                      : i === index
                      ? progress + "%"
                      : "0%"
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="story-header">
          <img
            src={story.avatar}
            alt=""
            className="round-img"
            width="32"
            height="32"
          />
          <b>{story.username}</b>
          <span className="story-time">just now</span>
        </div>

        <img src={story.image} alt="story" className="story-main-img" />

        <form className="story-footer" onSubmit={handleReply}>
          <input
            type="text"
            placeholder={"Reply to " + story.username + "..."}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          />

          {reply.trim() !== "" && (
            <button type="submit" className="story-send">
              Send
            </button>
          )}

          <button
            type="button"
            className="story-like"
            onClick={handleLike}
          >
            <i
              className={
                likedMap[story.id]
                  ? "bi bi-heart-fill liked"
                  : "bi bi-heart"
              }
            ></i>
          </button>
        </form>
      </div>

      <button
        className="story-arrow right"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}

export default StoryViewer;
