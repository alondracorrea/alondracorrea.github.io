import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Projects = () => {
  const [isPromptNeeded, setPromptNeeded] = useState(false);
  useEffect(() => {
    if (!isPromptNeeded) {
      setPromptNeeded(true);
    }
  }, [isPromptNeeded]);

  const handleGitLinkClick = (projectName) => {
    if (projectName === "gatzbys" && isPromptNeeded) {
      alert("GitHub source code not available due to an NDA.");
    }
  };

  const populateProjectLinks = (projectName) => {
    var projectLink = "/projects/" + projectName;
    if (projectName === "sowshare") {
      projectName = "sowandshare";
    }

    var githubLink = "https://github.com/alondracorrea/" + projectName;

    return (
      <div className="project-links">
        <button className="project-btn">
          <Link to={projectLink} className="link-style">
            read more <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </button>
        {projectName === "gatzbys" ? (
          <a
            className="git-link"
            onClick={() => handleGitLinkClick(projectName)}
          ></a>
        ) : (
          <a
            className="git-link"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          ></a>
        )}
        <div className="web-link">
          <FontAwesomeIcon icon={faLink} />
        </div>
      </div>
    );
  };
  return (
    <div>
      <h1 id="project-header">PROJECTS</h1>
      <div className="project-container">
        <div className="project-item">
          <div
            className="project-picture"
            id="sowshareImage"
            style={{ backgroundColor: "#9d6861 " }}
          ></div>
          <h1 id="project-title">Sow&Share</h1>
          <p>Full Stack Website</p>
          <div className="language-container">
            <div className="language-item">React.js</div>
            <div className="language-item">JavaScript</div>
            <div className="language-item">Firebase</div>

            <div className="language-item">HTML</div>
            <div className="language-item">CSS</div>
          </div>
          {populateProjectLinks("sowshare")}
        </div>
        <div className="project-item">
          <div
            className="project-picture"
            id="gatzbysImage"
            style={{ backgroundColor: "#063312" }}
          ></div>
          <h1 id="project-title">Gatzby's</h1>
          <p>Full Stack Website</p>
          <div className="language-container">
            <div className="language-item">Django</div>
            <div className="language-item">Python</div>
            <div className="language-item">HTML</div>
            <div className="language-item">CSS</div>
          </div>
          {populateProjectLinks("gatzbys")}
        </div>
        <div className="project-item">
          <div
            className="project-picture"
            id="hiveImage"
            style={{ backgroundColor: " #ebcb66" }}
          ></div>
          <h1 id="project-title">ShelterHive</h1>
          <p>Swift ioS App</p>
          <div className="language-container">
            <div className="language-item">Swift</div>
            <div className="language-item">XCode</div>
            <div className="language-item">Firebase</div>
          </div>
          {populateProjectLinks("shelterHive")}
        </div>
        <div className="project-item">
          <div
            className="project-picture"
            id="cookbookImage"
            style={{ backgroundColor: "#d6ae91" }}
          ></div>
          <h1 id="project-title">CookBook</h1>
          <p>Full Stack Website</p>
          <div className="language-container">
            <div className="language-item">React.js</div>
            <div className="language-item">JavaScript</div>
            <div className="language-item">Node.js</div>
            <div className="language-item">Express.js</div>
            <div className="language-item">SQL</div>
            <div className="language-item">HTML</div>
            <div className="language-item">CSS</div>
          </div>
          {populateProjectLinks("cookbook")}
        </div>
      </div>
    </div>
  );
};

export default Projects;
