import React from "react";
import "./Next.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Next = ({ projectNames, currProject }) => {
  const nextProject = (currProject + 1) % projectNames.length;
  const prevProject =
    (currProject - 1 + projectNames.length) % projectNames.length;

  return (
    <div className="next-container">
      <div className="next-item">
        <button id="full-btn">
          <Link to={`/projects/${projectNames[prevProject]}`}>
            <FontAwesomeIcon icon={faArrowLeft} id="full-arrow" /> Previous
            Project
          </Link>
        </button>
      </div>
      <div className="next-item">
        <Link to="/">
          <button id="full-btn">
            <FontAwesomeIcon icon={faHouse} id="full-home" />
          </button>
        </Link>
      </div>
      <div className="next-item">
        <button id="full-btn">
          <Link to={`/projects/${projectNames[nextProject]}`}>
            Next <FontAwesomeIcon icon={faArrowRight} id="full-arrow" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Next;
