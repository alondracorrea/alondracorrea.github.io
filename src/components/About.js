import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import coffeeGif from "../assets/coffee.gif";
import resumePDF from "../assets/resume/Resume.pdf";
/* piskel gif */

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Resume.pdf";
    link.click();
  };
  return (
    <div>
      <div className="container">
        <div className="first">
          <div className="headshotDiv"></div>
          <h1 id="my-name">Alondra Correa</h1>
          <p>
            A <span className="darkerText">software developer</span> with a
            passion for <span className="darkerText">frontend</span>{" "}
            development.
          </p>
        </div>
        <div className="second">
          <div className="about-me">
            <p>
              While pursuing my bachelors of computer science, web development
              became a rabbit hole I dove into head first.
            </p>
            <p>
              Since then I have had side-project experience developing web
              applications, and created full-stack projects.
            </p>
            <p>
              Outside of the digital realm, I channel my interests into hiking
              and film photography. And exploring as many cafes as I can!
            </p>
          </div>
          <div className="coffeeDiv">
            <img src={coffeeGif} alt="coffee gif" />
          </div>
        </div>
      </div>
      <div className="link-container">
        <div className="resume-link" onClick={downloadResume}>
          <FontAwesomeIcon icon={faFile} />
        </div>
        <a
          className="github-link"
          href="https://github.com/alondracorrea/"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/alondra-c-4ba001261/"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default About;
