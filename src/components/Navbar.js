import "./Navbar.css";
import { Link } from "react-router-dom";

/*PORTFOLIO*/

const Navbar = () => {
  const navigateToSection = (sectionName) => {
    const selectedSection = document.getElementById(sectionName);
    if (selectedSection) {
      selectedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <span
            className="test"
            onClick={() => navigateToSection("project-section")}
          >
            Project
          </span>
        </li>
        <li className="nav-item">
          <span
            className="test"
            onClick={() => navigateToSection("experience-section")}
          >
            Experience
          </span>
        </li>
        <li className="nav-item">
          <span
            className="test"
            onClick={() => navigateToSection("skills-section")}
          >
            Skills
          </span>
        </li>
        <li className="nav-item">
          <span
            className="test"
            onClick={() => navigateToSection("contact-section")}
          >
            Contact
          </span>
        </li>
      </ul>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/photos">
            <span className="camera"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
