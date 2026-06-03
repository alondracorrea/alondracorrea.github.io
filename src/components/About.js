import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import coffeeGif from "../assets/coffee.gif";
/*import resumePDF from "../assets/resume/Resume.pdf";*/
/* piskel gif */

const About = () => {
  /*  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Resume.pdf";
    link.click();
  };*/
  return (
    <div>
      <div className="container">
        <div className="first">
          <div className="headshotDiv"></div>
          <h1 id="my-name">Alondra Correa</h1>
         {/* <p>
            A <span className="darkerText">software developer</span> with a
            passion for
            <span className="darkerText">
              <br></br>front-end
            </span>{" "}
            development.
          </p> */}
        </div>
        <div className="second">
          <div className="about-me">
            <p>
              I graduated from Arizona State University with a degree in Computer Science.
            </p>
            <p>
              Created this portfolio site as a  space to share my projects and my film photos :) 
            </p>
          <p>
             Away from a computer, I like to hike and drink vanilla lattes!
            </p>
          </div>
          <div className="coffeeDiv">
            <img src={coffeeGif} alt="coffee gif" />
          </div>
        </div>
      </div>
      <div className="link-container">
        <a
          className="github-link"
          href="https://github.com/alondracorrea/"
          target="_blank"
          rel="noreferrer"
        ></a>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/alondracorrea/"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default About;
