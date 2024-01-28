import React from "react";
import "./Back.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Back = () => {
  return (
    <div className="home-container">
      <div className="home-item">
        <Link to="/">
          <button id="home-btn">
            <FontAwesomeIcon icon={faHouse} id="full-home" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Back;
