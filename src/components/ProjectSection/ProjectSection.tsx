// src/components/ProjectSection/ProjectSection.tsx

import React, { useState, useRef, useEffect } from "react";
import { projects } from "../../data/ProjectsData";
import ProjectView from "./ProjectView";
import ProjectBar from "./ProjectBar";
import styles from "../../styles/ProjectPage/ProjectSection.module.css";

interface ProjectSectionProps {
    onAnchorsReady?: (anchors: React.RefObject<HTMLDivElement | null>[]) => void;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ onAnchorsReady } ) => {
  const [activeProject, setActiveProject] = useState(projects[0].id);

  // extra anchor refs for path waypoints
  const landingAnchor1 = useRef<HTMLDivElement>(null);
  const landingAnchor2 = useRef<HTMLDivElement>(null);
  const landingAnchor3 = useRef<HTMLDivElement>(null);
  const landingAnchor4 = useRef<HTMLDivElement>(null);
  const landingAnchor5 = useRef<HTMLDivElement>(null);

  const [isFirstDone, setIsFirstDone] = useState(false);
  
  useEffect(() => {
      if (!isFirstDone) {
          const timer = setTimeout(() => {
              setIsFirstDone(true)          // local flag
          }, 2000); // Delay (don't know why it works when added)
          return () => clearTimeout(timer);
      }
  }, [isFirstDone]);

  useEffect(() => {
      if (!isFirstDone) return;

      if (onAnchorsReady) {
          onAnchorsReady([
              landingAnchor1,
              landingAnchor2,
              landingAnchor3,
              landingAnchor4,
              landingAnchor5
          ]);
      }
  }, [isFirstDone]);

  const handleSelect = (id: string) => {
    setActiveProject(id);
  };

  const currentProject = projects.find((p) => p.id === activeProject);

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <ProjectBar active={activeProject} onSelect={handleSelect} />

        <div className={styles.mainContent}>
          <h1 className={styles.heading}>03. Projects</h1>
          <div className={styles.slideshow}>
            {currentProject && (
              <ProjectView
                title={currentProject.title}
                description={currentProject.description}
                image={currentProject.image}
                alt={currentProject.title}
                github={currentProject.github}
                skills={currentProject.skills}
              />
            )}
          </div>
        </div>
      </div>

      {/* Hidden anchors for path waypoints */}
      <div ref={landingAnchor1} className={styles.anchorPoint} style={{ top: "17.5%", left: "49.77%" }} />
      <div ref={landingAnchor2} className={styles.anchorPoint} style={{ top: "17.5%", left: "90%" }} />
      <div ref={landingAnchor3} className={styles.anchorPoint} style={{ bottom: "0%", left: "90%" }} />
      <div ref={landingAnchor4} className={styles.anchorPoint} style={{ bottom: "0%", left: "50%" }} />
      <div ref={landingAnchor5} className={styles.anchorPoint} style={{ bottom: "10%", left: "50%" }} />
    </div>
  );
};

export default ProjectSection;
