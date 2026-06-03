import React from "react";
import "./Skills.css";
import pythonLogo from "../assets/python-logo.png";
import sqlLogo from "../assets/sql-logo.png";
import reactLogo from "../assets/react-logo.png";
import jsLogo from "../assets/javascript-logo.png";
import firebaseLogo from "../assets/firebase-logo.png";
import cLogo from "../assets/clogo.jpg";
import cPlusLogo from "../assets/cplus.jpg";
import swiftLogo from "../assets/swift-logo.png";
import cSharpLogo from "../assets/csharp.png";
import azureLogo from "../assets/azure-logo.png";
import cssLogo from "../assets/css.png";
import nodeLogo from "../assets/nodejs.png";
const Skills = () => {
  const logos = [
    pythonLogo,
    sqlLogo,
    reactLogo,
    jsLogo,
    firebaseLogo,
    cLogo,
    cPlusLogo,
    cSharpLogo,
    swiftLogo,
    azureLogo,
    cssLogo,
    nodeLogo,
  ];

  function populateLogos(name) {
    return {
      style: {
        backgroundImage: `url(${name})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      },
    };
  }

  return (
    <div className="skills-container">
      <h1 id="skills-header">SKILLS</h1>
      <div className="skillsDiv">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="skill-item"
            style={populateLogos(logo).style}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
