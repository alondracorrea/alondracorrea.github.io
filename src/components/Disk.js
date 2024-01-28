// Disk.jsx
import React, { useState } from "react";
import "./Disk.css";
import useSound from "use-sound";
import soundFile from "../assets/music/Tiger-Tracks_AdobeStock_331814277_preview.mp3";
import Music from "./Music";

const Disk = () => {
  const [play, { stop }] = useSound(soundFile);
  const [isFloating, setIsFloating] = useState(false);
  const [isQuestionMarkClicked, setIsQuestionMarkClicked] = useState(false);
  const [isPromptShowing, setisPromptShowing] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const floatUp = () => {
    setIsFloating(true);
    setIsQuestionMarkClicked(true);
    setisPromptShowing(false);
    const disc = document.querySelector(".floating-disc");
    disc.style.animation = "floatAnimation 3s ease-in-out infinite";
  };

  const playRecord = async () => {
    await play();
    setIsMusicPlaying(true);
    setIsFloating(false);
    setisPromptShowing(true);
  };

  const oringinalState = () => {
    setIsMusicPlaying(false);
    setIsQuestionMarkClicked(false);
    setisPromptShowing(true);
    const disc = document.querySelector(".floating-disc");
    disc.style.animation = "none";
    disc.style.transform = "translateX(-50%)";
  };

  const onStopMusicClick = () => {
    setIsFloating(true);
    setIsMusicPlaying(false);
    setIsQuestionMarkClicked(false);
    stop();
  };

  return (
    <div>
      {isMusicPlaying ? (
        <Music onStopMusic={onStopMusicClick} />
      ) : (
        <div
          className={`disk-container ${isFloating ? "floating" : ""} 
          }`}
        >
          <div className="floating-disc" onClick={floatUp}></div>
          <div
            className={`question ${isQuestionMarkClicked ? "hidden" : ""}`}
            onClick={floatUp}
          >
            ? ? ?
          </div>
          {isFloating && (
            <div className={`prompt ${isPromptShowing ? "hidden" : ""}`}>
              It's a <span id="darkRed">vinyl record.</span>
              <br></br>
              Would you like to play it?
              <br></br>
              <div className="options">
                <span id="option-yes" onClick={playRecord}>
                  Yes
                </span>
                <span id="option-no" onClick={oringinalState}>
                  No
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Disk;
