import React from "react";
import "./Camera.css";
import { useState } from "react";
import Back from "../components/Back";
import hikePhoto from "../assets/hike.jpg";
import hikePhoto3 from "../assets/hike3.jpg";
import hikePhoto4 from "../assets/hike4.jpg";
import hikePhoto7 from "../assets/hike7.jpg";
import hikePhoto9 from "../assets/hike9.jpg";
import hikePhoto11 from "../assets/hike11.jpg";
import hikePhoto12 from "../assets/hike12.jpg";
import hikePhoto13 from "../assets/hike13.jpg";
import hikePhoto14 from "../assets/hike14.jpg";
import hikePhoto15 from "../assets/hike15.jpg";
import hikePhoto16 from "../assets/grand_canyon/grand_canyon.png";
import hikePhoto17 from "../assets/grand_canyon/grandcanyon1.jpg";
import hikePhoto18 from "../assets/grand_canyon/grandcanyon2.jpg";
import hikePhoto19 from "../assets/zion/zion_canyon.png";
import hikePhoto20 from "../assets/zion/zion1.jpg";
import hikePhoto21 from "../assets/zion/zion2.jpg";
import hikePhoto22 from "../assets/zion/zion3.jpg";
import hikePhoto23 from "../assets/zion/zion4.jpg";
import hikePhoto24 from "../assets/zion/zion5.jpg";


const Camera = () => {
  const hikePhotos = [
    hikePhoto,
    hikePhoto3,
    hikePhoto4,
    hikePhoto7,
    hikePhoto9,
    hikePhoto11,
    hikePhoto12,
    hikePhoto13,
    hikePhoto14,
    hikePhoto15,
    hikePhoto16,
    hikePhoto17,
    hikePhoto18,
    hikePhoto19,
    hikePhoto20,
    hikePhoto21,
    hikePhoto22,
    hikePhoto23,
    hikePhoto24,
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
