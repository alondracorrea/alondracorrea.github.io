import React from "react";
import "./Footer.css";
const Footer = () => {
  const navigateToSection = (sectionName) => {
    const selectedSection = document.getElementById(sectionName);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-item">2024 @ Alondra Correa</div>

      <div
        className="footer-item"
        id="back-to-top"
        onClick={() => navigateToSection("navbar-section")}
      >
        Back to Top
      </div>
    </div>
  );
};

export default Footer;
