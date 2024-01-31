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
            Developed a ticketing system utilizing SQL, Microsoft Azure, and
            Python to effectively manage data. Utilized JavaScript, HTML, and
            CSS for the front end, ensuring the creation of a user-friendly web
            application. Optimized SQL queries for efficient retrieval of ticket
            notes in a production environment. Also involved in providing
            customer service and troubleshooting various IT problems for
            contracted companies.
          </p>
        </div>
        <div className="experience-item">
          <h2 className="experience-title">Education</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Arizona State University</h3>
            <p className="experience-dates">2019 - 2023</p>
          </span>
          <p className="experience-detail">B.S in Computer Science</p>
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
