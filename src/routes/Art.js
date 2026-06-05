import React from "react";
import "./ProjectDetails.css";
import Next from "../components/Next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import art1 from "../assets/sethImages/sethHome.png";
import art2 from "../assets/sethImages/about-seth.png";
import art3 from "../assets/sethImages/inquiry-seth.png";

const Art = () => {
  const images = [art1, art2, art3];
  const projectNames = ["sowshare", "gatzbys", "shelterHive", "cookbook", "art"];
  const currProject = projectNames.indexOf("art");
  return (
    <div className="page-layout-wrapper">
      <div className="detail-container">
        <div className="project-overview">
          <h1 id="project-title-header">Seth's Art Portfolio</h1>
          <h3>Full Stack Website</h3>
          <h2>Languages Used</h2> 
          <p>React| JavaScript | HTML | CSS</p>
          <h2>Overview</h2>
          <p>
            Made this website for my friend to showcase his art. 
            It features a clean and minimalist design.
          </p>

          <h2>Features</h2>
          <ul>
            <li>• Art Gallery</li>
            <li>• About</li>
            <li>• Inquiry Form</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            Choosing his art to feature!
          </p>
          <h2>Accomplishments</h2>
          <p>
            Created a portfolio.
          </p>
        </div>
        <Carousel className="carousel-container" showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`hive${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <Next projectNames={projectNames} currProject={currProject} />
    </div>
  );
};

export default Art;
