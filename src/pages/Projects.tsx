import React from "react";
import { useEffect, useState } from "react"
import style from "../styles/SnapScrolling.module.css";

import ProjectIntro from '../components/ProjectPage/ProjectIntro';
import ProjectBar from '../components/ProjectPage/ProjectBar';
import ProjectSection from '../components/ProjectPage/ProjectSection';

const Projects: React.FC = () => {
  //Make sure that the activeSession is tracked (which project you are viewing) for the SideBar
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            setActiveSection(section === "none" ? "" : section || "")
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className={style.page}>

      <ProjectBar active={activeSection} />

      {/* Scrollable Projects */}
      <div className={style.scrollAreaMan}>
        <div data-section="none" className={style.snapSection}>
          <ProjectIntro />
        </div>
        <div id="project1" data-section="project1" className={style.snapSection}>
          <ProjectSection
            title="AI Model for Molecule Toxicity"
            description="An AI model built using the Tox21 dataset to predict molecule toxicity levels."
            image="/images/tox21-project.png"
          />
        </div>
        <div id="project2" data-section="project2" className={style.snapSection}>
          <ProjectSection
            title="Tetris Game"
            description="A Tetris clone with AI and advanced scoring"
            image="/images/tetris.png"
          />
        </div>
      </div>

    </div>
  );
};
  
  export default Projects;
  