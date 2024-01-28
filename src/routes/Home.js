import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Project from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Disk from "../components/Disk";
const Home = () => {
  return (
    <div>
      <div id="navbar-section">
        <Navbar />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="project-section">
        <Project />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
      <div id="experience-section">
        <Experience />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Disk />
      <Footer />
    </div>
  );
};

export default Home;
