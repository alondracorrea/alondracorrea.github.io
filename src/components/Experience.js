import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <h1 id="experience-header">EXPERIENCE</h1>
      <div className="experience-container">
        <div className="experience-item">
          <h2 className="experience-title">Internship</h2>
          <span className="flex type-date">
            <h3 className="experience-company">BreakAway IT</h3>
            <p className="experience-dates">June 2023 - May 2023</p>
          </span>
          <p className="experience-detail">
            I developed a ticketing system using SQL, Microsoft Azure, and
            Python to manage data. For the front end, I used JavaScript, HTML,
            and CSS to create a user-friendly web application. I optimized SQL
            queries, for the production of ticket notes retrieval. Additionally,
            I worked to provide customer service and troubleshoot various IT
            problems for our contracted companies.
          </p>
        </div>
        <div className="experience-item">
          <h2 className="experience-title">Education</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Arizona State University</h3>
            <p className="experience-dates">December 2023</p>
          </span>
          <p className="experience-detail">Bachelors in Computer Science.</p>
        </div>
        <div className="experience-item">
          <h2 className="experience-title">Volunteer</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Sojourner Center</h3>
            <p className="experience-dates">August 2023 - December 2023</p>
          </span>
          <p className="experience-detail">
            Assisted with transactions, organized clothing, and sorted donations
            at the Donation Center.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
