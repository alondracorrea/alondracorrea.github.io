import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <h1 id="experience-header">EXPERIENCE</h1>
      <div className="experience-container">
          <div className="experience-item">
          <h2 className="experience-title">Technology Analyst</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Southwest Mission Acceleration Center</h3>
            <p className="experience-dates">June 2025 - Current</p>
          </span>
          <p className="experience-detail">
          </p>
        </div>
        <div className="experience-item">
          <h2 className="experience-title">Software Developer</h2>
          <span className="flex type-date">
            <h3 className="experience-company">BreakAway IT</h3>
            <p className="experience-dates">June 2023 - May 2023</p>
          </span>
          <p className="experience-detail">
            <p className="experience-detail">
            • Designed and implemented a robust ticketing system using SQL, Microsoft Azure, and Python for managing tech support requests, organizing ticket notes for over 100 clients<br />
            • Crafted a user-friendly interface with Javascript, HTML, and CSS, with a grid-based layout, scrollable sections, and aesthetic enhancements to improve overall design and UX<br />
            • Optimized SQL queries for faster data retrieval and implemented PowerShell scripts to automate the storage of media files, systematically organizing them by individual ticket<br />
            • Developed tools and widgets including a timer to track ticket progress, an email widget for direct communication, and a pie chart displaying ticket statuses and refined the Homepage Layout
          </p>

          </p>
        </div>
        <div className="experience-item">
          <h2 className="experience-title">Education</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Arizona State University</h3>
            <p className="experience-dates">2019 - 2023</p>
          </span>
          <p className="experience-detail">B.S. in Computer Science</p>
        </div> 
        <div className="experience-item">
          <h2 className="experience-title">Volunteer</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Sojourner Center</h3>
            <p className="experience-dates">August 2023 - December 2023</p>
          </span>
          <p className="experience-detail">
            Assisted and organized donations incoming donation items. Helped new clients get a fresh start by providing essential items and supporting self advocacy and autonomy at the Donation Center
          </p>
        </div>
         <div className="experience-item">
          <h2 className="experience-title">Volunteer</h2>
          <span className="flex type-date">
            <h3 className="experience-company">Maggie's Place</h3>
            <p className="experience-dates">September 2025 - Current</p>
          </span>
          <p className="experience-detail">
            House Helper volunteer – assist with household tasks, cleaning, crafting, events, etc. Great mission to provide safe housing to homeless woman, in a nurturing environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
