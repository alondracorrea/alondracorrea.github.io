import React from "react";
import stopMusicGIF from "../assets/vinylplayer2.gif";
import "./Music.css";
const Music = ({ onStopMusic }) => {
  return (
    <div className="music-container">
      <img src={stopMusicGIF} alt="vinyl gif" />
      <div className="stop-text" onClick={onStopMusic}>
        Stop?
      </div>
    </div>
  );
};

export default Music;
