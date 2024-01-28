import React from "react";
import Next from "../components/Next";
import "./ProjectDetails.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gat1 from "../assets/gatzbys/gatzbysHomepage.png";
import gat2 from "../assets/gatzbys/gatzbySignin.png";
import gat3 from "../assets/gatzbys/yourEvents.png";
import gat4 from "../assets/gatzbys/gatzbysEvents.png";
import gat5 from "../assets/gatzbys/gatsbysAlgo.png";
import gat6 from "../assets/gatzbys/topMatches.png";
import gat7 from "../assets/gatzbys/seatingChart.png";

const Gatzbys = () => {
  const images = [gat1, gat2, gat3, gat4, gat5, gat6, gat7];

  return (
    <div>
      <div className="detail-container">
        <div className="project-overview">
          <h1 id="project-title-header">Gatzby's</h1>
          <h3>- Full-Stack Website</h3>
          <h2>Technologies Used</h2>
          <p>Django, Python, HTML, CSS</p>

          <h2>Overview</h2>
          <p>
            Gatzby's is a full-stack web application designed to create
            relationships through in-person events facilitated by an advanced
            matchmaking algorithm. It caters to individuals seeking diverse
            relationships, where clients complete a questionnaire for tailored
            matchmaking. The project evolved from an initial one-to-one matching
            algorithm to full on web development combining efficiency,
            aesthetics, and user-friendliness.
          </p>

          <h2>Features</h2>
          <ul>
            <li>- User Profiles & Authentication</li>
            <li>- Django Backend Integration</li>
            <li>- Admin and Client side versions</li>
            <li>Psychoogy-based questionnaire</li>
            <li>
              - Built-in Algorithm with Visual Results: includes exportable .csv
              file results
            </li>
          </ul>

          <h2>Challenges</h2>
          <p>
            The main challenge when creating this project was navigating through
            Django itself. Our group was new to this web framework, so we had to
            spend time reading the documentation and understanding our
            capabilities and constraints to achieve our goals.
          </p>
          <h2>Accomplishments</h2>
          <p>
            Launched and showcased our capstone project, receiving positive
            feedback on its overall completion and user-centric design. The
            website incorporates a well-researched algorithm, drawing
            inspiration from similar app algorithms to enhance accessibility to
            events and matches on the platform.
          </p>
        </div>
        <Carousel className="carousel-container" showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`gat${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <Next />
    </div>
  );
};

export default Gatzbys;
