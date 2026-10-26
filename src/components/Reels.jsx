
import React, { useState, useRef } from "react";
import { sampleReels } from "../data/posts";
import { copyText, formatCount } from "../utils";

function ReelCard({ reel, onToast }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [liked, setLiked] = useState(false);

  function handlePlay() {
    if (playing) {
      video.current.pause();
      setPlaying(false);
    } else {
      video.current.play();
      setPlaying(true);
    }
  }

  function handleLike() {
    setLiked(!liked);
  }

  function handleMute() {
    setMuted(!muted);
  }

  function handleShare() {
    copyText(window.location.origin + "/reel/" + reel.id);
    onToast("Reel link copied");
  }

  return (
    <div className="reel-row">
      <div className="reel-box">
        <video
          ref={video}
          src={reel.video}
          autoPlay
          loop
          muted={muted}
          playsInline
          onClick={handlePlay}
        ></video>

        {!playing && <i className="bi bi-play-fill reel-play"></i>}

        <div className="reel-info">
          <img src={reel.avatar} alt="" className="round-img" width="30" height="30" />
          <b>{reel.username}</b>
          <p>{reel.caption}</p>
        </div>
      </div>

      <div className="reel-buttons">
        <button onClick={handleLike}>
          <i className={liked ? "bi bi-heart-fill liked" : "bi bi-heart"}></i>
          <span>{formatCount(reel.likes + (liked ? 1 : 0))}</span>
        </button>

        <button onClick={handleMute}>
          <i className={muted ? "bi bi-volume-mute" : "bi bi-volume-up"}></i>
          <span>{muted ? "Muted" : "Sound"}</span>
        </button>

        <button onClick={handleShare}>
          <i className="bi bi-send"></i>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

function Reels({ onToast }) {
  return (
    <div>
      <h3 className="page-title">Reels</h3>

      {sampleReels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} onToast={onToast} />
      ))}
    </div>
  );
}

export default Reels;
