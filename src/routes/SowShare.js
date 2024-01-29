import React from "react";
import Next from "../components/Next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProjectDetails.css";
import sow1 from "../assets/sowShare/sowHomePage.jpg";
import sow2 from "../assets/sowShare/sowHomepage2.png";
import sow3 from "../assets/sowShare/sowHomepage3.png";
import sow4 from "../assets/sowShare/sowLit.jpg";
import sow5 from "../assets/sowShare/sowMap.png";
import sow6 from "../assets/sowShare/sowStory.png";

const SowShare = () => {
  const images = [sow1, sow2, sow3, sow4, sow5, sow6];

  //to navigate between projects
  const projectNames = ["sowshare", "gatzbys", "shelterHive", "cookbook"];
  const currProject = projectNames.indexOf("sowshare");

  return (
    <div>
      <div className="detail-container">
        <div className="project-overview">
          <h1 id="project-title-header">Sow&Share</h1>
          <h3>- Full-Stack Website</h3>
          <h2>Technologies Used</h2>

          <p>React, JavaScript, Firebase, HTML, CSS</p>
          <h2>Overview</h2>
          <p>
            Inspired by ShesACrowd, Sow&Share is a full-stack web application
            designed to connect survivors of assault in a safe, anonymous space.
            As a passionate advocate for women' rights and domestic abuse
            awareness, I wanted to advance my web development skills by picking
            up a project that facilitates an open dialogue. The website also
            serves as a resource hub, offering information and statistics on
            issues on the issues mentioned. resources and information on issues
            such as those mentioned.
          </p>

          <h2>Features</h2>
          <ul>
            <li>- User authentication</li>
            <li>- Integration with Firebase backend services</li>
            <li>- Dynamic content creation</li>
            <li>- Friendly UI/UX design</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            Handling real-time updates for the Firebase backend while ensuring a
            smooth user experience posed a small challenge during debugging the
            map updates. I wanted to add my personal UI touch to the website
            while maintaining a responsive layout, so I had to put some thought
            into that. React libraries were another area of web development I
            wanted to delve into and wanted to incorporate a map library, in
            this case, Leaflet.
          </p>
          <h2>Accomplishments</h2>
          <p>Successfully developed a website that provides anonymity.</p>
        </div>
        <Carousel className="carousel-container" showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`sow${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <Next projectNames={projectNames} currProject={currProject} />
    </div>
  );
};

export default SowShare;

/*I wanted
            a project to start my commitment to leveraging technology for
            positive societal impact.*/
