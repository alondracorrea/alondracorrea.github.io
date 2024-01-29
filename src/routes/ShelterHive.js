import React from "react";
import "./ProjectDetails.css";
import Next from "../components/Next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hive1 from "../assets/shelterhive/homepage1.png";
import hive2 from "../assets/shelterhive/pics.png";
import hive3 from "../assets/shelterhive/hivepics.png";
import hive4 from "../assets/shelterhive/hivepics2.png";

const ShelterHive = () => {
  const images = [hive1, hive2, hive3, hive4];
  const projectNames = ["sowshare", "gatzbys", "shelterHive", "cookbook"];
  const currProject = projectNames.indexOf("shelterHive");
  return (
    <div>
      <div className="detail-container">
        <div className="project-overview">
          <h1 id="project-title-header">ShelterHive</h1>
          <h3>-Full-Stack Website</h3>
          <h2>Technologies Used</h2>
          <p>Swift, Xcode</p>

          <h2>Overview</h2>
          <p>
            The concept behind this app is to foster community engagement. It
            enables users to discover nearby shelters, share personal reviews,
            and keep track of volunteer opportunities. Users can stay informed
            about social awareness causes through the app's news feature.
          </p>

          <h2>Features</h2>
          <ul>
            <li>- User profile creation and authentication</li>
            <li>- News retrieval and display using APIs</li>
            <li>- Shelter search and information using APIs</li>
            <li>- User can review the shelter</li>
            <li>- User can write a volunteer opportunity for the shelter</li>
          </ul>

          <h2>Challenges</h2>
          <p>
            The main challenge was the difficulties of filtering content from
            both the New York Times API and Yelp Business API required
            thoughtful decision-making. I considered all filters and parameters,
            to ensure the most accurate and relevant news results. I was also
            new to mobile UI/UX design addressing gaps in error handling.
          </p>
          <h2>Accomplishments</h2>
          <p>
            Created an MVVM-architectured mobile app with a secure user
            authentication (Firebase Auth), integrated APIs for real-time
            updates.
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

export default ShelterHive;
