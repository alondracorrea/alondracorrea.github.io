import React from "react";
import "./Photos.css";
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

import { useState } from "react";
const Photos = () => {
  const images = [
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

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (direction) => {
    if (direction === "next") {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImage((prevIndex) => (prevIndex - 1) % images.length);
    }
  };

  return (
    <div className=" camera-body">
      <h1 id="camera-header">CAMERA</h1>
      <p id="camera-p">
        Click the buttons <p id="square"></p> to see my visits to the outdoors!
      </p>
      <div className="camera-container">
        <div className="pixel-art">
          <div
            className="photo-container"
            style={{
              backgroundImage: `url(${images[currentImage]})`,
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex photo-buttons">
            <div
              className="back-photo"
              onClick={() => changeImage("back")}
            ></div>
            <div
              className="next-photo"
              onClick={() => changeImage("next")}
            ></div>
          </div>
        </div>
      </div>
      {/*
      <div className="back-container">
        <button id="back-btn">
          <Link to="/">
            Back <FontAwesomeIcon icon={faArrowRight} id="back-arrow" />
          </Link>
        </button>
      </div>*/}
      <div>
        <Back />
      </div>
    </div>
  );
};

export default Photos;
