import React from "react";
import "./ProjectDetails.css";
import Next from "../components/Next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cook1 from "../assets/cookbook/cookHomepage.jpg";
import cook2 from "../assets/cookbook/recipes.jpg";
import cook3 from "../assets/cookbook/category.png";
import cook4 from "../assets/cookbook/fullrecipe.png";
import cook5 from "../assets/cookbook/form.png";

const CookBook = () => {
  const images = [cook1, cook2, cook3, cook4, cook5];
  const projectNames = ["sowshare", "gatzbys", "shelterHive", "cookbook"];
  const currProject = projectNames.indexOf("cookbook");
  return (
    <div>
      <div className="detail-container">
        <div className="project-overview">
          <h1 id="project-title-header">CookBook</h1>
          <h3>Full-Stack Website</h3>
          <h2>Technologies Used</h2>
          <p>React, JavaScript, Node.js, Express.js, SQL, HTML, CSS</p>

          <h2>Overview</h2>
          <p>
            The main idea for this was to have a place where I could write down
            new recipes I want to try from social media instead of using my
            notes app. CookBook simplifies recipe management with a
            user-friendly interface. Users can explore and contribute to
            recipes. The application is built with React.js for the front end,
            Node.js and Express.js for the server, and MySQL for database
            management.
          </p>

          <h2>Features</h2>
          <ul>
            <li>- Integration with MySQL for backend services and storage</li>
            <li>- Dynamic recipe creation and rendering</li>
            <li>
              - Users can browse recipes based on the categories: Breakfast,
              Lunch, Dinner, Dessert, and Appetizer
            </li>
            <li>
              - Responsive Design: The application adapts to different screen
              sizes and follows the flexbox layout
            </li>
          </ul>

          <h2>Challenges</h2>
          <p>
            Faced challenges in setting up my MySQL connection when it came to
            authentication and creating queries based on client-side requests.
          </p>
          <h2>Accomplishments</h2>
          <p>
            Successfully launched a web application for personal use, practicing
            proficiency in database management, and server-side development with
            frameworks.
          </p>
        </div>
        <Carousel className="carousel-container" showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`cook${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
      <Next projectNames={projectNames} currProject={currProject} />
    </div>
  );
};

export default CookBook;
