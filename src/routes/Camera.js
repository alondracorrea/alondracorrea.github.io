import React from "react";
import "./Camera.css";
import { useState } from "react";
import Back from "../components/Back";
import hikePhoto from "../assets/hike.jpg";
import hikePhoto2 from "../assets/hike2.jpg";
import hikePhoto3 from "../assets/hike3.jpg";
import hikePhoto4 from "../assets/hike4.jpg";
import hikePhoto5 from "../assets/hike5.jpg";
import hikePhoto6 from "../assets/hike6.jpg";
import hikePhoto7 from "../assets/hike7.jpg";
import hikePhoto8 from "../assets/hike8.jpg";
import hikePhoto9 from "../assets/hike9.jpg";
import hikePhoto10 from "../assets/hike10.jpg";
import hikePhoto11 from "../assets/hike11.jpg";
import hikePhoto12 from "../assets/hike12.jpg";
import hikePhoto13 from "../assets/hike13.jpg";
import hikePhoto14 from "../assets/hike14.jpg";
import hikePhoto15 from "../assets/hike15.jpg";
const Camera = () => {
  const hikePhotos = [
    hikePhoto,
    hikePhoto2,
    hikePhoto3,
    hikePhoto4,
    hikePhoto5,
    hikePhoto6,
    hikePhoto7,
    hikePhoto8,
    hikePhoto9,
    hikePhoto10,
    hikePhoto11,
    hikePhoto12,
    hikePhoto13,
    hikePhoto14,
    hikePhoto15,
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const changePhoto = (direction) => {
    if (direction === "next") {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % hikePhotos.length);
    } else {
      setCurrentPhotoIndex(
        (prevIndex) => (prevIndex - 1 + hikePhotos.length) % hikePhotos.length
      );
    }
  };
  return (
    <div>
      <div className="camera-desc">
        <h1 id="camera-header">CAMERA</h1>
        <p id="camera-p">
          Click the buttons <span id="square"></span> to see my visits to the
          outdoors!
        </p>
      </div>
      <div className="camera-container">
        <div className="camera-body">
          <div
            className="camera-photos"
            style={{
              backgroundImage: `url(${hikePhotos[currentPhotoIndex]})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="buttons-container">
            <button
              className="camera-btn"
              onClick={() => changePhoto("prev")}
            ></button>
            <button
              className="camera-btn"
              onClick={() => changePhoto("next")}
            ></button>
          </div>
        </div>
      </div>
      <div>
        <Back />
      </div>
    </div>
  );
};

export default Camera;
