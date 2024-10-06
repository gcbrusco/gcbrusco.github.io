import React from "react";
import "./App.css";
import TabComponent from "./TabComponent";
import EducationSection from "./EducationSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // GitHub and LinkedIn icons
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons"; // Email and Resume (File) icons
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">GB</div>
          <nav className="nav-links">
            <a href="#my-story"> My Story </a> |
            <a href="#education"> Education</a> |
            <a href="#experience"> Experience </a> |
            <a href="/Resume_Brusco.pdf"> Resume </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <AboutSection />
      <EducationSection />
      <ExperienceSection />

      {/* Footer */}
      <footer className="footer">
        <div className="social-icons">
          <a
            href="https://github.com/gcbrusco/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/gina-brusco-1764a91ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="mailto:gcbrusco@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a
            href="/Resume_Brusco.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </a>
        </div>
        <p>&copy; 2024 Gina Brusco. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
